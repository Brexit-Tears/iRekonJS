const obviously = require('./brexitSecretary');

module.exports = {
    that(actualValue) {
        return {
            isNoneOfTheirBusiness() {
                return "🍻";
            },
            ifYouAskMeIs(expectedValue) {
                obviously(actualValue, expectedValue);
            }
        };
    }
}