let data = [{
  name: "大安十二甲東門住宅利用信用購買組合房舍",
  category: "歷史建築",
  type: "宅第",
  Administrative: "臺北市政府"},
  {name: "北投賴氏祖厝",
  category: "歷史建築",
  type: "祠堂",
  Administrative: "臺北市政府"
  },
  {
  name: "迪化街1段192號店屋",
  category: "歷史建築",
  type: "宅第",
  Administrative: "臺北市政府"
  },
  {
  name: "鐵路局北淡線（圓山站）宿舍",
  category: "歷史建築",
  type: "宅第",
  Administrative: "臺北市政府"
  },
  {
  name: "迪化街一段372號店屋",
  category: "歷史建築",
  type: "宅第",
  Administrative: "臺北市政府" 
}]

const list = document.querySelector(".list")

function init(){
  let str = ""
  data.forEach(function(item){
    let content = `<li>個案名稱：${item.name}。資產類別：${item.category}。資產種類：${item.type}。所屬主管機關：${item.Administrative}。</li>`
    str += content
    list.innerHTML = str
  })
}
init()


const filter = document.querySelector(".filter")


filter.addEventListener("click", function(e){
  if (e.target.value===undefined){
    return
  }
  let str = "" 
  data.forEach(function(item){
    if (e.target.value==="所有資料"){
      str += `<li>個案名稱：${item.name}。資產類別：${item.category}。資產種類：${item.type}。所屬主管機關：${item.Administrative}。</li>`
    }
    if (e.target.value===item.type){
      str += `<li>個案名稱：${item.name}。資產類別：${item.category}。資產種類：${item.type}。所屬主管機關：${item.Administrative}。</li>`
    }
  })
  list.innerHTML = str
})

const buildName = document.querySelector(".buildName") 
const buildCategory = document.querySelector(".buildCategory") 
const buildType = document.querySelector(".buildType")
const buildAdministrative = document.querySelector(".buildAdministrative")
const btn = document.querySelector(".btn") 

btn.addEventListener("click", function(e){
  let obj = {}
  obj.name = buildName.value
  obj.category = buildCategory.value
  obj.type = buildType.value
  obj.Administrative = buildAdministrative.valuea
  data.push(obj)
  buildName.value = ""
  buildCategory.value = ""
  buildType.value = ""
  buildAdministrative.value = ""
  init()
})





// 將 data 裡面的資料換成自己想要顯示的格式
// 按鈕篩選（所有、宅第、祠堂）
// 輸入資料
// 將資料新增到所有資訊