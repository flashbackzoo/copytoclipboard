(function ($) {
    $.entwine('ss', function ($) {
        $('.field.copy-to-clipboard').entwine({
            onadd: function () {
                var $self = this,
                    $field = this.find('input').first(),
                    $buttonWrapper = this
                        .find('.middleColumn')
                        .append('<div class="copy-to-clipboard-button-wrapper"></div>')
                        .find('.copy-to-clipboard-button-wrapper'),
                    $button = $buttonWrapper
                        .append('<button aria-label="Copy to clipboard" title="Copy to clipboard" type="button" class="copy-to-clipboard-button">Copy</button>')
                        .find('.copy-to-clipboard-button'),
                    client = new ZeroClipboard($button);

                client.on('ready', function (readyEvent) {
                    client.on('copy', function (event) {
                        var clipboard = event.clipboardData;

                        clipboard.setData('text/plain', $field.val());
                    });

                    client.on('aftercopy', function(event) {
                        var $message = $buttonWrapper
                            .append('<div class="copied-message">Copied!</div>')
                            .find('.copied-message');

                        setTimeout(function () {
                            $message.remove();
                        }, 1500);
                    });
                });
            }
        });
    });
}(jQuery));
