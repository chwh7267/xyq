var rule = {
    title:'DJ音乐',
    host:'https://music.163.com',
    homeUrl:'/#/',//网站的首页链接,可以是完整路径或者相对路径,用于分类获取和推荐获取 fyclass是分类标签 fypage是页数
    url:'my/m/music/playlist?id=9666066738',
    searchUrl:'/search?musicname=**',
    searchable:1,
    quickSearch:0,
    class_parse:'#top_banner_bg div;a&&Text;a&&href;/#/',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.list_musiclist tr:gt(0);a&&title;img&&src;.cor999:eq(1)&&Text;a&&href',
    二级:'*',
    搜索:'*;*;*;.sc_1&&Text;*',
}
