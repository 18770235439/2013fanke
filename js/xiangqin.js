var ewmBox=document.querySelector(".vweixinbox")
var ewm=document.querySelector('.vweixinTip')
var hTop=document.querySelector('.headerTop')
var hTspans=hTop.querySelectorAll('span')
var nav_LN=document.querySelector('.nav_LN')
var as_nav_LN=nav_LN.querySelectorAll('a')
var duyi=document.querySelector('.duyi')

//获取当前地址栏中的参数信息
var search=location.search
console.log(search)
//获取大盒子对象
var box=document.querySelector(".panel")
var dt;
//判断当前search对象中是否有值
if(search){
    //分割search字符串
    var id=search.split('=')[1];

    (async function(){
        dt=await promiseAjax({
            url:'../php/xiangqin.php',
            data:'id='+id,
            datatype:'json'
        })
        //创建拼接所有内容的字符串
        var str=`
        <span class="blank10"></span>
        <div class="breadNav">
            <a href="./index.html" title="首页" name="nav">首页</a>
            <span>></span>
            <a href="./liebiao.html" title="男装">男装</a>
            <span>></span>
            <a href="./liebiao.html" title="衬衫">衬衫</a>
            <span>></span>
            <a href="./liebiao.html" title="${dt.name}">${dt.name}</a>
        </div>

        <div class="danpinArea">
            <div id="ProductTitleShow" class="danpinTitleTab newclear">
                <div id="productTitle">
                    <h2 title=" ${dt.name}">
                        ${dt.name}
                    </h2>
                    <ul class="ProductSubnav fr" id="ItemTag">
                        <li>
                            <a href="#">产品描述</a>
                            |
                        </li>
                        <li>
                            <a href="#">评论</a>
                            |
                        </li>
                        <li>
                            <a href="#">提问</a>
                        </li>
                    </ul>
                </div>
            </div>
            <span class="blank30"></span>
        </div>

        <div class="divrl">
        <div class="exzoom" id="exzoom">
        <!--大图区域-->
        <div class="exzoom_img_box">
            <ul class='exzoom_img_ul'>
                <li><img src="${dt.img01}"/></li>
                <li><img src="${dt.img02}"/></li>
                <li><img src="${dt.color2}"/></li>
                <li><img src="${dt.color3}"/></li>
            </ul>
        </div>
        <!--缩略图导航-->
        <div class="exzoom_nav"></div>
       
    </div>



            <div id="danpinRight" class="danpinRight" style="top: 0px; display: block;">
                <div class="danpinFixedRightContent">
                    <div name="Normal" id="pricearea">
                        <span class="blank10"></span>
                        <div class="cuxiaoPrice " style="height: auto">
                            <span class="tehuiMoney" style="line-height: 26px; display: block; float: none">
                                <span>特惠价：</span>
                                <span style="font-family: '微软雅黑';">￥<strong>${dt.color1}</strong></span>
                                <span class="after-charge-price" style="font-weight: bold; margin-left: 10px;">充值后相当于:
                                    ¥${dt.pricetete}</span>
                            </span>
                            <span style="height: 10px;display:block;"></span>
                            <a href="#" id="czwenan" style="height: auto;
                            display: inline-block;
                            line-height: 10px;
                            color: #fff;
                            background: #b81c22;
                            padding: 5px;">
                                充100返100，点击充值</a>
                        </div>
                        <span class="blank10"></span>
                    </div>
                    <div class="selectArea">
                        <div class="selColorArea">
                            <span class="blank10"></span>
                            <div class="danpinColor_Select">
                                <div class="danpinColorTitle" style="line-height: 18px;">
                                    <p>颜色：</p>
                                </div>
                                <div class="selColor">
                                    <ul>
                                        <li title="原色" class id="onlickColor">
                                            <div class="colorBlock" name="True">
                                                <a href="#" class="track" name="item-item-select-color_1">
                                                    <span class="SpriteColors" style="background-position: 0px -0px">
                                                        &nbsp;</span>
                                                    <p>原色</p>
                                                </a>
                                            </div>
                                            <span class="colorHoverok"></span>
                                        </li>
                                        <li title="蓝色" class>
                                            <div class="colorBlock" name="True">
                                                <a href="#" class="track" name="item-item-select-color_1">
                                                    <span class="SpriteColors" style="background-position: 0px -36px">
                                                        &nbsp;</span>
                                                    <p>蓝色</p>
                                                </a>
                                            </div>
                                            <span ></span>
                                        </li>
                                        <li title="水洗蓝" class>
                                            <div class="colorBlock" name="True">
                                                <a href="#" class="track" name="item-item-select-color_1">
                                                    <span class="SpriteColors" style="background-position: 0px -72px">
                                                        &nbsp;</span>
                                                    <p>水洗蓝</p>
                                                </a>
                                            </div>
                                            <span ></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div class="selSizeArea">
                                <div class="danpinColorTitle">
                                    <p>尺码：</p>
                                </div>
                                <div class="selSize">
                                    <ul>
                                        <li onclick="ChooseThisSize(this,'15834190',6)" name="15834190">
                                            <p>M</p>
                                        </li>
                                        <li onclick="ChooseThisSize(this,'15834191',6)" name="15834191">
                                            <p>L</p>
                                        </li>
                                        <li onclick="ChooseThisSize(this,'15834192',9)" name="15834192">
                                            <p>XL</p>
                                        </li>
                                        <li onclick="ChooseThisSize(this,'15834193',5)" name="15834193">
                                            <p>XXL</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="goodsNum">
                                <div class="danpinColorTitle" style="line-height: 18px;">
                                    <p>数量：</p>
                                </div>
                                <div class="danpinnumSelect">
                                    <select id="selectedAmount">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                    <span id="comeon" class="LastNum" style="display: inline;">余量有限</span>
                                    <span class="blank15"></span>
                                </div>
                            </div>
                            <span class="blank0"></span>

                            <div class="AreaItotal SelectGoods">
                                <div class="SelectAreaItotal SelectGoods">
                                    <div class="goodsAddArea SelectGoods">
                                        <div class="danpinColorTitle">
                                            <p class="SelectDetail">已选：</p>
                                        </div>
                                        <div class="goodsAdd">
                                            <p class="SelectName">原色</p>
                                            <span class="SelectPoint" style="display: none;"></span>
                                            <p class="SelectSize" style="display: none;"></p>
                                            <p class="NowHasGoods">库存紧张</p>
                                            <span class="blank0"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="shoppingNews">
                                <a href="./cart.html" id="nowbuy" name="item-item-select-shopping" class="btnnowbuy track">
                                    <span>立即购买</span>
                                </a>
                                    <a href="javascript:;" class="btn btn-success duyi">加入购物车</a>
                            </div>
                            <span class="blank20"></span>
                        </div>
                        <div class="blank0"></div>
                    </div>

                    <div id="promotion">
                        <div class="danpin_YhTsBox danpin_YhTsTab ">
                            <h4><span>优惠提示</span></h4>
                            <ul>
                                <li style="background: none; padding-left: 0;">
                                    <span style="display: block; float: left;
                                    width: auto; height: 16px; background: #b81c22; margin: 0px 5px 0  0; color: #fff;
                                    line-height: 16px; text-align: center; padding: 0 5px;">免邮</span>全场购物满199元免运费
                                </li>
                                <div class="promotion-gift-card">
                                    <span
                                        style="display: inline-block; float: left; width: auto; height: 16px; background: #b81c22;
                                    margin: 0 20px 0 0; color: #fff; line-height: 16px; text-align: center; padding: 0 5px;">优惠券</span>
                                    <a onclick="changeDrawerTab()" class="promotion-gift-card-ticket">满200减20</a>
                                    <a onclick="changeDrawerTab()" class="promotion-gift-card-ticket">满1000减150</a>
                                    <a onclick="changeDrawerTab()" class="promotion-gift-card-ticket">新人有礼</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        <span class="blank20"></span>
        <div class="sideBarSettabArea">
            <div class="RsetTabArea">
                <div id="product_set"></div>
                <div id="floatposition"></div>
                <span class="blank8"></span>
                <div class="RsetTabCon">
                    <span class="blank15"></span>
                    <a id="anchor1"></a>
                    <div class="area1">
                        <div style="position: relative; top: 0px; right: 0px; z-index: 0">
                            <span class="blank20"></span>
                        </div>
                        <a id="anchor5"></a>
                        <h3>详情图片：</h3>
                        <span class="blank8"></span>
                        <h3 style="font-weight: normal;">
                            <span>注：</span>
                            <span name="item-item-info-tip">商品实际颜色以静物图为准</span>
                        </h3>
                        <span class="blank5"></span>
                        <div class="imgCon" id="relatedshow">
                            <div class="DetailPicture">
                                <img src="${dt.img1}"
                                    original="${dt.img1}"
                                    style="display: block;">
                                <img src="${dt.img2}"
                                    original="${dt.img2}"
                                    style="display: block;">
                                <img src="${dt.img3}"
                                    original="${dt.img3}"
                                    style="display: block;">
                                <img src="${dt.img4}"
                                    original="${dt.img4}"
                                    style="display: block;">
                                <img src="${dt.img5}"
                                    original="${dt.img5}"
                                    style="display: block;">
                                <img src="${dt.img6}"
                                    original="${dt.img6}"
                                    style="display: block;">
                                <img src="${dt.img7}"
                                    original="${dt.img7}"
                                    style="display: block;">
                                <img src="${dt.img8}"
                                    original="${dt.img8}"
                                    style="display: block;">
                                <img src="${dt.img9}"
                                    original="${dt.img9}"
                                    style="display: block;">
                                <img src="${dt.img10}"
                                    original="${dt.img10}"
                                    style="display: block;">
                                <img src="${dt.img11}"
                                    original="${dt.img11}"
                                    style="display: block;">
                                <img src="${dt.img12}"
                                    original="${dt.img12}"
                                    style="display: block;">
                                <img src="${dt.img13}"
                                    original="${dt.img13}"
                                    style="display: block;">
                                <img src="${dt.img14}"
                                    original="${dt.img14}"
                                    style="display: block;">
                                <img src="${dt.img15}"
                                    original="${dt.img15}"
                                    style="display: block;">
                                <img src="${dt.img16}"
                                    original="${dt.img16}"
                                    style="display: block;">
                                
                            </div>

                            <div class="DetailPicBox">
                                <ul></ul>
                            </div>
                        </div>
                        <a id="feedback"></a>
                    </div>
                </div>
                <span class="blank20"></span>
                <div class="RsetTabCon">
                    <div class="productPinglun">
                        <div style="width: 164px; float: left">
                            <div id="yushouMainS"></div>
                            <div id="hotProduct" class="ptPinglunLef fl"
                                style="width: 190px; padding: 0px; position: static;">
                                <h2 class="hotTitle" style="position: static; top: 0px; left: 0px; height: 40px;
                                line-height: 40px; padding: 0px 0px 0px 25px; border-bottom: 1px solid #b4b4b4;">推荐产品
                                </h2>
                                <ul style="margin: 25px auto; width: 70%;">
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="http://p5.vanclimg.com/product/6/3/9/6391526/mid/6391526-1j202102191603134079.jpg"
                                                alt="" title="凡客衬衫 商务易打理 女款 女纯白">
                                        </a>
                                        <h3>
                                            <a href="#" target="_blank">凡客衬衫 商务易打理 女款 女纯白</a>
                                        </h3>
                                        <p><em>售价￥98</em></p>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="http://p5.vanclimg.com/product/5/7/6/5767924/mid/5767924-1j201508251312348454.jpg"
                                                alt="" title="凡客衬衫 日式 SOKTAS 300 蓝色">
                                        </a>
                                        <h3>
                                            <a href="#" target="_blank">凡客衬衫 日式 SOKTAS 300 蓝色</a>
                                        </h3>
                                        <p><em>售价￥3999</em></p>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="http://p5.vanclimg.com/product/6/3/8/6387873/mid/6387873-1j202004141124529478.jpg"
                                                alt="" title="凡客日式免烫衬衫小方领 短袖 蓝色小方格">
                                        </a>
                                        <h3>
                                            <a href="#" target="_blank">凡客日式免烫衬衫小方领 短袖 蓝色小方格</a>
                                        </h3>
                                        <p><em>售价￥266</em></p>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="http://p5.vanclimg.com/product/6/3/6/6364212/mid/6364212-1j202002171553361370.jpg"
                                                alt="" title="凡客帆布鞋 女款 白色">
                                        </a>
                                        <h3>
                                            <a href="#" target="_blank">凡客帆布鞋 女款 白色</a>
                                        </h3>
                                        <p><em>售价￥158</em></p>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img src="http://p5.vanclimg.com/product/6/3/8/6383937/mid/6383937-1j202002171636011711.jpg"
                                                alt="" title="凡客休闲鞋 系带 2 男款 蓝色">
                                        </a>
                                        <h3>
                                            <a href="#" target="_blank">凡客休闲鞋 系带 2 男款 蓝色</a>
                                        </h3>
                                        <p><em>售价￥198</em></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div class="ptPinglunRig fr" style="width: 980px; padding: 0px;">
                                <a id="anchorPinglun">&nbsp;</a>
                                <div class="NewComment">
                                    <h2 class="hotTitle" style="position: static; top: 0px; left: 0px; height: 40px;
                                    line-height: 40px; padding: 0px 0px 0px 25px; border-bottom: 1px solid #b4b4b4;">
                                        <span style="font-weight: bold;">
                                            最新评论(<span id="feedbackcount0">4</span>)
                                        </span>
                                        <input type="hidden" id="hidPlCount" value="4">
                                        <input type="radio" id="AllPingLun" style="margin-left: 5px;"
                                            name="ChoosePingLun" checked="checked" value="0" plcount="4">
                                        <label for="AllPingLun" style="margin-right: 5px;">全部评论</label>
                                        <input type="radio" id="PicPingLun" name="ChoosePingLun" plcount="0" value="1">
                                        <label for="PicPingLun">图片(0)</label>
                                        <div class="pinglunTabRig fr" style="line-height: 40px; width: 120px; height: 33px;
                                    float: right; padding: 0px; margin-top: 3px; *margin-top: -38px; margin-right: 32px;
                                    border-top: 0px dotted #b4b4b4;">
                                            <a href="./denglu.html" style="width: 120px;
                                    height: 33px; background-color: #d46a6a; color: #fff; display: block; vertical-align: middle;
                                    float: right; line-height: 33px;">
                                                <span style="line-height: 33px;">我要评论</span></a>
                                        </div>
                                    </h2>
                                    <div class="pinglunContent" style="margin-left: 34px;">
                                        <div class="NewCommentDetail">
                                            <div class="pinglunTab pinglunT">
                                                <div class="pinglunTabLef fl" style="border-top: 0px dotted #b4b4b4;">
                                                    <div class="pinlunCon fl">
                                                        <p>版型很好，贴合身形，无色差，好评！</p>
                                                        <span class="pinlunTime">2020-12-29</span>
                                                    </div>
                                                    <div class="productCon fr">
                                                        <span>颜色：蓝色</span>
                                                        <span>尺码：L</span>
                                                        <span>身高：5cm</span>
                                                        <span>体重：5.0kg</span>
                                                        <span class="plsize">
                                                            <尺码合适>
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- 右边 -->
                                                <div class="pinglunTabRig fr" style="border-top: 0px dotted #b4b4b4;">
                                                    <a href="#" class="track"
                                                        name="item-item-comment-user_id">1524*****38</a>
                                                    <span class="blank10"></span>
                                                    <div class="UserLevel" style="background-position: 0px -0px"></div>
                                                </div>
                                            </div>

                                            <div class="pinglunTab pinglunT">
                                                <div class="pinglunTabLef fl">
                                                    <div class="pinlunCon fl">
                                                        <p>版型很好，贴合身形，无色差，好评！</p>
                                                        <span class="pinlunTime">2020-12-29</span>
                                                    </div>
                                                    <div class="productCon fr">
                                                        <span>颜色：蓝色</span>
                                                        <span>尺码：L</span>
                                                        <span>身高：5cm</span>
                                                        <span>体重：5.0kg</span>
                                                        <span class="plsize">
                                                            <尺码合适>
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- 右边 -->
                                                <div class="pinglunTabRig fr">
                                                    <a href="#" class="track"
                                                        name="item-item-comment-user_id">1524*****38</a>
                                                    <span class="blank10"></span>
                                                    <div class="UserLevel" style="background-position: 0px -0px"></div>
                                                </div>
                                            </div>

                                            <div class="pinglunTab pinglunT">
                                                <div class="pinglunTabLef fl">
                                                    <div class="pinlunCon fl">
                                                        <p>买牛津布款太短，这款又太长。迷之尺码。。。</p>
                                                        <span class="pinlunTime">2020-12-25</span>
                                                        <div style="width: 610px;margin-top: 40px;line-height:20px;">
                                                            <div
                                                                style="width: 40px;float: left;margin: 0 auto;margin-top: 19px;height: 35px;">
                                                                <img src="http://i2.vanclimg.com/cms/20170706/4035.jpg"
                                                                    alt="凡客诚品">
                                                            </div>
                                                            <div
                                                                style="width: 510px;float: left;margin-left: 15px;margin-top: 15px;">
                                                                <p style="color: #b81b22;font-weight: bold;">官方回复：</p>
                                                                <p>您好，商品板型不同，尺寸大小也会有区别的哈，您可以根据尺码表里的肩宽胸围选择比较准确哦，感谢您的支持~
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="productCon fr">
                                                        <span>颜色：水洗蓝</span>
                                                        <span>尺码：L</span>
                                                        <span>身高：0cm</span>
                                                        <span>体重：0.0kg</span>
                                                        <span class="plsize">
                                                            <尺码偏大>
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- 右边 -->
                                                <div class="pinglunTabRig fr">
                                                    <a href="#" class="track"
                                                        name="item-item-comment-user_id">1524*****38</a>
                                                    <span class="blank10"></span>
                                                    <div class="UserLevel" style="background-position: 0px -0px"></div>
                                                </div>
                                            </div>

                                            <div class="pinglunTab pinglunT">
                                                <div class="pinglunTabLef fl">
                                                    <div class="pinlunCon fl">
                                                        <p>版型很好，贴合身形，无色差，好评！</p>
                                                        <span class="pinlunTime">2020-12-29</span>
                                                    </div>
                                                    <div class="productCon fr">
                                                        <span>颜色：蓝色</span>
                                                        <span>尺码：L</span>
                                                        <span>身高：5cm</span>
                                                        <span>体重：5.0kg</span>
                                                        <span class="plsize">
                                                            <尺码合适>
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- 右边 -->
                                                <div class="pinglunTabRig fr">
                                                    <a href="#" class="track"
                                                        name="item-item-comment-user_id">1524*****38</a>
                                                    <span class="blank10"></span>
                                                    <div class="UserLevel" style="background-position: 0px -0px"></div>
                                                </div>
                                            </div>

                                            <div class="pinglunTab pinglunT">
                                                <div class="pinglunTabLef fl">
                                                    <div class="pinlunCon fl">
                                                        <p>版型很好，贴合身形，无色差，好评！</p>
                                                        <span class="pinlunTime">2020-12-29</span>
                                                    </div>
                                                    <div class="productCon fr">
                                                        <span>颜色：蓝色</span>
                                                        <span>尺码：L</span>
                                                        <span>身高：5cm</span>
                                                        <span>体重：5.0kg</span>
                                                        <span class="plsize">
                                                            <尺码合适>
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- 右边 -->
                                                <div class="pinglunTabRig fr">
                                                    <a href="#" class="track"
                                                        name="item-item-comment-user_id">1524*****38</a>
                                                    <span class="blank10"></span>
                                                    <div class="UserLevel" style="background-position: 0px -0px"></div>
                                                </div>
                                            </div>

                                            <div class="pinglunTab pinglunT">
                                                <div class="pinglunTabLef fl">
                                                    <div class="pinlunCon fl">
                                                        <p>版型很好，贴合身形，无色差，好评！</p>
                                                        <span class="pinlunTime">2020-12-29</span>
                                                    </div>
                                                    <div class="productCon fr">
                                                        <span>颜色：蓝色</span>
                                                        <span>尺码：L</span>
                                                        <span>身高：5cm</span>
                                                        <span>体重：5.0kg</span>
                                                        <span class="plsize">
                                                            <尺码合适>
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- 右边 -->
                                                <div class="pinglunTabRig fr">
                                                    <a href="#" class="track"
                                                        name="item-item-comment-user_id">1524*****38</a>
                                                    <span class="blank10"></span>
                                                    <div class="UserLevel" style="background-position: 0px -0px"></div>
                                                </div>
                                            </div>

                                            <div class="pinglunTab pinglunT">
                                                <div class="pinglunTabLef fl">
                                                    <div class="pinlunCon fl">
                                                        <p>版型很好，贴合身形，无色差，好评！</p>
                                                        <span class="pinlunTime">2020-12-29</span>
                                                    </div>
                                                    <div class="productCon fr">
                                                        <span>颜色：蓝色</span>
                                                        <span>尺码：L</span>
                                                        <span>身高：5cm</span>
                                                        <span>体重：5.0kg</span>
                                                        <span class="plsize">
                                                            <尺码合适>
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- 右边 -->
                                                <div class="pinglunTabRig fr">
                                                    <a href="#" class="track"
                                                        name="item-item-comment-user_id">1524*****38</a>
                                                    <span class="blank10"></span>
                                                    <div class="UserLevel" style="background-position: 0px -0px">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                    </div>
                                    <div id="feedbackpagerarea">
                                        <div id="styleAssessesPager" class="area2Page">
                                            <div class="area2Page">
                                                <ul>
                                                    <li class="track" name="item-item-comment-page_1"><strong>1</strong>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="productQuiz fr">
                                    <span class="blank20"></span>
                                    <div class="area3 root" name="0">
                                        <h2 class="hotTitle"
                                            style="position: static; top: 0px; left: 0px; height: 40px;
                                        line-height: 40px; padding: 0px 0px 0px 25px; border-bottom: 1px solid #b4b4b4;">
                                            <span>最新提问</span>
                                            <span class="zuixinpinglunnum">
                                                (共<strong id="quizcount">0</strong>条)
                                            </span>
                                            <div class="pinglunTabRig fr"
                                                style="line-height: 40px; width: 120px; height: 33px;
                                        float: right; padding: 0px; margin-top: 3px; *margin-top:-38px; margin-right: 32px;  border-top: 0px dotted #b4b4b4;">
                                                <span id="tiwen">
                                                    <a href="#" name="item-item-quiz-mine" style="width: 120px; height: 33px;
                                            background-color: #d46a6a; color: #fff; display: block; vertical-align: middle;
                                            float: right; line-height: 33px;">
                                                        <span style="line-height:33px;">我要提问</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </h2>
                                        <div id="stylenoquestion">
                                            <div class="area3Con">
                                                <div class="areaquestion" style="border:0px solid;">
                                                    <div style="text-align: center; padding: 50px 0px 30px 0px;">暂无最新提问</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="blank10"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `

        //把当前内容添加到大盒子中
        box.innerHTML=str;
        $("#exzoom").exzoom({
            autoPlay: false,
        });//方法调用，务必在加载完后执行

    })()
   
}
// else{
//     alert("你还没选中商品")
//     location="./liebiao.html"
// }
//给大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断点击的对象是否为加入购物车按钮
    if(target.innerHTML=="加入购物车"){
        //获取localStorage中的cartList3
        var cartList=localStorage.getItem("cartList3")
        //判断当前获取的cartList是否存在
        if(cartList){
            //把localStorage中获取的内容转为数组对象
            cartList=JSON.parse(cartList)
            var a=0 //判断当前添加的商品是否在localStorage中存在
            //遍历数组中所有元素啊
            cartList.forEach(item=>{
                //判断当前遍历的商品是否等于要添加的商品
                if(item.id==dt.id){
                    a++
                    item.cart_number++
                }
            })
            //判断a变量是否等于0
            if(a==0){
                //修改商品数量
                dt.cart_number=1
                //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify(cartList))
        }else{
            //修改当前商品数量
            dt['cart_number']=1
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3",JSON.stringify([dt]))
        }

    }  
}

ewmBox.onmouseover=function(){
    ewm.style.display="block"
}
ewmBox.onmouseout=function(){
    ewm.style.display="none"
}
// console.log(hTspans)
for(attr in hTspans){
    hTspans[attr].onmouseover=function(){
        this.style.color="red"
    }  
    hTspans[attr].onmouseout=function(){
        this.style.color="#808080"
    } 
}

// 导航
$(function(){
    $('.nav_LN>li').hover(function(){
        $(this).children('ul').stop().slideToggle(600)
    })
})
console.log(as_nav_LN)
for(attr in as_nav_LN){
    as_nav_LN[attr].onmouseover=function(){
        this.style.color="red"
    }  
    as_nav_LN[attr].onmouseout=function(){
        this.style.color="#808080"
    } 
}



