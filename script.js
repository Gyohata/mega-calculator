function N(id){return parseFloat(document.getElementById(id).value)}function O(x){document.getElementById('result').innerHTML=x}function M(x){return Number(x).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}
function pct(){let a=N('a'),b=N('b');O(isFinite(a)&&isFinite(b)?b+'% of '+a+' = <b>'+M(a*b/100)+'</b>':'Enter both numbers.')}
function discount(){let p=N('p'),d=N('d');O(isFinite(p)&&isFinite(d)?'You save <b>'+M(p*d/100)+'</b><br>Sale price: <b>'+M(p*(1-d/100))+'</b>':'Enter values.')}
function tip(){let b=N('b'),t=N('t'),n=N('n')||1;O(isFinite(b)&&isFinite(t)?'Tip: <b>'+M(b*t/100)+'</b><br>Total: <b>'+M(b*(1+t/100))+'</b><br>Per person: <b>'+M(b*(1+t/100)/n)+'</b>':'Enter values.')}
function bmi(){let k=N('kg'),c=N('cm');if(!(k>0&&c>0))return O('Enter valid values.');let b=k/(c/100)**2;O('BMI: <b>'+b.toFixed(1)+'</b><br>'+(b<18.5?'Underweight':b<25?'Normal range':b<30?'Overweight':'Obesity'))}
function diff(){let a=new Date(d1.value),b=new Date(d2.value);let x=Math.round(Math.abs(b-a)/86400000);O(isFinite(x)?'Difference: <b>'+x+' days</b>':'Choose both dates.')}
function vat(){let p=N('p'),r=N('r'),v=p*r/100;O('VAT: <b>'+M(v)+'</b><br>Total: <b>'+M(p+v)+'</b>')}
function avg(){let a=nums.value.split(/[,\s]+/).map(Number).filter(isFinite);O(a.length?'Average: <b>'+(a.reduce((x,y)=>x+y,0)/a.length).toFixed(4)+'</b>':'Enter numbers.')}
function pctchange(){let a=N('a'),b=N('b');O(a?'Change: <b>'+((b-a)/a*100).toFixed(2)+'%</b>':'Starting value cannot be zero.')}
function interest(){let p=N('p'),r=N('r'),t=N('t'),i=p*r*t/100;O('Interest: <b>'+M(i)+'</b><br>Total: <b>'+M(p+i)+'</b>')}
function compound(){let p=N('p'),r=N('r')/100,t=N('t'),n=N('n')||1,x=p*Math.pow(1+r/n,n*t);O('Final amount: <b>'+M(x)+'</b><br>Interest: <b>'+M(x-p)+'</b>')}
function loan(){let p=N('p'),r=N('r')/100/12,n=N('n');if(!(p>0&&n>0))return O('Enter valid values.');let x=r?p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1):p/n;O('Monthly payment: <b>'+M(x)+'</b><br>Total: <b>'+M(x*n)+'</b>')}
function margin(){let c=N('c'),s=N('s');O('Profit: <b>'+M(s-c)+'</b><br>Margin: <b>'+((s-c)/s*100).toFixed(2)+'%</b>')}
function markup(){let c=N('c'),m=N('m');O('Selling price: <b>'+M(c*(1+m/100))+'</b>')}
function fuel(){let d=N('d'),e=N('e'),p=N('p'),l=d*e/100;O('Fuel: <b>'+l.toFixed(2)+' L</b><br>Cost: <b>'+M(l*p)+'</b>')}
function electricity(){let w=N('w'),h=N('h'),p=N('p'),k=w*h/1000;O('Energy: <b>'+k.toFixed(3)+' kWh</b><br>Cost: <b>'+M(k*p)+'</b>')}
function grade(){O(N('b')>0?'Grade: <b>'+(N('a')/N('b')*100).toFixed(2)+'%</b>':'Enter total points.')}
function sqrt(){let x=N('x');O(x>=0?'√'+x+' = <b>'+Math.sqrt(x)+'</b>':'Enter a non-negative number.')}
function power(){O('<b>'+N('a')**N('b')+'</b>')}
function dice(){let s=Math.max(2,Math.floor(N('s')||6)),n=Math.max(1,Math.floor(N('n')||1)),a=[];for(let i=0;i<n;i++)a.push(1+Math.floor(Math.random()*s));O('Rolls: <b>'+a.join(', ')+'</b><br>Total: <b>'+a.reduce((x,y)=>x+y,0)+'</b>')}
function coin(){O('<b>'+(Math.random()<.5?'Heads':'Tails')+'</b>')}
function pick(){let a=names.value.split(/\n|,/).map(x=>x.trim()).filter(Boolean);O(a.length?'<b>'+a[Math.floor(Math.random()*a.length)]+'</b>':'Enter names.')}