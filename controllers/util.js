const formatResponseForDialogflow = (texts, sessionInfo, targetFlow, targetPage) => {

    // messages = []

    // texts.forEach(text => {
    //     messages.push(
    //         {
    //             text: {
    //                 text: [text],
    //                 redactedText: [text]
    //             },
    //             responseType: 'HANDLER_PROMPT',
    //             source: 'VIRTUAL_AGENT'
    //         }
    //     );
    // });

    // let responseData = {
    //     fulfillment_response: {
    //         messages: messages
    //     }
    // };

    // if (sessionInfo !== '') {
    //     responseData['sessionInfo'] = sessionInfo;
    // }

    // if (targetFlow !== '') {
    //     responseData['targetFlow'] = targetFlow;
    // }

    // if (targetPage !== '') {
    //     responseData['targetPage'] = targetPage;
    // }

    const suggestion1 = {
        title: 'Option 1',
      };
      const suggestion2 = {
        title: 'Option 2',
      };
      const suggestion3 = {
        title: 'Option 3',
      };
      
      const suggestions = [suggestion1, suggestion2, suggestion3];
      
      const responseData = {
        fulfillmentMessages: [
          {
            platform: 'PLATFORM_UNSPECIFIED',
            suggestions: {
              suggestions: suggestions,
            },
            text: {
              text: ['Please select an option.'],
            },
          },
        ],
      };

    return responseData
};

const getErrorMessage = () => {

    return formatResponseForDialogflow(
        [
            'We are facing a technical issue.',
            'Please try after sometimes or contact the XYZ restaurant.'
        ],
        '',
        '',
        ''
    );
};

module.exports = {
    formatResponseForDialogflow,
    getErrorMessage
};