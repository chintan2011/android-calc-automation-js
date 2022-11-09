var assert = require('assert');
describe('Android Native Calculator App Test', async () => {
    it('Launch Calculator From Menu', async () => {        
        //clear all
        await $('//android.widget.Button[@content-desc="Clear"]').click()
        
        //verify result element is not displayed on screen
        let result = await $('//android.widget.TextView[contains(@resource-id, "result")]');
        result_text = await result.getText();
        assert(result_text === '', 'Result is not empty after pressing clear button');

        let twoNumberLocator = '//android.widget.Button[contains(@text, "2")]';
        let twoNumberElement = await $(twoNumberLocator)
        //press number 2
        await twoNumberElement.click()

        //click add 
        await $('//android.widget.Button[contains(@content-desc, "Add")]').click()

        //press number 2
        await twoNumberElement.click()
        
        //press equals
        await $('//android.widget.Button[@content-desc="Equals"]').click()

        result_text = await result.getText();
        assert(result_text === '4', `Unexpected answer after 2+2, returned ${result_text}`);
    });
});
