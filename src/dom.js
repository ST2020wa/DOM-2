window.dom ={
    create(string){
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    append(parent,node){
        parent.appendChild(node)
    },
    attr(node, name, value){
        if(arguments.length === 3){
          node.setAttribute(name, value)
        }else if(arguments.length === 2){
          return node.getAttribute(name)
        }
      },  
    style(node, name, value){
        if(arguments.length === 3){
          // dom.style(div, 'color', 'red')
          node.style[name] = value
        }else if(arguments.length === 2){
          if(typeof name === 'string'){
            // dom.style(div, 'color')
            return node.style[name]
          }else if(name instanceof Object){
            // dom.style(div, {color: 'red'})
            const object = name
            for(let key in object){
              node.style[key] = object[key]
            }
          }
        }
      }, 
    class: {
        add(node, className){
          node.classList.add(className)
        },
        remove(node,className){
          node.classList.remove(className)
        },
        has(node,className){
          return node.classList.contains(className)
        }
      },  
    find(selector, scope){
        return(scope || document).querySelectorAll(selector)
    },
    each(nodeList, fn){
        for(let i=0; i<nodeList.length; i++){
          fn.call(null, nodeList[i])
        }
      },  
}