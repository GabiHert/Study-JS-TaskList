# Study-JS-TaskList
* Task list with local browser storage.
* Add and remove tasks.
* Current tasks are showed on screen.

&nbsp;
# HTML interactions

## __Element__.addEventListener(__"keypress"__,function(**event**)...)
* __event__ returns object with the pressed key info.
    * usefull __event__ atributes:
        * __.key__ returns string with the key name (Ex: 's' Key = "s").
        * __.keyCode__ returns number with the key code number (Ex: 's' keyCode = 115).       

&nbsp;
* __Element__.focus()
    * __Element__ will be selected (just like if you press the element with your cursor).
    * __.focus()__ reference to what is selected with the cursor in the page.

&nbsp;
## __Element__.setAttribute("__atribute__","__name__")
* Creates new attribute for the element called "__name__". 
* __atribute__ can be a "class" for ex.

&nbsp;
## Remove Elements
~~~ javascript
document.addEventListener("click",function(element){

    if(element.target.classList.contains("remove"))
    {
        console.log(element.target.parentElement);
        element.target.parentElement.remove();
    }
})
~~~ 

* document.addEventListener(__"click"__,function(element)...)
    * Listen to every click interaction into the document.

&nbsp;
* element.target.classList.contains("remove")
    * __element.target -->__ returns the element pressed
    * element.target.__classList -->__ returns all classes contained in the element pressed.
    * element.target.classList.__contains("remove") -->__ returns true if "remove" class is contained into the class list.

&nbsp;
* element.target.parentElement.remove()
    * element.target.__parentElement -->__ returns the parent of the selected element.
    * element.target.parentElement.__remove() -->__ removes the parent of the selected element and so itself

&nbsp;
        
# JSON
## JSON.stringfy(__any__)
* Returns a string in JSON format of __any__.
* Converts "any" to JSON format.

&nbsp;
## JSON.parse(__json__)
* Returns "__json__" conversion as a JS object.
* Converts JSON to JS object.

&nbsp;
# localStorage
* "local" to storage data in browser.
~~~ javascript
localStorage.setItem("tasks",JSONtask);
localStorage.getItem("tasks");
~~~
* .setItem(__"tasks"__,__JSONtask__)
    * __"tasks"__ name for recovery the saved data.
    * __"JSONtask"__ data to be saved (__need to be a string__).

&nbsp;
* .getItem(__"tasks"__) 
    * returns data stored with __"task"__ as key.