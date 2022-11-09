var assert = require('assert');
describe('Android Native Calculator App Test', async () => {
    it('Launch Calculator From Menu', async () => {        
        //clear all
        await $('//android.widget.ImageButton[@content-desc="clear"]').click()
        
        //verify result element is not displayed on screen
        let result = await $('//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]');        
        assert(result.error.error === 'no such element');

        let twoNumberLocator = '//android.widget.ImageButton[@content-desc="2"]';
        let twoNumberElement = await $(twoNumberLocator)
        //press number 2
        await twoNumberElement.click()

        //click add 
        await $('//android.widget.ImageButton[@content-desc="plus"]').click()

        //press number 2
        await twoNumberElement.click()
        
        //press equals
        await $('//android.widget.ImageButton[@content-desc="equals"]').click()

        result_text = await result.getText();
        assert(result_text === '4', `Unexpected answer after 2+2, returned ${result_text}`);
    });
});
