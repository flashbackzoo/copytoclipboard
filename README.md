# CopyToClipboard
Copy a SilverStripe field's value to the clipboard using https://github.com/zeroclipboard/zeroclipboard

Install the module then add the `copy-to-clipboard` CSS class to your text field.

```php
  $fields->addFieldToTab("Root.Main",
    TextField::create('Text')->addExtraClass('copy-to-clipboard')
  );
```

This will add a copy button to your field. Clicking the button with copy the field's value to the clipboard.
