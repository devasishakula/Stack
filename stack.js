let arr=[];
$('#push').click(function()
{
	if($('#ele').val()==='')
	{
		alert('Insert Element...');
	}
	else
	{
		arr.push($('#ele').val());
		$('#show').val('Element ['+$('#ele').val()+'] pushed successfully');
	}	
});
$('#pop').click(function()
{
	if(arr.length===0)
	{
		alert('Stack Empty...')
	}
	else
	{
		let del=arr[arr.length-1];
		delete arr[arr.length-1];
		let arrFilter=arr.filter(el=>{
			return el!=null && el!='';
		});
		arr=arrFilter;
		$('#show').val('Element ['+del+'] popped successfully');
	}
});
$('#top').click(function()
{
	if(arr.length===0)
	{
		alert('Stack Empty...')
	}
	else
	{
		$('#show').val('Top Element = ['+arr[arr.length-1]+']');
	}
});
$('#st').click(function()
{
	if(arr.length===0)
	{
		alert('Stack Empty...')
	}
	else
	{
		$('#show').val('Stack = '+'['+arr+']');
	}
	
});