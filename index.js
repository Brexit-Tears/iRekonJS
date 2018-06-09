// Global truths
global.specialRelationships = undefined;
global.tradeDeals = [];

// Will of the people
const obviously = require('./brexitSecretary');

module.exports = {
    that(actualValue) {
        return {
            isNoneOfTheirBusiness() {
                return "🍻";
            },
            ifYouAskMeIs(expectedValue) {
                obviously(actualValue, expectedValue);
            },
            means() {
                if (actualValue === "BREXIT") {
                    return "BREXIT";
                }
                const theMandate = Math.random() * 100;

                const thePeopleWillIt = theMandate >= 51;
                if (thePeopleWillIt) {
                    return `${actualValue} means BREXIT`;
                } else {
                    throw new Exception("Project Fear 👻");
                }
            }
        };
    }
}