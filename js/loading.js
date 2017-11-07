function start(){
	var $progress = $('.progress');
	var $progressBar = $('.progress-bar');
	var $statusMessage =$('#statusMessage'); 
	var $alert = $('.alert');
		setTimeout(function() {
			$progressBar.css('width', '10%');
			$statusMessage.html("Preparing the Potato for you...");
			setTimeout(function() {
				$progressBar.css('width', '30%');
				$statusMessage.html("Sumitted Request to your Bank...");
				setTimeout(function() {
					$progressBar.css('width', '60%');
					$statusMessage.html("Being reviewed by your Bank...Waiting Response..");
					setTimeout(function(){
						$progressBar.css('width', '70%');
						$statusMessage.html("Not really far away...But still waiting for your Bank");
						setTimeout(function(){
							$progressBar.css('width', '90%');
							$statusMessage.html("Almost ready, making your personalized Potato..");
							setTimeout(function() {
								$progressBar.css('width', '100%');
								$statusMessage.html("Everything is ready. Welcome to Potato!");
								setTimeout(function() {
									$progress.css('display', 'none');
									$statusMessage.css('display','none');
									$alert.css('display', 'block');
								}, 500);
							}, 1500); // WAIT 5 milliseconds
						},1500);
					},2500);
				}, 1000); // WAIT 2 seconds
			}, 1000); // WAIT 1 seconds
		}, 500); // WAIT 1 second
	}

