var it = {"binds":[{"rec":false,"binds":[{"terms":13,"var":{"name":"$dmhoist","id":"r-0-15116","info":{"args":[{"strict":"L","use":"A","type":"Effect e"}],"poly":["e"],"term":"","result":"forall (m :: * -> *) a (n :: * -> *).\n(Coercible (e m a) (e n a), Functor m) =>\n(forall x. m x -> n x) -> e m a -> e n a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"$dEffect","id":"a-1-16744","info":{"args":[],"poly":[],"term":"","result":"Effect e","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"$dCoercible","id":"a-2-16778","info":{"args":[],"poly":[],"term":"","result":"Coercible (e m a) (e n a)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U(U)>"}}},{"name":"$dFunctor","id":"a-3-16779","info":{"args":[],"poly":[],"term":"","result":"Functor m","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"ds","id":"d-4-16817","info":{"args":[],"poly":["x"],"term":"","result":"m x -> n x","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}},{"name":"v","id":"B-5-2","info":{"args":[],"poly":[],"term":"","result":"e m a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"tag":"Lam","body":{"expr":{"tag":"Var","var":{"name":"$dCoercible","id":"a-2-16778"}},"tag":"Case","alts":[{"binds":[{"name":"v","id":"B-7-3","info":{"args":[],"poly":[],"term":"","result":"Coercible (e m a) (e n a)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":"MkCoercible","module":"GHC.Types"}},"rhs":{"tag":"Var","var":{"name":"v","id":"B-5-2"}}}],"val":{"name":"wild","id":"X-6-18","info":{"args":[],"poly":[],"term":"","result":"Coercible (e m a) (e n a)","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}},{"terms":30,"var":{"name":"$dmweave","id":"r-0-15117","info":{"args":[{"strict":"L","use":"1*U(1*C1(U(C(C(U)),A)),A,A)","type":"Effect e"}],"poly":["e"],"term":"","result":"forall (m :: * -> *) (s :: * -> *) a (n :: * -> *).\n(Coercible (e m (s a)) (e n (s a)), Functor s, Functor m,\n Functor n) =>\ns () -> (forall x. s (m x) -> n (s x)) -> e m a -> e n (s a)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"$dEffect","id":"a-8-16744","info":{"args":[],"poly":[],"term":"","result":"Effect e","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,1*U(1*C1(U(C(C(U)),A)),A,A)>"}}},{"name":"eta","id":"B-9-4","info":{"args":[],"poly":[],"term":"","result":"Coercible (e m (s a)) (e n (s a))","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U(U)>"}}},{"name":"eta","id":"B-10-3","info":{"args":[],"poly":[],"term":"","result":"Functor s","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U(A,C(C1(U)))>"}}},{"name":"eta","id":"B-11-2","info":{"args":[],"poly":[],"term":"","result":"Functor m","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"eta","id":"B-12-1","info":{"args":[],"poly":[],"term":"","result":"Functor n","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}],"tag":"Lam","body":{"tag":"Let","body":{"args":[{"name":"s","id":"a-14-15428","info":{"args":[],"poly":[],"term":"","result":"s ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"ds","id":"d-15-16810","info":{"args":[],"poly":["x"],"term":"","result":"s (m x) -> n (s x)","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}],"tag":"Lam","body":{"tag":"Let","body":{"args":[{"name":"x","id":"a-18-16804","info":{"args":[],"poly":[],"term":"","result":"e m a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"expr":{"tag":"Var","var":{"name":"eta","id":"B-9-4"}},"tag":"Case","alts":[{"binds":[{"name":"v","id":"X-20-19","info":{"args":[],"poly":[],"term":"","result":"Coercible (e m (s a)) (e n (s a))","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":"MkCoercible","module":"GHC.Types"}},"rhs":{"args":[{"tag":"Var","var":{"name":"x","id":"a-18-16804"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"g","id":"s-16-16867"}}}}],"val":{"name":"wild","id":"X-19-29","info":{"args":[],"poly":[],"term":"","result":"Coercible (e m (s a)) (e n (s a))","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}},"defs":{"rec":false,"binds":[{"var":{"name":"g","id":"s-16-16867","info":{"args":[],"poly":[],"term":"","result":"e m a -> e m (s a)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,C(U)>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$dFunctor","id":"s-13-16868"}},{"args":[{"name":"ds","id":"d-17-16811","info":{"args":[],"poly":[],"term":"","result":"a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"tag":"Var","var":{"name":"eta","id":"B-10-3"}},{"tag":"Var","var":{"name":"ds","id":"d-17-16811"}},{"tag":"Var","var":{"name":"s","id":"a-14-15428"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"<$","module":"GHC.Base","id":"r-1467","info":"<$"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"fmap","module":"GHC.Base","id":"0-173","info":"fmap"}}}}]}}},"defs":{"rec":false,"binds":[{"var":{"name":"$dFunctor","id":"s-13-16868","info":{"args":[],"poly":[],"term":"","result":"Functor (e m)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U(C(C(U)),A)>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$dEffect","id":"a-8-16744"}},{"tag":"Var","var":{"name":"eta","id":"B-11-2"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$p1Effect","module":"Polysemy.Effect","id":"r-15118","info":"$p1Effect"}}}}]}}}},{"terms":3,"var":{"name":"lvl","id":"s-0-16870","info":{"args":[{"strict":"S","use":"1*U","type":"x"}],"poly":["x"],"term":"","result":"x","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"v","id":"X-21-13","info":{"args":[],"poly":[],"term":"","result":"x","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"tag":"Lam","body":{"tag":"Var","var":{"name":"v","id":"X-21-13"}}}},{"terms":34,"var":{"name":"defaultHoist","id":"r-0-13188","info":{"args":[{"strict":"L","use":"U","type":"Functor m"},{"strict":"L","use":"U(U,U)","type":"Functor n"},{"strict":"L","use":"U(1*C1(U(1*C1(C(U)),A)),1*C1(C1(C1(C1(C1(C(U)))))),A)","type":"Effect e"},{"strict":"L","use":"C(U)","type":"forall x. m x -> n x"}],"poly":["m","n","e","a"],"term":"","result":"e m a -> e n a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"$dFunctor","id":"a-22-16695","info":{"args":[],"poly":[],"term":"","result":"Functor m","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"$dFunctor","id":"a-23-16696","info":{"args":[],"poly":[],"term":"","result":"Functor n","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U(U,U)>"}}},{"name":"$dEffect","id":"a-24-16697","info":{"args":[],"poly":[],"term":"","result":"Effect e","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U(1*C1(U(1*C1(C(U)),A)),1*C1(C1(C1(C1(C1(C(U)))))),A)>"}}},{"name":"eta","id":"B-25-1","info":{"args":[],"poly":["x"],"term":"","result":"m x -> n x","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,C(U)>"}}}],"tag":"Lam","body":{"tag":"Let","body":{"args":[{"name":"x","id":"a-30-16804","info":{"args":[],"poly":[],"term":"","result":"e m a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"tag":"Var","var":{"name":"x","id":"a-30-16804"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"g","id":"s-27-16861"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"f","id":"s-26-16862"}}}},"defs":{"rec":false,"binds":[{"var":{"name":"f","id":"s-26-16862","info":{"args":[],"poly":[],"term":"","result":"e n (Identity a) -> e n a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,C(U)>"}}},"def":{"args":[{"args":[{"tag":"Var","var":{"name":"$dEffect","id":"a-24-16697"}},{"tag":"Var","var":{"name":"$dFunctor","id":"a-23-16696"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$p1Effect","module":"Polysemy.Effect","id":"r-15118","info":"$p1Effect"}}},{"tag":"Glob","var":{"name":"$fFoldableIdentity2","module":"Data.Functor.Identity","id":"r-15129","info":"$fFoldableIdentity2"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"fmap","module":"GHC.Base","id":"0-173","info":"fmap"}}}},{"var":{"name":"g","id":"s-27-16861","info":{"args":[],"poly":[],"term":"","result":"e m a -> e n (Identity a)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,C(U)>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$dEffect","id":"a-24-16697"}},{"tag":"Glob","var":{"name":"$fFunctorIdentity","module":"Data.Functor.Identity","id":"r-15131","info":"$fFunctorIdentity"}},{"tag":"Var","var":{"name":"$dFunctor","id":"a-22-16695"}},{"tag":"Var","var":{"name":"$dFunctor","id":"a-23-16696"}},{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Let","body":{"args":[{"name":"x","id":"a-29-16804","info":{"args":[],"poly":[],"term":"","result":"Identity (m x)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"tag":"Var","var":{"name":"x","id":"a-29-16804"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"eta","id":"B-25-1"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"f","id":"s-28-16864"}}}},"defs":{"rec":false,"binds":[{"var":{"name":"f","id":"s-28-16864","info":{"args":[],"poly":[],"term":"","result":"n x -> n (Identity x)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,C(U)>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$dFunctor","id":"a-23-16696"}},{"tag":"Var","var":{"name":"lvl","id":"s-0-16870"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"fmap","module":"GHC.Base","id":"0-173","info":"fmap"}}}}]}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"weave","module":"Polysemy.Effect","id":"r-15115","info":"weave"}}}}]}}}},{"terms":1,"var":{"name":"$trModule","id":"s-0-16842","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"polysemy-0.1.0.0-IzX3okgutsQ7OM1E6vzFzd\""}}},{"terms":2,"var":{"name":"$trModule","id":"s-0-16843","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-16842"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-211","info":"TrNameS"}}}},{"terms":1,"var":{"name":"$trModule","id":"s-0-16844","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"Polysemy.Effect\""}}},{"terms":2,"var":{"name":"$trModule","id":"s-0-16845","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-16844"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-211","info":"TrNameS"}}}},{"terms":3,"var":{"name":"$trModule","id":"r-0-15120","info":{"args":[],"poly":[],"term":"m","result":"Module","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-16843"}},{"tag":"Var","var":{"name":"$trModule","id":"s-0-16845"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Module","module":"GHC.Types","id":"r-282","info":"Module"}}}},{"terms":3,"var":{"name":"$krep","id":"a-0-16794","info":{"args":[],"poly":[],"term":"m1","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Glob","var":{"name":"$tcConstraint","module":"GHC.Types","id":"3-185","info":"$tcConstraint"}},{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepTyConApp","module":"GHC.Types","id":"r-5129","info":"KindRepTyConApp"}}}},{"terms":3,"var":{"name":"$krep","id":"a-0-16793","info":{"args":[],"poly":[],"term":"m4","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Glob","var":{"name":"krep$*Arr*","module":"GHC.Types","id":"0-521","info":"krep$*Arr*"}},{"tag":"Glob","var":{"name":"krep$*Arr*","module":"GHC.Types","id":"0-521","info":"krep$*Arr*"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepFun","module":"GHC.Types","id":"r-4098","info":"KindRepFun"}}}},{"terms":3,"var":{"name":"$krep","id":"a-0-16792","info":{"args":[],"poly":[],"term":"m4","result":"KindRep","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$krep","id":"a-0-16793"}},{"tag":"Var","var":{"name":"$krep","id":"a-0-16794"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"KindRepFun","module":"GHC.Types","id":"r-4098","info":"KindRepFun"}}}},{"terms":1,"var":{"name":"$tcEffect","id":"s-0-16846","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"Effect\""}}},{"terms":2,"var":{"name":"$tcEffect","id":"s-0-16847","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$tcEffect","id":"s-0-16846"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-211","info":"TrNameS"}}}},{"terms":7,"var":{"name":"$tcEffect","id":"r-0-15119","info":{"args":[],"poly":[],"term":"m","result":"TyCon","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Lit","lit":{"type":"word","lit":"12167996504811628917"}},{"tag":"Lit","lit":{"type":"word","lit":"294026580253291950"}},{"tag":"Var","var":{"name":"$trModule","id":"r-0-15120"}},{"tag":"Var","var":{"name":"$tcEffect","id":"s-0-16847"}},{"tag":"Lit","lit":{"type":"int","lit":"0"}},{"tag":"Var","var":{"name":"$krep","id":"a-0-16792"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TyCon","module":"GHC.Types","id":"r-207","info":"TyCon"}}}}]}],"mod":"Polysemy.Effect"}