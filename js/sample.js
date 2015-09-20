<script src="https://sdk.amazonaws.com/js/aws-sdk-2.2.3.min.js"></script>
<script type="text/javascript">
  // See the Configuring section to configure credentials in the SDK
  AWS.config.credentials = ...;

  // Configure your region
  AWS.config.region = 'us-east-1';


  // Remember to set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in
// the environment before running this program.

const AWS_REGION = 'us-east-1';
const AWS_ACCESS_KEY_ID = 'AKIAIH3X76ZRNKULEFFQ';
const AWS_SECRET_ACCESS_KEY = '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';

var aws = require('aws-sdk');
aws.config.update({
    region: AWS_REGION
    accessKeyId:
    secretAccessKey:
});
var db = new aws.DynamoDB();

db.listTables({}, function(err, data) {
    if (err)
	console.log(err, err.stack);
    else
	console.log(data.TableNames);
});

</script>
