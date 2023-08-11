const formatResponseForDialogflow = (texts, sessionInfo, targetFlow, targetPage) => {

    messages = []

    // texts.forEach(text => {
      messages.push(
        {
            text: {
                text: [texts],
                redactedText: [texts[0]]
            },
           
           
            responseType: 'HANDLER_PROMPT',
            source: 'VIRTUAL_AGENT'
        },
        
    );
    // messages.push({
    //   payload:{
    //     "richContent": [
    //       [
    //         {
    //           "type": "chips",
    //           "options": [
    //             {
    //               "text": "Chip 1",
    //               "image": {
    //                 "src": {
    //                   "rawUrl": "https://example.com/images/logo.png"
    //                 }
    //               },
    //               "link": "https://example.com"
    //             },
    //             {
    //               "text": "Chip 2",
    //               "image": {
    //                 "src": {
    //                   "rawUrl": "https://example.com/images/logo.png"
    //                 }
    //               },
    //               "link": "https://example.com"
    //             }
    //           ]
    //         }
    //       ]
    //     ]
    //   },
    //   responseType: 'HANDLER_PROMPT',
    //         source: 'VIRTUAL_AGENT'
    // })

    
        // messages.push(
        //     {
        //         // text: {
        //         //     text: [text],
        //         //     redactedText: [text]
        //         // },
        //         payload:{
        //           "richContent": [
        //             [
        //               {
        //                 "type": "chips",
        //                 "options": [
        //                   {
        //                     "text": "Chip 1",
        //                     "image": {
        //                       "src": {
        //                         "rawUrl": "https://example.com/images/logo.png"
        //                       }
        //                     },
        //                     "link": "https://example.com"
        //                   },
        //                   {
        //                     "text": "Chip 2",
        //                     "image": {
        //                       "src": {
        //                         "rawUrl": "https://example.com/images/logo.png"
        //                       }
        //                     },
        //                     "link": "https://example.com"
        //                   }
        //                 ]
        //               }
        //             ]
        //           ]
        //         },
        //         responseType: 'HANDLER_PROMPT',
        //         source: 'VIRTUAL_AGENT'
        //     }
        // );
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