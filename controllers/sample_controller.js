const util = require('./util');
const dialogflow = require('@google-cloud/dialogflow-cx').v3Beta1;
const handleSampleResponse = (req) => {

    console.log(req.body);
    let targetFlow = 'projects/trusty-dialect-395403/locations/asia-southeast1/agents/816be4c6-373f-472b-b0f5-ac2c81f84e03/flows/41872baa-2e9a-4d06-92e0-7bf9317dcf29'
    return util.formatResponseForDialogflow(
        [
            'Xin chào. Tôi có thể giúp gì cho bạn?'
            // 'Another sample response.'
        ],
        '',
        '',
        // targetFlow,
        ''
    );
};

module.exports = {
    handleSampleResponse
};