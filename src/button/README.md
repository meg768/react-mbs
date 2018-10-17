
#### Usage 

```js static
import {Button} from 'react-bootify';
/* or */
import Button from 'react-bootify/button';
```

#### Normal buttons

```js

var style = {margin:'0.2rem'};

function onClick() {
    alert('click');
}
<div>
    <Button color='primary' style={style} onClick={onClick}>
        Primary
    </Button>

    <Button color='secondary' style={style}>
        Secondary
    </Button>

    <Button color='success' style={style}>
        Success
    </Button>

    <Button color='danger' style={style}>
        Danger
    </Button>

    <Button color='warning' style={style}>
        Warning
    </Button>

    <Button color='info' style={style}>
        Info
    </Button>

    <Button color='light' style={style}>
        Light
    </Button>

    <Button color='dark' style={style}>
        Dark
    </Button>

</div>

```

#### Large buttons

```js

var style = {margin:'0.2rem'};

function onClick() {
    alert('click');
}
<div>
    <Button color='primary' size='lg' style={style} onClick={onClick}>
        Primary
    </Button>

    <Button color='secondary' size='lg' style={style}>
        Secondary
    </Button>

    <Button color='success' size='lg' style={style}>
        Success
    </Button>

    <Button color='danger' size='lg' style={style}>
        Danger
    </Button>

    <Button color='warning' size='lg' style={style}>
        Warning
    </Button>

    <Button color='info' size='lg' style={style}>
        Info
    </Button>

    <Button color='light' size='lg' style={style}>
        Light
    </Button>

    <Button color='dark' size='lg' style={style}>
        Dark
    </Button>

</div>

```



#### Outlined buttons 

```js

var style = {margin:'0.2rem'};

<div>
    <Button color='primary' outline style={style}>
        Primary
    </Button>

    <Button color='secondary' outline style={style}>
        Secondary
    </Button>

    <Button color='success' outline style={style}>
        Success
    </Button>

    <Button color='danger' outline style={style}>
        Danger
    </Button>

    <Button color='warning' outline style={style}>
        Warning
    </Button>

    <Button color='info' outline style={style}>
        Info
    </Button>

    <Button color='light' outline style={style}>
        Light
    </Button>

    <Button color='dark' outline style={style}>
        Dark
    </Button>

</div>

```




#### Buttons in a Toolbar

```js


<Button.Toolbar>
    <Button color='primary' outline>
        Primary
    </Button>

    <Button color='secondary' outline>
        Secondary
    </Button>

    <Button color='success' outline>
        Success
    </Button>

    <Button color='danger' outline>
        Danger
    </Button>

    <Button color='warning' outline>
        Warning
    </Button>

    <Button color='info' outline>
        Info
    </Button>

    <Button color='light' outline>
        Light
    </Button>

    <Button color='dark' outline>
        Dark
    </Button>

</Button.Toolbar>

```
