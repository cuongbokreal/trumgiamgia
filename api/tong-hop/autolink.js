$("#innerMain").each(function(){
   $(this).html( $(this).html().replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a target="_blank" href="$1">$1</a> ') );
});
