define(
	[ "async!https://maps.google.com/maps/api/js?v=3&sensor=false!callback" ],
	function() {
		return {
			addMapToCanvas: function( mapCanvas ) {
				var myOptions = {
					center: new google.maps.LatLng( -34.397, 150.644 ),
					zoom: 8,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				var map = new google.maps.Map( mapCanvas, myOptions );
				google.maps.event.trigger(map, 'resize');
			}		
		}
	}
);