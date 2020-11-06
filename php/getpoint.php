<?php
//只有已经打卡的点位id返回为1是，代表当前点位是已经被访问过了，需要点亮地图对应位置，为访问的点位不返回数据
$items = array(
  'id_101'=>1,'id_102'=>1,'id_105'=>1,'id_109'=>1,'id_110'=>1,'id_112'=>1
);
    //$message = json_encode($items,JSON_UNESCAPED_UNICODE);
	//描述：第二参数是将中文不转为UNICODE的编码（JSON_UNESCAPED_UNICODE），默认转换成UNICODE的编码；
	$message = json_encode($items);
    echo $message;

?>