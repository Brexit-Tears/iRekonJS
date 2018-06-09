// Best Practices
require('campaign-bus');

// Global truths
global.specialRelationships = undefined;
global.tradeDeals = [];

// Will of the people
const obviously = require('./brexitSecretary');

module.exports = {
    eu: new Promise.reject(),
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
            },
            shouldHaveHappened() {
                const ukJoinedEEC = new Date("Jan 1973");
                const timeUntilIdealBrexit = Date.now() - ukJoinedEEC;
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("GODSAVETHEQUEEN");
                    }, timeUntilIdealBrexit);
                });
            }
        };
    }
}