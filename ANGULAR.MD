# Start Development Mode
$ ng serve

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