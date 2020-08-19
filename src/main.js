console.log('halo')

const nd = dom.create("<div>创建了新节点，名字叫t4</div>");
console.log(nd);

dom.append(test, nd)

dom.attr(t1, 'class','red')
const title = dom.attr(t1, 'class')

dom.attr(t3, 'class','red')
const title3 = dom.attr(t3, 'class')
 
dom.class.add(test, 'red')
