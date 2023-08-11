const formatResponseForDialogflow = (texts, sessionInfo, targetFlow, targetPage) => {

    messages = []
    messages.push(
      {
          // text: {
          //     text: [texts[0]],
          //     // redactedText: [text]
          // },
          payload: {
              "richContent": [
                [
                  {
                    "type": "list",
                    "title": "List item 1 title",
                    "subtitle": "List item 1 subtitle",
                    "event": {
                      "name": ""
                    }
                  },
                  {
                    "type": "divider"
                  },
                  {
                    "type": "list",
                    "title": "List item 2 title",
                    "subtitle": "List item 2 subtitle",
                    "event": {
                      "name": ""
                    }
                  }
                ]
              ]
            },
          responseType: 'HANDLER_PROMPT',
          source: 'VIRTUAL_AGENT'
      }
  );

    // texts.forEach(text => {
    //     messages.push(
    //         {
    //             // text: {
    //             //     text: [text],
    //             //     redactedText: [text]
    //             // },
    //             payload: {
    //                 "richContent": [
    //                   [
    //                     {
    //                       "type": "list",
    //                       "title": "List item 1 title",
    //                       "subtitle": "List item 1 subtitle",
    //                       "event": {
    //                         "name": ""
    //                       }
    //                     },
    //                     {
    //                       "type": "divider"
    //                     },
    //                     {
    //                       "type": "list",
    //                       "title": "List item 2 title",
    //                       "subtitle": "List item 2 subtitle",
    //                       "event": {
    //                         "name": ""
    //                       }
    //                     }
    //                   ]
    //                 ]
    //               },
    //             responseType: 'HANDLER_PROMPT',
    //             source: 'VIRTUAL_AGENT'
    //         }
    //     );
    // });

    let responseData = {
        fulfillment_response: {
            messages: messages
        }
    };

    if (sessionInfo !== '') {
        responseData['sessionInfo'] = sessionInfo;
    }

    if (targetFlow !== '') {
        responseData['targetFlow'] = targetFlow;
    }

    if (targetPage !== '') {
        responseData['targetPage'] = targetPage;
    }

    
        

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