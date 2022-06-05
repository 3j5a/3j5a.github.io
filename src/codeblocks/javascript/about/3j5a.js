"Java JavaScript Julia".toLowerCase().split("")
                       .reduce((a, b) => a[b] !== undefined ? (a[b] += 1, a) : a, 
                        {j: 0, a: 0, _: function() {return `${this.j}j${this.a}a`}})
                       ._(); 