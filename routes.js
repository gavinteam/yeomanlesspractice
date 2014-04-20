module.exports = function(app, fs) {
	app.get('/', function(req, res) {
		res.sendfile('method2.html');
	});
	app.get('/:webname', function(req, res) {
		res.sendfile(req.params.webname + '.html');
	});
	app.get('/download', function(req, res) {
		res.download('images/bush.jpg', 'bush2.jpg', function(err) {
			if (err) {
				condole.log(err);
			} else {
				console.log('file downloaded');
			}
		});
	});
	app.post('/appislands-upload', function(req, res, next) {
		var username = req.body.username;
		var mobile = req.body.mobile;
		var email = req.body.email;
		var profile = req.body.profile;
		var productfile = req.files.productfile;
		
		var fileupload = function(uploadfile){
			var tmp_path = uploadfile.path;
			var target_path = './uploads/' + uploadfile.name;
			fs.rename(tmp_path, target_path, function(err) {
				// If an error is encountered, pass it to the next handler
				if (err) {
					next(err);
				}
				// Delete the temporary file
				fs.unlink(tmp_path, function() {
					// If an error is encountered, pass it to the next handler
					if (err) {
						next(err);
					}
					console.log('File uploaded to: ' + target_path + ' - '
							+ uploadfile.size + ' bytes');
				});
			});
		}
		// 判断是否为多个文件
		if(productfile.length!=undefined){
			productfile.forEach(function(file,i){
				fileupload(file);
			});
		}else{
			fileupload(productfile);
		}
		
		res.redirect('/appislands-upload-success');
	});
	

}