var cheerio = require('cheerio'),

$ = cheerio.load('<p>検索結果：6  レコード</p><table cellpadding="0" cellspacing="0"><tr>		<th width="120"><a href="/eik/work_logs/index_all/page:1/start:2016-11-29/end:2016-11-29/user_id:38/sort:user_id/direction:asc">ユーザー</a></th>	<th width="120"><a href="/eik/work_logs/index_all/page:1/start:2016-11-29/end:2016-11-29/user_id:38/sort:stamptime/direction:asc">登録時刻</a></th>	<th width="85"><a href="/eik/work_logs/index_all/page:1/start:2016-11-29/end:2016-11-29/user_id:38/sort:stamp_type_id/direction:asc">登録種別</a></th>	<th width="85"><a href="/eik/work_logs/index_all/page:1/start:2016-11-29/end:2016-11-29/user_id:38/sort:work_place_id/direction:asc">作業場所</a></th>	<th width="60"><a href="/eik/work_logs/index_all/page:1/start:2016-11-29/end:2016-11-29/user_id:38/sort:latitude/direction:asc">緯度:</a></th>	<th width="60"><a href="/eik/work_logs/index_all/page:1/start:2016-11-29/end:2016-11-29/user_id:38/sort:longitude/direction:asc">経度:</a></th>        <th width="60" class="actions">操作</th>	<th><a href="/eik/work_logs/index_all/page:1/start:2016-11-29/end:2016-11-29/user_id:38/sort:comment/direction:asc">コメント</a></th></tr>	<tr class="altrow">				<td width="120">			長谷川　雄紀		</td>		<td width="120">			2016-11-29 12:28:12		</td>		<td width="80">			退出・OUT		</td>		<td width="80">					</td>		<td width="60">			35.53		</td>		<td width="60">			139.44		</td>                <td width="60" class="actions">                        <a href="http://maps.google.co.jp/maps?hl=ja&amp;ie=UTF8&amp;q=35.532884,139.436556">Map</a>                                                                                        </td>		                <td>                                        </td>	</tr>	<tr>				<td width="120">			長谷川　雄紀		</td>		<td width="120">			2016-11-29 11:06:22		</td>		<td width="80">			出勤・IN		</td>		<td width="80">					</td>		<td width="60">			35.53		</td>		<td width="60">			139.44		</td>                <td width="60" class="actions">                        <a href="http://maps.google.co.jp/maps?hl=ja&amp;ie=UTF8&amp;q=35.532812,139.436582">Map</a>                                                                                        </td>		                <td>                                        </td>	</tr>	<tr class="altrow">				<td width="120">			長谷川　雄紀		</td>		<td width="120">			2016-11-29 10:53:02		</td>		<td width="80">			退出・OUT		</td>		<td width="80">					</td>		<td width="60">			35.54		</td>		<td width="60">			139.45		</td>                <td width="60" class="actions">                        <a href="http://maps.google.co.jp/maps?hl=ja&amp;ie=UTF8&amp;q=35.544817,139.44554">Map</a>                                                                                        </td>		                <td>                                        </td>	</tr>	<tr>				<td width="120">			長谷川　雄紀		</td>		<td width="120">			2016-11-29 10:52:55		</td>		<td width="80">			出勤・IN		</td>		<td width="80">					</td>		<td width="60">			35.54		</td>		<td width="60">			139.45		</td>                <td width="60" class="actions">                        <a href="http://maps.google.co.jp/maps?hl=ja&amp;ie=UTF8&amp;q=35.544817,139.44554">Map</a>                                                                                        </td>		                <td>                                        </td>	</tr>	<tr class="altrow">				<td width="120">			長谷川　雄紀		</td>		<td width="120">			2016-11-29 08:20:44		</td>		<td width="80">			退出・OUT		</td>		<td width="80">					</td>		<td width="60">			35.66		</td>		<td width="60">			139.34		</td>                <td width="60" class="actions">                        <a href="http://maps.google.co.jp/maps?hl=ja&amp;ie=UTF8&amp;q=35.662456,139.337901">Map</a>                                                                                        </td>		                <td>                                        </td>	</tr>	<tr>				<td width="120">			長谷川　雄紀		</td>		<td width="120">			2016-11-29 07:07:05		</td>		<td width="80">			出勤・IN		</td>		<td width="80">					</td>		<td width="60">			35.66		</td>		<td width="60">			139.34		</td>                <td width="60" class="actions">                        <a href="http://maps.google.co.jp/maps?hl=ja&amp;ie=UTF8&amp;q=35.659447,139.337742">Map</a>                                                                                        </td>		                <td>                                        </td>	</tr></table>');

console.log($('p + table').html());
// $('p + table').find('tr gt(0)').each(function () {
//     console.log($(this).find('td:eq(0)').text());
//     console.log($(this).find('td:eq(1)').text());
//     console.log($(this).find('td:eq(2)').text());
//     console.log($(this).find('td:eq(3)').text());
//     console.log($(this).find('td:eq(4)').text());
// }) ;