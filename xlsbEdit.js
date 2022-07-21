let XLSX = require('xlsx');

//表格数据
let tiltle_arr=[[]]
let part_data=[{part_name:'苹果',part_number:'10'},{part_name:'香蕉',part_number:'20'}]
let header=['part_name']
//输入数据：title_arr
let work_sheet=XLSX.utils.aoa_to_sheet(tiltle_arr)
//合并单元格: s——start , e——end , r——row , c——column
let merge=[{s:{r:0,c:0},e:{r:0,c:1}}]
work_sheet['!merges']=merge
// sheet 增加json 数据，表头从 A2单元格开始
XLSX.utils.sheet_add_json(work_sheet,part_data,{header:header,origin:'A2'})
//创建book对象
let work_book=XLSX.utils.book_new()
//向book对象中添加sheet
XLSX.utils.book_append_sheet(work_book,work_sheet,'mySheet')
//输出book 对象
XLSX.writeFile(work_book,'./out/test.xlsb')