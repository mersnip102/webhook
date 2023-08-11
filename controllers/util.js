const formatResponseForDialogflow = (texts, sessionInfo, targetFlow, targetPage) => {

  messages = []
  messages.push(
    {
      text: {
        text: [texts],
        redactedText: [texts[0]]
      },

      responseType: 'HANDLER_PROMPT',
      source: 'VIRTUAL_AGENT'
    }
  );
  messages.push(
    {
      
      payload: {
        "richContent": [
          [
            {
              "type": "chips",
              "options": [
                {
                  "text": "Xem báo cáo kết quả",
                  "image": {
                    "src": {
                      "rawUrl": "https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
                    }
                  },
                  "link": "http://localhost:4200/pages/ket-qua-report"
                },
                {
                  "text": "Báo cáo bằng hình ảnh",
                  "image": {
                    "src": {
                      "rawUrl": "https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png"
                    }
                  },
                  "link": "http://localhost:4200/pages/bao-cao-hinh-anh/lap-bao-cao"
                },
                {
                  "text": "Xem báo cáo bằng hình ảnh",
                  "image": {
                    "src": {
                      "rawUrl": "https://cdn-icons-png.flaticon.com/512/404/404621.png"
                    }
                  },
                  "link": "http://localhost:4200/pages/thong-ke-so-lieu"
                },
                {
                  "text": "Hướng dẫn",
                  "image": {
                    "src": {
                      "rawUrl": "https://cdn-icons-png.flaticon.com/512/6747/6747196.png"
                    }
                  },
                  "link": "https://google.com"
                }
              ]
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