# Start Development Mode
    $ ng serve --open

# Create Angular component
    $ ng generate component COMPONENT_NAME || ng g c COMPONENT_NAME
    $ ng g c Lists --spec false //CMP without testing file
    $ ng g c Lists/item --spec false //Create nested CMP without testing file

#Data binding
    1.  output from ts to html
    string interpolation  {{Data}} it must return a string
    porperty binding  [property]="data"
    
    2. input
    Event binding (event)="epression"

# Referance 
    1. <input #nameInput type="text" id="name">
    
    2. @ViewChild('nameInput') nameInputRef: ElementRef;
    we can access all element Attribute like style, class

# Directives

# ServiceS
    ♦ when service provided in component the same instance of it will be avalibale to the Component and its child unless it's overided.
    
    ♦ it's a normal typescript class
