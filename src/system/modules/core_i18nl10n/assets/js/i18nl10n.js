/**
 * Created by atreju on 13.06.14.
 */

var I18nl10n =
{
    /**
     * Toggle the visibility of an l1on translation
     *
     * @param {object} el    The DOM element
     * @param {string} id    The ID of the target element
     * @param {string} table The table name
     *
     * @returns {boolean}
     */
    toggleL10n: function (el, id, table) {

        el.blur();

        var image = $(el).getFirst('img'),
            publish = (image.src.indexOf('invisible') >= 0),
            div = el.getParent('div'),
            flag = el.getParent('.i18nl10n_language_item').getElement('.i18nl10n_flag');

        console.log(image,publish,div,flag,table,id);

        // Send the request
        if (publish) {
            console.info('set visible');
            
            image.src = image.src.replace('invisible.gif', 'visible.gif');
            flag.src = flag.src.replace('_invisible.png', '.png');
            
            new Request.Contao().post({
                action: 'toggleL10n',
                id: id, 
                state: 0, 
                table: table,
                REQUEST_TOKEN: Contao.request_token
            });
        } else {
            console.info('set invisible');

            image.src = image.src.replace('visible.gif', 'invisible.gif');
            flag.src = flag.src.replace('.png', '_invisible.png');
            
            new Request.Contao().post({
                action: 'toggleL10n',
                id: id,
                state: 1,
                table: table,
                REQUEST_TOKEN: Contao.request_token
            });
        }

        return false;
    },

    toggleFunctions: function() {
        var containers = $$('.i18nl10n_languages');
        containers.toggleClass('open');
    }
};