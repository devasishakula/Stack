let arr=[];
$('#push').click(function()
{
	arr.push($('#ele').val());
	$('#show').val('Element ['+$('#ele').val()+'] pushed successfully');
});
$('#pop').click(function()
{
	let del=arr[arr.length-1];
	delete arr[arr.length-1];
	let arrFilter=arr.filter(el=>{
		return el!=null && el!='';
	});
	arr=arrFilter;
	$('#show').val('Element ['+del+'] popped successfully');
});
$('#top').click(function()
{
	$('#show').val('Top Element = ['+arr[arr.length-1]+']');
});
$('#st').click(function()
{
	$('#show').val('Stack = '+'['+arr+']');
});