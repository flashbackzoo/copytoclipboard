<?php

class CopyToClipboardExtension extends DataExtension {
	public function init() {
		Requirements::css('copytoclipboard/css/copytoclipboard.css');
		Requirements::javascript('copytoclipboard/javascript/ZeroClipboard.min.js');
		Requirements::javascript('copytoclipboard/javascript/main.js');
	}
}
