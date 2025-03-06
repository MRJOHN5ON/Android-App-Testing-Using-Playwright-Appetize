import { expect, test } from '@appetize/playwright';


async function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForContinueButton(session: any) {
    await session.waitForElement({
        attributes: {
            "resource-id": "com.duolingo:id/continueButton",
            "text": "CONTINUE",
            "class": "android.widget.TextView"
        },
    });
}

async function tapContinueButton(session: any) {
    await session.tap({
        element: {
            attributes: {
                "text": "CONTINUE",
                "class": "android.widget.TextView",
                "resource-id": "com.duolingo:id/continueButton"
            }
        }
    });
}


test('New User can select startup options and get started on first lesson', async ({ session }) => {
    // Tap on Get Started button
    await session.tap({
        element: {
            attributes: {
                "resource-id": "com.duolingo:id/introFlowNewUserButton"
            }
        }
    });

    // Assert 'Hi there! I'm Duo' is visible
    await expect(session).toHaveElement({
        attributes: {
            "resource-id": "com.duolingo:id/titleTop",
            "class": "android.widget.TextView"
        }
    });

    await waitForContinueButton(session);

    // Tap on Continue button
    await tapContinueButton(session);

    // Assert "Just 7 quick questions before we start your first lesson!", is visible
    await expect(session).toHaveElement({
        attributes: {
            "resource-id": "com.duolingo:id/titleTop",
            "text": "Just 7 quick questions before we start your first lesson!",
            "class": "android.widget.TextView"
        },

    });

    // Tap on Continue button
    await waitForContinueButton(session);
    //hard wait to give time for the element to be clickable
    await wait(1200);
    await tapContinueButton(session);

    //Assert What would you like to learn?, is visible
    await session.waitForElement({
        attributes: {
            "text": "What would you like to learn?",
            "class": "android.widget.TextView",
            "resource-id": "com.duolingo:id/title",
        }
    });
    //hard wait to give time for the element to be clickable
    await wait(1200);


    //Tap on Spanish
    await session.tap({
        element: {
            attributes: {
                "text": "Spanish",
                "class": "android.widget.TextView",
                "resource-id": "com.duolingo:id/languageName"


            }
        }
    })
    // Tap on Continue button
    await waitForContinueButton(session);
    //hard wait to give time for the element to be clickable
    await wait(1200);
    await tapContinueButton(session);
    await wait(1200);

    //Assert How did you hear about Duolingo?, Question is visible
    await session.waitForElement({
        attributes: {
            "text": "How did you hear about Duolingo?",
            "class": "android.widget.TextView",
            "resource-id": "com.duolingo:id/title",
        }
    });
    // Tap on Friends & Family card
    await session.tap({
        element: {
            attributes: {
                "content-desc": "friendsOrFamily",
                "class": "android.widget.LinearLayout",
                "resource-id": "com.duolingo:id/sourceCard"


            }
        }
    })
    await wait(1200);
    // Tap on Continue button
    await waitForContinueButton(session);
    //hard wait to give time for the element to be clickable
    await wait(1200);
    await tapContinueButton(session);

    await wait(1200);

    //Tap on knowledge level "some words" proficiency card
    await session.tap({
        element: {
            attributes: {
                "content-desc": "WORDS",
                "class": "android.widget.LinearLayout",
                "resource-id": "com.duolingo:id/priorProficiencyCard"


            }
        }
    })
    await wait(1200);
    // Tap on Continue button
    await waitForContinueButton(session);
    //hard wait to give time for the element to be clickable
    await wait(1200);
    await tapContinueButton(session);

    await wait(1200);

    await waitForContinueButton(session);
    //hard wait to give time for the element to be clickable
    await wait(1200);
    await tapContinueButton(session);

    await wait(1200);

    //Tap on reason for learning (work)
    await session.tap({
        element: {
            attributes: {
                "content-desc": "work",
                "class": "android.widget.LinearLayout",
                "resource-id": "com.duolingo:id/motivationCard"


            }
        }
    })

    await waitForContinueButton(session);
    //hard wait to give time for the element to be clickable
    await wait(1200);
    await tapContinueButton(session);

    await wait(1200);

    //Assert Let's unlock new opportunities for you! is visible
    await session.waitForElement({
        attributes: {
            "text": "Let’s unlock new opportunities for you!",
            "class": "android.widget.TextView",
            "resource-id": "com.duolingo:id/title"


        }
    });

    await waitForContinueButton(session);
    //hard wait to give time for the element to be clickable
    await wait(1200);
    await tapContinueButton(session);
    await wait(1200);

    //select learning goals
    await session.tap({
        element: {
            attributes: {
                "class": "android.widget.LinearLayout",
                "resource-id": "com.duolingo:id/xpGoalOptionRegular"


            }
        }
    })
    ///Tap I'm Committed Button
    await session.tap({
        element: {
            attributes: {
                "text": "I’M COMMITTED",
                "class": "android.widget.TextView",
                "resource-id": "com.duolingo:id/continueButton"


            }
        }
    })








});
