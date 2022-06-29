
Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the `switch` or `if` statements.

The input error will be 1 to 5:

```
1 >> "Check the fan: e1"
2 >> "Emergency stop: e2"
3 >> "Pump Error: e3"
4 >> "c: e4"
5 >> "Temperature Sensor Error: e5"
```

For any other value, return `101` (you can use an `if` statment here).

### Examples

```
error(1) ➞ "Check the fan: e1"

error(2) ➞ "Emergency stop: e2"

error(3) ➞ "Pump Error: e3"
```

### Notes

Do this **without** using the `switch` or `if` statements.

## Solutions:
 v1
 
    function error(n) {
    	let error=['','Check the fan: e1','Emergency stop: e2'
    						,'Pump Error: e3','c: e4','Temperature Sensor Error: e5']
     	return n > 0 ? error[n]	: 101
    }


v2

    error=n=>n>5||n<1? 101 :e[--n]
    var e=["Check the fan: e1","Emergency stop: e2","Pump Error: e3","c: e4","Temperature Sensor Error: e5"];
