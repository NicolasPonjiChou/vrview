// JavaScript Document
(function (l, aa) {
    "object" === typeof exports &&
        "undefined" !==
        typeof module ? aa(
            exports) :
        "function" ===
        typeof define && define
        .amd ? define(["exports"]
            , aa) : aa(l.THREE = l
            .THREE || {})
})(this, function (l) {
    function aa(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._w = void 0 !== d ? d :
            1
    }

    function m(a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0
    }

    function I() {
        this.elements =
            new Float32Array([1, 0
                , 0, 0, 0, 1, 0
                , 0, 0, 0, 1, 0
                , 0, 0, 0, 1]);
        0 < arguments.length &&
            console.error(
                "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
            )
    }

    function Ba() {}

    function A(a, b) {
        this.x = a || 0;
        this.y = b || 0
    }

    function ga(a, b, c, d, e, f, g
        , h, k, n) {
        Object.defineProperty(this
            , "id", {
                value: Wb++
            });
        this.uuid = P
            .generateUUID();
        this.name = "";
        this.image = void 0 !== a ?
            a : ga.DEFAULT_IMAGE;
        this.mipmaps = [];
        this.mapping = void 0 !==
            b ? b : ga
            .DEFAULT_MAPPING;
        this.wrapS = void 0 !== c ?
            c : 1001;
        this.wrapT = void 0 !== d ?
            d : 1001;
        this.magFilter = void 0 !==
            e ? e : 1006;
        this.minFilter = void 0 !==
            f ? f : 1008;
        this.anisotropy = void 0 !==
            k ? k : 1;
        this.format = void 0 !== g ?
            g : 1023;
        this.type = void 0 !== h ?
            h : 1009;
        this.offset =
            new A(0, 0);
        this.repeat = new A(1, 1);
        this.generateMipmaps = !0;
        this.premultiplyAlpha = !1;
        this.flipY = !0;
        this.unpackAlignment = 4;
        this.encoding = void 0 !==
            n ? n : 3E3;
        this.version = 0;
        this.onUpdate = null
    }

    function wa(a, b, c, d, e, f, g
        , h, k, n) {
        a = void 0 !== a ? a : [];
        ga.call(this, a, void 0 !==
            b ? b : 301, c, d
            , e, f, g, h, k, n);
        this.flipY = !1
    }

    function Ca(a, b, c) {
        var d = a[0];
        if (0 >= d || 0 < d)
            return a;
        var e = b * c
            , f = Bb[e];
        void 0 === f && (f =
            new Float32Array(e)
            , Bb[e] = f);
        if (0 !== b)
            for (d.toArray(f, 0)
                , d = 1, e =
                0; d !==
                b; ++d) e += c, a[d]
                .toArray(f, e);
        return f
    }

    function Cb(a
        , b) {
        var c = Db[b];
        void 0 === c && (c =
            new Int32Array(b)
            , Db[b] = c);
        for (var d = 0; d !== b; ++
            d) c[d] = a
            .allocTextureUnit();
        return c
    }

    function Xb(a, b) {
        a.uniform1f(this.addr, b)
    }

    function Yb(a, b) {
        a.uniform1i(this.addr, b)
    }

    function Zb(a, b) {
        void 0 === b.x ? a
            .uniform2fv(this.addr
                , b) : a.uniform2f(
                this.addr, b.x, b.y)
    }

    function $b(a, b) {
        void 0 !== b.x ? a
            .uniform3f(this.addr, b
                .x, b.y, b.z) :
            void 0 !== b.r ? a
            .uniform3f(this.addr, b
                .r, b.g, b.b) : a
            .uniform3fv(this.addr
                , b)
    }

    function ac(a, b) {
        void 0 === b.x ? a
            .uniform4fv(this.addr
                , b) : a.uniform4f(
                this.addr
                , b.x, b.y, b.z, b.w
            )
    }

    function bc(a, b) {
        a.uniformMatrix2fv(this
            .addr, !1, b
            .elements || b)
    }

    function cc(a, b) {
        a.uniformMatrix3fv(this
            .addr, !1, b
            .elements || b)
    }

    function dc(a, b) {
        a.uniformMatrix4fv(this
            .addr, !1, b
            .elements || b)
    }

    function ec(a, b, c) {
        var d = c
            .allocTextureUnit();
        a.uniform1i(this.addr, d);
        c.setTexture2D(b || Eb, d)
    }

    function fc(a, b, c) {
        var d = c
            .allocTextureUnit();
        a.uniform1i(this.addr, d);
        c.setTextureCube(b || Fb, d)
    }

    function Gb(a, b) {
        a.uniform2iv(this.addr, b)
    }

    function Hb(a, b) {
        a.uniform3iv(this.addr, b)
    }

    function Ib(a
        , b) {
        a.uniform4iv(this.addr, b)
    }

    function gc(a) {
        switch (a) {
        case 5126:
            return Xb;
        case 35664:
            return Zb;
        case 35665:
            return $b;
        case 35666:
            return ac;
        case 35674:
            return bc;
        case 35675:
            return cc;
        case 35676:
            return dc;
        case 35678:
            return ec;
        case 35680:
            return fc;
        case 5124:
        case 35670:
            return Yb;
        case 35667:
        case 35671:
            return Gb;
        case 35668:
        case 35672:
            return Hb;
        case 35669:
        case 35673:
            return Ib
        }
    }

    function hc(a, b) {
        a.uniform1fv(this.addr, b)
    }

    function ic(a, b) {
        a.uniform1iv(this.addr, b)
    }

    function jc(a, b) {
        a.uniform2fv(this.addr, Ca(
            b
            , this.size, 2))
    }

    function kc(a, b) {
        a.uniform3fv(this.addr, Ca(
            b, this.size, 3
        ))
    }

    function lc(a, b) {
        a.uniform4fv(this.addr, Ca(
            b, this.size, 4
        ))
    }

    function mc(a, b) {
        a.uniformMatrix2fv(this
            .addr, !1, Ca(b
                , this.size, 4))
    }

    function nc(a, b) {
        a.uniformMatrix3fv(this
            .addr, !1, Ca(b
                , this.size, 9))
    }

    function oc(a, b) {
        a.uniformMatrix4fv(this
            .addr, !1, Ca(b
                , this.size, 16)
            )
    }

    function pc(a, b, c) {
        var d = b.length
            , e = Cb(c, d);
        a.uniform1iv(this.addr, e);
        for (a = 0; a !== d; ++a) c
            .setTexture2D(b[a] ||
                Eb, e[a])
    }

    function qc(a, b, c) {
        var d = b.length
            , e = Cb(c, d);
        a.uniform1iv(this.addr
            , e);
        for (a = 0; a !== d; ++a) c
            .setTextureCube(b[a] ||
                Fb, e[a])
    }

    function rc(a) {
        switch (a) {
        case 5126:
            return hc;
        case 35664:
            return jc;
        case 35665:
            return kc;
        case 35666:
            return lc;
        case 35674:
            return mc;
        case 35675:
            return nc;
        case 35676:
            return oc;
        case 35678:
            return pc;
        case 35680:
            return qc;
        case 5124:
        case 35670:
            return ic;
        case 35667:
        case 35671:
            return Gb;
        case 35668:
        case 35672:
            return Hb;
        case 35669:
        case 35673:
            return Ib
        }
    }

    function sc(a, b, c) {
        this.id = a;
        this.addr = c;
        this.setValue = gc(b.type)
    }

    function tc(a, b, c) {
        this.id = a;
        this.addr = c;
        this.size = b.size;
        this.setValue = rc(b.type)
    }

    function Jb(a) {
        this.id = a;
        this.seq = [];
        this.map = {}
    }

    function Ja(a, b, c) {
        this.seq = [];
        this.map = {};
        this.renderer = c;
        c = a.getProgramParameter(b
            , a.ACTIVE_UNIFORMS);
        for (var d = 0; d < c; ++
            d) {
            var e = a
                .getActiveUniform(b
                    , d)
                , f = a
                .getUniformLocation(
                    b, e.name)
                , g = this
                , h = e.name
                , k = h.length;
            for (nb.lastIndex =
                0;;) {
                var n = nb.exec(h)
                    , B = nb
                    .lastIndex
                    , r = n[1]
                    , p = n[3];
                "]" === n[2] && (
                    r |= 0);
                if (void 0 === p ||
                    "[" === p && B +
                    2 === k) {
                    h = g;
                    e = void 0 ===
                        p ? new sc(
                            r, e, f
                        ) :
                        new tc(r, e
                            , f);
                    h.seq.push(e);
                    h.map[e.id] = e;
                    break
                } else p =
                    g.map[r]
                    , void 0 ===
                    p &&
                    (p = new Jb(r)
                        , r = g, g =
                        p, r.seq
                        .push(g), r
                        .map[g.id] =
                        g), g = p
            }
        }
    }

    function da(a, b, c, d) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0;
        this.w = void 0 !== d ? d :
            1
    }

    function ea(a, b, c) {
        return void 0 === b &&
            void 0 === c ? this.set(
                a) : this.setRGB(a
                , b, c)
    }

    function ob(a, b) {
        this.min = void 0 !== a ?
            a : new A(Infinity
                , Infinity);
        this.max = void 0 !== b ?
            b : new A(-Infinity, -
                Infinity)
    }

    function uc(a, b) {
        var c, d, e, f, g, h, k, n
            , B, r, p = a.context
            , q = a.state
            , x, l, z, v, y, S;
        this.render = function (t,
            U
            , G) {
            if (0 !== b
                .length) {
                t = new m;
                var C = G.w / G
                    .z
                    , E = .5 * G
                    .z
                    , J =
                    .5 * G.w
                    , F = 16 / G
                    .w
                    , K = new A(
                        F * C, F
                    )
                    , M = new m(
                        1, 1, 0
                    )
                    , X = new A(
                        1, 1)
                    , V =
                    new ob;
                V.min.set(G.x, G
                    .y);
                V.max.set(G.x +
                    (G.z -
                        16)
                    , G.y +
                    (G
                        .w -
                        16));
                if (void 0 ===
                    v) {
                    var F =
                        new Float32Array(
                            [-1, -
                                1
                                , 0
                                , 0
                                , 1
                                , -
                                1
                                , 1
                                , 0
                                , 1
                                , 1
                                , 1
                                , 1
                                , -
                                1
                                , 1
                                , 0
                                , 1
                                ]
                        )
                        , L =
                        new Uint16Array(
                            [0, 1
                                , 2
                                , 0
                                , 2
                                , 3
                                ]
                        );
                    x = p
                        .createBuffer();
                    l = p
                        .createBuffer();
                    p.bindBuffer(
                        p
                        .ARRAY_BUFFER
                        , x);
                    p.bufferData(
                        p
                        .ARRAY_BUFFER
                        , F,
                        p
                        .STATIC_DRAW
                    );
                    p.bindBuffer(
                        p
                        .ELEMENT_ARRAY_BUFFER
                        , l);
                    p.bufferData(
                        p
                        .ELEMENT_ARRAY_BUFFER
                        , L,
                        p
                        .STATIC_DRAW
                    );
                    y = p
                        .createTexture();
                    S = p
                        .createTexture();
                    q.bindTexture(
                        p
                        .TEXTURE_2D
                        , y);
                    p.texImage2D(
                        p
                        .TEXTURE_2D
                        , 0,
                        p
                        .RGB
                        , 16
                        , 16
                        , 0,
                        p
                        .RGB
                        , p
                        .UNSIGNED_BYTE
                        , null
                    );
                    p.texParameteri(
                        p
                        .TEXTURE_2D
                        , p
                        .TEXTURE_WRAP_S
                        , p
                        .CLAMP_TO_EDGE
                    );
                    p.texParameteri(
                        p
                        .TEXTURE_2D
                        , p
                        .TEXTURE_WRAP_T
                        , p
                        .CLAMP_TO_EDGE
                    );
                    p.texParameteri(
                        p
                        .TEXTURE_2D
                        , p
                        .TEXTURE_MAG_FILTER
                        , p
                        .NEAREST
                    );
                    p.texParameteri(
                        p
                        .TEXTURE_2D
                        , p
                        .TEXTURE_MIN_FILTER
                        , p
                        .NEAREST
                    );
                    q.bindTexture(
                        p
                        .TEXTURE_2D
                        , S);
                    p.texImage2D(
                        p
                        .TEXTURE_2D
                        , 0,
                        p
                        .RGBA
                        , 16
                        , 16
                        , 0,
                        p
                        .RGBA
                        , p
                        .UNSIGNED_BYTE
                        , null
                    );
                    p.texParameteri(
                        p
                        .TEXTURE_2D
                        , p
                        .TEXTURE_WRAP_S
                        , p
                        .CLAMP_TO_EDGE
                    );
                    p.texParameteri(
                        p
                        .TEXTURE_2D
                        , p
                        .TEXTURE_WRAP_T
                        , p
                        .CLAMP_TO_EDGE
                    );
                    p.texParameteri(
                        p
                        .TEXTURE_2D
                        , p
                        .TEXTURE_MAG_FILTER
                        , p
                        .NEAREST
                    );
                    p.texParameteri(
                        p
                        .TEXTURE_2D
                        , p
                        .TEXTURE_MIN_FILTER
                        , p
                        .NEAREST
                    );
                    var F =
                        z = {
                            vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}"
                            , fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                        }
                        , L = p
                        .createProgram()
                        , O = p
                        .createShader(
                            p
                            .FRAGMENT_SHADER
                        )
                        , D = p
                        .createShader(
                            p
                            .VERTEX_SHADER
                        )
                        , H =
                        "precision " +
                        a
                        .getPrecision() +
                        " float;\n";
                    p.shaderSource(
                        O
                        , H +
                        F
                        .fragmentShader
                    );
                    p.shaderSource(
                        D
                        , H +
                        F
                        .vertexShader
                    );
                    p.compileShader(
                        O);
                    p.compileShader(
                        D);
                    p.attachShader(
                        L, O
                    );
                    p.attachShader(
                        L, D
                    );
                    p.linkProgram(
                        L);
                    v = L;
                    B = p
                        .getAttribLocation(
                            v
                            , "position"
                        );
                    r = p
                        .getAttribLocation(
                            v
                            , "uv"
                        );
                    c = p
                        .getUniformLocation(
                            v
                            , "renderType"
                        );
                    d = p
                        .getUniformLocation(
                            v
                            , "map"
                        );
                    e = p
                        .getUniformLocation(
                            v
                            , "occlusionMap"
                        );
                    f = p
                        .getUniformLocation(
                            v
                            , "opacity"
                        );
                    g = p
                        .getUniformLocation(
                            v
                            , "color"
                        );
                    h = p
                        .getUniformLocation(
                            v
                            , "scale"
                        );
                    k = p
                        .getUniformLocation(
                            v
                            , "rotation"
                        );
                    n = p
                        .getUniformLocation(
                            v
                            , "screenPosition"
                        )
                }
                p.useProgram(v);
                q
                    .initAttributes();
                q.enableAttribute(
                    B);
                q.enableAttribute(
                    r);
                q
                    .disableUnusedAttributes();
                p.uniform1i(e
                    , 0);
                p.uniform1i(d
                    , 1);
                p.bindBuffer(p
                    .ARRAY_BUFFER
                    , x);
                p.vertexAttribPointer(
                    B, 2, p
                    .FLOAT
                    , !1,
                    16
                    , 0);
                p.vertexAttribPointer(
                    r, 2, p
                    .FLOAT
                    , !1,
                    16
                    , 8);
                p.bindBuffer(p
                    .ELEMENT_ARRAY_BUFFER
                    , l);
                q.disable(p
                    .CULL_FACE
                );
                q.setDepthWrite(
                    !1);
                L = 0;
                for (O = b
                    .length; L <
                    O; L++)
                    if (F = 16 /
                        G.w, K
                        .set(F *
                            C, F
                        )
                        , D = b[
                            L],
                        t
                        .set(D
                            .matrixWorld
                            .elements[
                                12
                            ]
                            , D
                            .matrixWorld
                            .elements[
                                13
                            ]
                            , D
                            .matrixWorld
                            .elements[
                                14
                            ]
                        ), t
                        .applyMatrix4(
                            U
                            .matrixWorldInverse
                        ), t
                        .applyMatrix4(
                            U
                            .projectionMatrix
                        ), M
                        .copy(
                            t),
                        X
                        .x = G
                        .x + M
                        .x * E +
                        E - 8, X
                        .y = G
                        .y + M
                        .y * J +
                        J - 8, !
                        0 === V
                        .containsPoint(
                            X)
                    ) {
                        q.activeTexture(
                            p
                            .TEXTURE0
                        );
                        q.bindTexture(
                            p
                            .TEXTURE_2D
                            , null
                        );
                        q.activeTexture(
                            p
                            .TEXTURE1
                        );
                        q.bindTexture(
                            p
                            .TEXTURE_2D
                            , y
                        );
                        p.copyTexImage2D(
                            p
                            .TEXTURE_2D
                            , 0
                            , p
                            .RGB
                            , X
                            .x
                            , X
                            .y
                            , 16
                            , 16
                            , 0
                        );
                        p.uniform1i(
                            c
                            , 0
                        );
                        p.uniform2f(
                            h
                            , K
                            .x
                            , K
                            .y
                        );
                        p.uniform3f(
                            n
                            , M
                            .x
                            , M
                            .y
                            , M
                            .z
                        );
                        q.disable(
                            p
                            .BLEND
                        );
                        q.enable(
                            p
                            .DEPTH_TEST
                        );
                        p.drawElements(
                            p
                            .TRIANGLES
                            , 6
                            , p
                            .UNSIGNED_SHORT
                            , 0
                        );
                        q.activeTexture(
                            p
                            .TEXTURE0
                        );
                        q.bindTexture(
                            p
                            .TEXTURE_2D
                            , S
                        );
                        p.copyTexImage2D(
                            p
                            .TEXTURE_2D
                            , 0
                            , p
                            .RGBA
                            , X
                            .x
                            , X
                            .y
                            , 16
                            , 16
                            , 0
                        );
                        p.uniform1i(
                            c
                            , 1
                        );
                        q.disable(
                            p
                            .DEPTH_TEST
                        );
                        q.activeTexture(
                            p
                            .TEXTURE1
                        );
                        q.bindTexture(
                            p
                            .TEXTURE_2D
                            , y
                        );
                        p.drawElements(
                            p
                            .TRIANGLES
                            , 6
                            , p
                            .UNSIGNED_SHORT
                            , 0
                        );
                        D.positionScreen
                            .copy(
                                M
                            );
                        D.customUpdateCallback ?
                            D
                            .customUpdateCallback(
                                D
                            ) :
                            D
                            .updateLensFlares();
                        p.uniform1i(
                            c
                            , 2
                        );
                        q.enable(
                            p
                            .BLEND
                        );
                        for (var H =
                                0
                                , ha =
                                D
                                .lensFlares
                                .length; H <
                            ha; H++
                        ) {
                            var T =
                                D
                                .lensFlares[
                                    H
                                ];
                            .001 <
                                T
                                .opacity &&
                                .001 <
                                T
                                .scale &&
                                (M.x =
                                    T
                                    .x
                                    , M
                                    .y =
                                    T
                                    .y
                                    , M
                                    .z =
                                    T
                                    .z
                                    , F =
                                    T
                                    .size *
                                    T
                                    .scale /
                                    G
                                    .w
                                    , K
                                    .x =
                                    F *
                                    C
                                    , K
                                    .y =
                                    F
                                    , p
                                    .uniform3f(
                                        n
                                        , M
                                        .x
                                        , M
                                        .y
                                        , M
                                        .z
                                    )
                                    , p
                                    .uniform2f(
                                        h
                                        , K
                                        .x
                                        , K
                                        .y
                                    )
                                    , p
                                    .uniform1f(
                                        k
                                        , T
                                        .rotation
                                    )
                                    , p
                                    .uniform1f(
                                        f
                                        , T
                                        .opacity
                                    )
                                    , p
                                    .uniform3f(
                                        g
                                        , T
                                        .color
                                        .r
                                        , T
                                        .color
                                        .g
                                        , T
                                        .color
                                        .b
                                    )
                                    , q
                                    .setBlending(
                                        T
                                        .blending
                                        , T
                                        .blendEquation
                                        , T
                                        .blendSrc
                                        , T
                                        .blendDst
                                    )
                                    , a
                                    .setTexture2D(
                                        T
                                        .texture
                                        , 1
                                    )
                                    , p
                                    .drawElements(
                                        p
                                        .TRIANGLES
                                        , 6
                                        , p
                                        .UNSIGNED_SHORT
                                        , 0
                                    )
                                )
                        }
                    } q.enable(p
                    .CULL_FACE
                );
                q.enable(p
                    .DEPTH_TEST
                );
                q.setDepthWrite(
                    !0);
                a.resetGLState()
            }
        }
    }

    function vc(a, b) {
        var c, d, e, f, g, h, k, n
            , B, r, p, q, l, w, z,
            v
            , y;

        function S(a
            , b) {
            return a.renderOrder !==
                b.renderOrder ? a
                .renderOrder - b
                .renderOrder : a
                .z !== b.z ? b.z - a
                .z : b.id - a.id
        }
        var t = a.context
            , U = a.state
            , G, C, E, J, F = new m
            , K = new aa
            , M = new m;
        this.render = function (m
            , V) {
            if (0 !== b
                .length) {
                if (void 0 ===
                    E) {
                    var L =
                        new Float32Array(
                            [-.5
                                , -
                                .5
                                , 0
                                , 0
                                , .5
                                , -
                                .5
                                , 1
                                , 0
                                , .5
                                , .5
                                , 1
                                , 1
                                , -
                                .5
                                , .5
                                , 0
                                , 1
                                ]
                        )
                        , O =
                        new Uint16Array(
                            [0, 1
                                , 2
                                , 0
                                , 2
                                , 3
                                ]
                        );
                    G = t
                        .createBuffer();
                    C = t
                        .createBuffer();
                    t.bindBuffer(
                        t
                        .ARRAY_BUFFER
                        , G);
                    t.bufferData(
                        t
                        .ARRAY_BUFFER
                        , L,
                        t

                        .STATIC_DRAW
                    );
                    t.bindBuffer(
                        t
                        .ELEMENT_ARRAY_BUFFER
                        , C);
                    t.bufferData(
                        t
                        .ELEMENT_ARRAY_BUFFER
                        , O
                        , t
                        .STATIC_DRAW
                    );
                    var L = t
                        .createProgram()
                        , O = t
                        .createShader(
                            t
                            .VERTEX_SHADER
                        )
                        , D = t
                        .createShader(
                            t
                            .FRAGMENT_SHADER
                        );
                    t.shaderSource(
                        O, ["precision " +
                            a
                            .getPrecision() +
                            " float;"
                            , "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"
                            ]
                        .join(
                            "\n"
                        )
                    );
                    t.shaderSource(
                        D, ["precision " +
                            a
                            .getPrecision() +
                            " float;"
                            , "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"
                            ]
                        .join(
                            "\n"
                        )
                    );
                    t.compileShader(
                        O);
                    t.compileShader(
                        D);
                    t.attachShader(
                        L, O
                    );
                    t.attachShader(
                        L, D
                    );
                    t.linkProgram(
                        L);
                    E = L;
                    v = t
                        .getAttribLocation(
                            E
                            , "position"
                        );
                    y = t
                        .getAttribLocation(
                            E
                            , "uv"
                        );
                    c = t
                        .getUniformLocation(
                            E
                            , "uvOffset"
                        );
                    d = t
                        .getUniformLocation(
                            E
                            , "uvScale"
                        );
                    e = t
                        .getUniformLocation(
                            E
                            , "rotation"
                        );
                    f = t
                        .getUniformLocation(
                            E
                            , "scale"
                        );
                    g = t
                        .getUniformLocation(
                            E
                            , "color"
                        );
                    h = t
                        .getUniformLocation(
                            E
                            , "map"
                        );
                    k = t
                        .getUniformLocation(
                            E
                            , "opacity"
                        );
                    n = t
                        .getUniformLocation(
                            E
                            , "modelViewMatrix"
                        );
                    B = t
                        .getUniformLocation(
                            E
                            , "projectionMatrix"
                        );
                    r =
                        t
                        .getUniformLocation(
                            E
                            , "fogType"
                        );
                    p = t
                        .getUniformLocation(
                            E
                            , "fogDensity"
                        );
                    q = t
                        .getUniformLocation(
                            E
                            , "fogNear"
                        );
                    l = t
                        .getUniformLocation(
                            E
                            , "fogFar"
                        );
                    w = t
                        .getUniformLocation(
                            E
                            , "fogColor"
                        );
                    z = t
                        .getUniformLocation(
                            E
                            , "alphaTest"
                        );
                    L = document
                        .createElementNS(
                            "http://www.w3.org/1999/xhtml"
                            , "canvas"
                        );
                    L.width = 8;
                    L.height =
                        8;
                    O = L
                        .getContext(
                            "2d"
                        );
                    O.fillStyle =
                        "white";
                    O.fillRect(
                        0
                        , 0
                        , 8,
                        8
                    );
                    J = new ga(
                        L);
                    J.needsUpdate = !
                        0
                }
                t.useProgram(E);
                U
                    .initAttributes();
                U.enableAttribute(
                    v);
                U.enableAttribute(
                    y);
                U
                    .disableUnusedAttributes();
                U.disable(t
                    .CULL_FACE
                );
                U.enable(t
                    .BLEND);
                t.bindBuffer(t
                    .ARRAY_BUFFER
                    , G);
                t.vertexAttribPointer(
                    v, 2, t
                    .FLOAT
                    , !1,
                    16
                    , 0);
                t.vertexAttribPointer(
                    y, 2, t
                    .FLOAT
                    , !1,
                    16

                    , 8);
                t.bindBuffer(t
                    .ELEMENT_ARRAY_BUFFER
                    , C);
                t.uniformMatrix4fv(
                    B, !1, V
                    .projectionMatrix
                    .elements
                );
                U.activeTexture(
                    t
                    .TEXTURE0
                );
                t.uniform1i(h
                    , 0);
                O = L = 0;
                (D = m.fog) ? (t
                    .uniform3f(
                        w, D
                        .color
                        .r, D
                        .color
                        .g, D
                        .color.b
                    ), D
                    .isFog ? (t
                        .uniform1f(
                            q, D
                            .near
                        ), t
                        .uniform1f(
                            l, D
                            .far
                        ), t
                        .uniform1i(
                            r, 1
                        )
                        , O =
                        L =
                        1) : D
                    .isFogExp2 &&
                    (t.uniform1f(
                            p, D
                            .density
                        ), t
                        .uniform1i(
                            r, 2
                        )
                        , O =
                        L =
                        2)) : (t
                    .uniform1i(
                        r
                        , 0)
                    , O = L = 0
                    );
                for (var D = 0
                        , H = b
                        .length; D <
                    H; D++) {
                    var ha = b[
                        D];
                    ha.modelViewMatrix
                        .multiplyMatrices(
                            V
                            .matrixWorldInverse
                            , ha
                            .matrixWorld
                        );
                    ha.z = -ha
                        .modelViewMatrix
                        .elements[
                            14]
                }
                b.sort(S);
                for (var T = []
                        , D = 0
                        , H = b
                        .length; D <
                    H; D++) {
                    var ha = b[
                            D]
                        , Z = ha
                        .material;
                    !1 !== Z
                        .visible &&
                        (t.uniform1f(
                                z
                                , Z
                                .alphaTest
                            )
                            , t
                            .uniformMatrix4fv(
                                n
                                , !
                                1
                                , ha
                                .modelViewMatrix
                                .elements
                            )
                            , ha
                            .matrixWorld
                            .decompose(
                                F
                                , K
                                , M
                            )
                            , T[
                                0
                                ] =
                            M.x
                            , T[
                                1
                                ] =
                            M.y
                            , ha =
                            0, m
                            .fog &&
                            Z
                            .fog &&
                            (ha =
                                O
                            )
                            , L !==
                            ha &&
                            (t.uniform1i(
                                    r
                                    , ha
                                )
                                , L =
                                ha
                            )
                            , null !==
                            Z
                            .map ?
                            (t.uniform2f(
                                    c
                                    , Z
                                    .map
                                    .offset
                                    .x
                                    , Z
                                    .map
                                    .offset
                                    .y
                                )
                                , t
                                .uniform2f(
                                    d
                                    , Z
                                    .map
                                    .repeat
                                    .x
                                    , Z
                                    .map
                                    .repeat
                                    .y
                                )
                            ) :
                            (t.uniform2f(
                                    c
                                    , 0
                                    , 0
                                )
                                , t
                                .uniform2f(
                                    d
                                    , 1
                                    , 1
                                )
                            )
                            , t
                            .uniform1f(
                                k
                                , Z
                                .opacity
                            )
                            , t
                            .uniform3f(
                                g
                                , Z
                                .color
                                .r
                                , Z
                                .color
                                .g
                                , Z
                                .color
                                .b
                            )
                            , t
                            .uniform1f(
                                e
                                , Z
                                .rotation
                            )
                            , t
                            .uniform2fv(
                                f
                                , T
                            )
                            , U
                            .setBlending(
                                Z
                                .blending
                                , Z
                                .blendEquation
                                , Z
                                .blendSrc
                                , Z
                                .blendDst
                            )
                            , U
                            .setDepthTest(
                                Z
                                .depthTest
                            )
                            , U
                            .setDepthWrite(
                                Z
                                .depthWrite
                            )
                            , Z
                            .map ?
                            a
                            .setTexture2D(
                                Z
                                .map
                                , 0
                            ) :
                            a
                            .setTexture2D(
                                J
                                , 0
                            )
                            , t
                            .drawElements(
                                t
                                .TRIANGLES
                                , 6
                                , t
                                .UNSIGNED_SHORT
                                , 0
                            )
                        )
                }
                U.enable(t
                    .CULL_FACE
                );
                a.resetGLState()
            }
        }
    }

    function Ka(a, b, c) {
        this.uuid = P
            .generateUUID();
        this.width = a;
        this.height = b;
        this.scissor = new da(0, 0
            , a, b);
        this.scissorTest = !1;
        this.viewport = new da(0, 0
            , a, b);
        c = c || {};
        void 0 === c.minFilter && (c
            .minFilter = 1006);
        this.texture = new ga(
            void 0, void 0, c
            .wrapS, c.wrapT, c
            .magFilter, c
            .minFilter, c
            .format, c.type, c
            .anisotropy, c
            .encoding);
        this.depthBuffer =
            void 0 !== c
            .depthBuffer ? c
            .depthBuffer : !0;
        this.stencilBuffer =
            void 0 !== c
            .stencilBuffer ? c
            .stencilBuffer : !0;
        this.depthTexture =
            void 0 !== c
            .depthTexture ? c
            .depthTexture : null
    }

    function ia() {
        Object.defineProperty(this
            , "id", {
                value: wc++
            });
        this.uuid = P
            .generateUUID();
        this.name = "";
        this.type = "Material";
        this.lights = this.fog = !0;
        this.blending = 1;
        this.side = 0;
        this.shading = 2;
        this.vertexColors = 0;
        this.opacity = 1;
        this.transparent = !1;
        this.blendSrc = 204;
        this.blendDst = 205;
        this.blendEquation = 100;
        this.blendEquationAlpha =
            this.blendDstAlpha =
            this.blendSrcAlpha =
            null;
        this.depthFunc = 3;
        this.depthWrite = this
            .depthTest = !0;
        this.clippingPlanes = null;
        this.clipShadows = this
            .clipIntersection = !1;
        this.colorWrite = !0;
        this.precision = null;
        this.polygonOffset = !1;
        this.alphaTest =
            this
            .polygonOffsetUnits =
            this
            .polygonOffsetFactor =
            0;
        this.premultipliedAlpha = !
            1;
        this.overdraw = 0;
        this._needsUpdate = this
            .visible = !0
    }

    function Ha(a) {
        ia.call(this);
        this.type =
            "ShaderMaterial";
        this.defines = {};
        this.uniforms = {};
        this.vertexShader =
            "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
        this.fragmentShader =
            "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
        this.linewidth = 1;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.morphNormals = this
            .morphTargets =
            this.skinning = this
            .clipping = this
            .lights = this.fog = !1;
        this.extensions = {
            derivatives: !1
            , fragDepth: !1
            , drawBuffers: !1
            , shaderTextureLOD:
                !1
        };
        this.defaultAttributeValues = {
            color: [1, 1, 1]
            , uv: [0, 0]
            , uv2: [0, 0]
        };
        this.index0AttributeName =
            void 0;
        void 0 !== a && (void 0 !==
            a.attributes &&
            console.error(
                "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
            ), this
            .setValues(a))
    }

    function qa(a) {
        ia.call(this);
        this.type =
            "MeshDepthMaterial";
        this.depthPacking = 3200;
        this.morphTargets = this
            .skinning = !1;
        this.displacementMap = this
            .alphaMap = this.map =
            null;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.lights = this.fog = !1;
        this.setValues(a)
    }

    function ra(a, b) {
        this.min = void 0 !== a ?
            a : new m(Infinity
                , Infinity, Infinity
                );
        this.max = void 0 !== b ?
            b : new m(-Infinity, -
                Infinity, -Infinity)
    }

    function Ia(a, b) {
        this.center = void 0 !== a ?
            a : new m;
        this.radius = void 0 !== b ?
            b : 0
    }

    function pa() {
        this.elements =
            new Float32Array([1, 0
                , 0, 0, 1, 0, 0
                , 0, 1]);
        0 < arguments.length &&
            console.error(
                "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
            )
    }

    function ja(a, b) {
        this.normal = void 0 !== a ?
            a : new m(1, 0, 0);
        this.constant = void 0 !==
            b ? b : 0
    }

    function $a(a, b, c, d, e, f) {
        this.planes = [void 0 !==
            a ? a : new ja
            , void 0 !== b ? b :
            new ja, void 0 !==
            c ? c : new ja
            , void 0 !== d ? d :
            new ja, void 0 !==
            e ? e : new ja
            , void 0 !== f ? f :
            new ja]
    }

    function xc(a, b, c, d) {
        function e(b, c, d, e) {
            var f = b.geometry
                , g;
            g = z;
            var h = b
                .customDepthMaterial;
            d && (g = v, h = b
                .customDistanceMaterial
            );
            h ? g = h : (h = !1, c
                .morphTargets &&
                (f && f
                    .isBufferGeometry ?
                    h = f
                    .morphAttributes &&
                    f
                    .morphAttributes
                    .position &&
                    0 < f
                    .morphAttributes
                    .position
                    .length :
                    f && f
                    .isGeometry &&
                    (h = f
                        .morphTargets &&
                        0 < f
                        .morphTargets
                        .length)
                ), b = b
                .isSkinnedMesh &&
                c.skinning, f =
                0, h && (f |=
                    1), b && (
                    f |=
                    2), g = g[f]
            );
            a.localClippingEnabled &&
                !0 === c
                .clipShadows &&
                0 !== c
                .clippingPlanes
                .length && (f = g
                    .uuid, h = c
                    .uuid, b = y[f]
                    , void 0 ===
                    b &&
                    (b = {}, y[f] =
                        b), f = b[
                        h],
                    void 0 ===
                    f && (f = g
                        .clone(), b[
                            h] = f)
                    , g = f);
            g.visible = c.visible;
            g.wireframe = c
                .wireframe;
            h = c.side;
            K.renderSingleSided &&
                2 == h && (h = 0);
            K.renderReverseSided &&
                (0 === h ? h = 1 :
                    1 === h && (h =
                        0));
            g.side = h;
            g.clipShadows = c
                .clipShadows;
            g.clippingPlanes = c
                .clippingPlanes;
            g.wireframeLinewidth =
                c
                .wireframeLinewidth;
            g.linewidth = c
                .linewidth;
            d && void 0 !== g
                .uniforms
                .lightPos && g
                .uniforms.lightPos
                .value.copy(e);
            return g
        }

        function f(a, b, c) {
            if (!1 !== a.visible) {
                0 !== (a.layers
                        .mask & b
                        .layers.mask
                    ) && (a
                        .isMesh || a
                        .isLine || a
                        .isPoints
                    ) && a
                    .castShadow && (
                        !1 === a
                        .frustumCulled ||
                        !0 === k
                        .intersectsObject(
                            a)) && !
                    0 === a.material
                    .visible && (a
                        .modelViewMatrix
                        .multiplyMatrices(
                            c
                            .matrixWorldInverse
                            , a
                            .matrixWorld
                        ), w
                        .push(a));
                a = a.children;
                for (var d = 0, e =
                        a
                        .length; d <
                    e; d++) f(a[d]
                    , b, c)
            }
        }
        var g = a.context
            , h = a.state
            , k = new $a
            , n = new I
            , B = b.shadows
            , r = new A
            , p = new A(d
                .maxTextureSize, d
                .maxTextureSize)
            , q = new m
            , l = new m
            , w = []
            , z = Array(4)
            , v = Array(4)
            , y = {}
            , S = [new m(1, 0, 0)
                , new m(-1, 0, 0)
                , new m(0, 0, 1)
                , new m(0, 0, -1)
                , new m(0, 1, 0)
                , new m(0, -1, 0)]
            , t = [new m(0, 1, 0)
                , new m(0, 1, 0)
                , new m(0, 1, 0)
                , new m(0, 1, 0)
                , new m(0, 0, 1)
                , new m(0, 0, -1)]
            , U = [new da, new da
                , new da, new da
                , new da, new da];
        b = new qa;
        b.depthPacking = 3201;
        b.clipping = !0;
        d = Oa.distanceRGBA;
        for (var G = ta.clone(d
                    .uniforms), C =
                0; 4 !== C; ++C) {
            var E = 0 !== (C & 1)
                , J = 0 !== (C & 2)
                , F = b.clone();
            F.morphTargets = E;
            F.skinning = J;
            z[C] = F;
            E = new Ha({
                defines: {
                    USE_SHADOWMAP: ""
                }
                , uniforms: G
                , vertexShader: d
                    .vertexShader
                , fragmentShader: d
                    .fragmentShader
                , morphTargets: E
                , skinning: J
                , clipping:
                    !0
            });
            v[C] = E
        }
        var K = this;
        this.enabled = !1;
        this.autoUpdate = !0;
        this.needsUpdate = !1;
        this.type = 1;
        this.renderSingleSided =
            this
            .renderReverseSided = !
            0;
        this.render = function (b
            , d) {
            if (!1 !== K
                .enabled && (!
                    1 !== K
                    .autoUpdate ||
                    !1 !== K
                    .needsUpdate
                ) && 0 !== B
                .length) {
                h.buffers.color
                    .setClear(1
                        , 1, 1,
                        1
                    );
                h.disable(g
                    .BLEND);
                h.setDepthTest(!
                    0);
                h.setScissorTest(
                    !1);
                for (var y, m
                        , C = 0
                        , G =
                        B
                        .length; C <
                    G; C++) {
                    var z = B[
                            C]
                        , v = z
                        .shadow;
                    if (void 0 ===
                        v)
                        console
                        .warn(
                            "THREE.WebGLShadowMap:"
                            , z
                            , "has no shadow."
                        );
                    else {
                        var E =
                            v
                            .camera;
                        r.copy(v
                            .mapSize
                            );
                        r.min(
                            p
                            );
                        if (z &&
                            z
                            .isPointLight
                        ) {
                            y =
                                6;
                            m = !
                                0;
                            var F =
                                r
                                .x
                                , J =
                                r
                                .y;
                            U[0].set(
                                2 *
                                F
                                , J
                                , F
                                , J
                            );
                            U[1].set(
                                0
                                , J
                                , F
                                , J
                            );
                            U[2].set(
                                3 *
                                F
                                , J
                                , F
                                , J
                            );
                            U[3].set(
                                F
                                , J
                                , F
                                , J
                            );
                            U[4].set(
                                3 *
                                F
                                , 0
                                , F
                                , J
                            );
                            U[5].set(
                                F
                                , 0
                                , F
                                , J
                            );
                            r.x *=
                                4;
                            r.y *=
                                2
                        } else
                            y =
                            1
                            , m = !
                            1;
                        null ===
                            v
                            .map &&
                            (v.map =
                                new Ka(
                                    r
                                    .x
                                    , r
                                    .y,
                                    {
                                        minFilter: 1003
                                        , magFilter: 1003
                                        , format: 1023
                                    }
                                )
                                , E
                                .updateProjectionMatrix()
                            );
                        v.isSpotLightShadow &&
                            v
                            .update(
                                z
                            );
                        v && v
                            .isRectAreaLightShadow &&
                            v
                            .update(
                                z
                            );
                        F = v
                            .map;
                        v = v
                            .matrix;
                        l.setFromMatrixPosition(
                            z
                            .matrixWorld
                        );
                        E.position
                            .copy(
                                l
                            );
                        a.setRenderTarget(
                            F
                        );
                        a
                            .clear();
                        for (F =
                            0; F <
                            y; F++
                        ) {
                            m ? (q.copy(E
                                        .position
                                    )
                                    , q
                                    .add(
                                        S[
                                            F
                                            ]
                                    )
                                    , E
                                    .up
                                    .copy(
                                        t[
                                            F
                                            ]
                                    )
                                    , E
                                    .lookAt(
                                        q
                                    )
                                    , h
                                    .viewport(
                                        U[
                                            F
                                            ]
                                    )
                                ) :
                                (q.setFromMatrixPosition(
                                        z
                                        .target
                                        .matrixWorld
                                    )
                                    , E
                                    .lookAt(
                                        q
                                    )
                                );
                            E
                                .updateMatrixWorld();
                            E.matrixWorldInverse
                                .getInverse(
                                    E
                                    .matrixWorld
                                );
                            v.set(.5
                                , 0
                                , 0
                                , .5
                                , 0
                                , .5
                                , 0
                                , .5
                                , 0
                                , 0
                                , .5
                                , .5
                                , 0
                                , 0
                                , 0
                                , 1
                            );
                            v.multiply(
                                E
                                .projectionMatrix
                            );
                            v.multiply(
                                E
                                .matrixWorldInverse
                            );
                            n.multiplyMatrices(
                                E
                                .projectionMatrix
                                , E
                                .matrixWorldInverse
                            );
                            k.setFromMatrix(
                                n
                            );
                            w.length =
                                0;
                            f(b, d
                                , E
                                );
                            for (
                                var J =
                                    0
                                    , A =
                                    w
                                    .length; J <
                                A; J++
                            ) {
                                var I =
                                    w[
                                        J
                                        ]
                                    , pb =
                                    c
                                    .update(
                                        I
                                    )
                                    , Ua =
                                    I
                                    .material;
                                if (Ua &&
                                    Ua
                                    .isMultiMaterial
                                )
                                    for (
                                        var Kb =
                                            pb
                                            .groups
                                            , Ua =
                                            Ua
                                            .materials
                                            , Q =
                                            0
                                            , ma =
                                            Kb
                                            .length; Q <
                                        ma; Q++
                                    ) {
                                        var W =
                                            Kb[
                                                Q
                                                ]
                                            , P =
                                            Ua[W
                                                .materialIndex
                                                ];
                                        !
                                        0 ===
                                            P
                                            .visible &&
                                            (P = e(I
                                                    , P
                                                    , m
                                                    , l
                                                )
                                                , a
                                                .renderBufferDirect(
                                                    E
                                                    , null
                                                    , pb
                                                    , P
                                                    , I
                                                    , W
                                                )
                                            )
                                    } else
                                        P =
                                        e(I, Ua
                                            , m
                                            , l
                                        )
                                        , a
                                        .renderBufferDirect(
                                            E
                                            , null
                                            , pb
                                            , P
                                            , I
                                            , null
                                        )
                            }
                        }
                    }
                }
                y = a
                    .getClearColor();
                m = a
                    .getClearAlpha();
                a.setClearColor(
                    y, m);
                K.needsUpdate = !
                    1
            }
        }
    }

    function Pa(a, b) {
        this.origin = void 0 !== a ?
            a : new m;
        this.direction =
            void 0 !== b ? b : new m
    }

    function ua(a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._order = d || ua
            .DefaultOrder
    }

    function qb() {
        this.mask = 1
    }

    function Y() {
        Object.defineProperty(this
            , "id", {
                value: yc++
            });
        this.uuid = P
            .generateUUID();
        this.name = "";
        this.type = "Object3D";
        this.parent = null;
        this.children = [];
        this.up = Y.DefaultUp
            .clone();
        var a = new m
            , b = new ua
            , c = new aa
            , d = new m(1, 1, 1);
        b.onChange(function () {
            c.setFromEuler(
                b, !1)
        });
        c.onChange(function () {
            b.setFromQuaternion(
                c
                , void 0
                , !1)
        });
        Object.defineProperties(
            this, {
                position: {
                    enumerable:
                        !0
                    , value: a
                }
                , rotation: {
                    enumerable:
                        !0
                    , value: b
                }
                , quaternion: {
                    enumerable:
                        !0
                    , value: c
                }
                , scale: {
                    enumerable:
                        !0
                    , value: d
                }
                , modelViewMatrix: {
                    value: new I
                }
                , normalMatrix: {
                    value: new pa
                }
            });
        this.matrix = new I;
        this.matrixWorld = new I;
        this.matrixAutoUpdate = Y
            .DefaultMatrixAutoUpdate;
        this.matrixWorldNeedsUpdate = !
            1;
        this.layers = new qb;
        this.visible = !0;
        this.receiveShadow = this
            .castShadow = !1;
        this.frustumCulled = !0;
        this.renderOrder = 0;
        this.userData = {};
        this.onBeforeRender =
            function () {};
        this.onAfterRender =
            function () {}
    }

    function Da(a, b) {
        this.start =
            void 0 !== a ? a :
            new m;
        this.end = void 0 !== b ?
            b : new m
    }

    function na(a, b, c) {
        this.a = void 0 !== a ? a :
            new m;
        this.b = void 0 !== b ? b :
            new m;
        this.c = void 0 !== c ? c :
            new m
    }

    function xa(a, b, c, d, e, f) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.normal = d && d
            .isVector3 ? d : new m;
        this.vertexNormals = Array
            .isArray(d) ? d : [];
        this.color = e && e
            .isColor ? e : new ea;
        this.vertexColors = Array
            .isArray(e) ? e : [];
        this.materialIndex =
            void 0 !== f ? f : 0
    }

    function La(a) {
        ia.call(this);
        this.type =
            "MeshBasicMaterial";
        this.color = new ea(
            16777215);

        this.lightMap = this.map =
            null;
        this.lightMapIntensity =
            1;
        this.aoMap = null;
        this.aoMapIntensity = 1;
        this.envMap = this
            .alphaMap = this
            .specularMap = null;
        this.combine = 0;
        this.reflectivity = 1;
        this.refractionRatio = .98;
        this.wireframe = !1;
        this.wireframeLinewidth = 1;
        this.wireframeLinejoin =
            this.wireframeLinecap =
            "round";
        this.lights = this
            .morphTargets = this
            .skinning = !1;
        this.setValues(a)
    }

    function ba(a, b, c) {
        if (Array.isArray(a))
            throw new TypeError(
                "THREE.BufferAttribute: array should be a Typed Array."
            );
        this.uuid = P
            .generateUUID();
        this.array = a;
        this.itemSize = b;
        this.count = void 0 !==
            a ? a.length / b : 0;
        this.normalized = !0 === c;
        this.dynamic = !1;
        this.updateRange = {
            offset: 0
            , count: -1
        };
        this.onUploadCallback =
            function () {};
        this.version = 0
    }

    function ya(a, b) {
        ba.call(this
            , new Uint16Array(
            a)
            , b)
    }

    function Qa(a, b) {
        ba.call(this
            , new Uint32Array(
            a)
            , b)
    }

    function Q(a, b) {
        ba.call(this
            , new Float32Array(
                a)
            , b)
    }

    function Lb() {
        this.indices = [];
        this.vertices = [];
        this.normals = [];
        this.colors = [];
        this.uvs = [];
        this.uvs2 = [];
        this.groups = [];
        this.morphTargets = {};
        this.skinWeights = [];
        this.skinIndices = [];
        this.boundingSphere = this
            .boundingBox =
            null;
        this.groupsNeedUpdate = this
            .uvsNeedUpdate = this
            .colorsNeedUpdate = this
            .normalsNeedUpdate =
            this
            .verticesNeedUpdate = !1
    }

    function rb(a) {
        for (var b = a.length, c = -
                Infinity; b--;) a[
            b] > c && (c = a[b]);
        return c
    }

    function la() {
        Object.defineProperty(this
            , "id", {
                value: Mb++
            });
        this.uuid = P
            .generateUUID();
        this.name = "";
        this.type = "Geometry";
        this.vertices = [];
        this.colors = [];
        this.faces = [];
        this.faceVertexUvs = [
            []
        ];
        this.morphTargets = [];
        this.morphNormals = [];
        this.skinWeights = [];
        this.skinIndices = [];
        this.lineDistances = [];
        this.boundingSphere =
            this.boundingBox = null;
        this.groupsNeedUpdate = this
            .lineDistancesNeedUpdate =
            this.colorsNeedUpdate =
            this.normalsNeedUpdate =
            this.uvsNeedUpdate =
            this
            .verticesNeedUpdate =
            this
            .elementsNeedUpdate = !1
    }

    function fa() {
        Object.defineProperty(this
            , "id", {
                value: Mb++
            });
        this.uuid = P
            .generateUUID();
        this.name = "";
        this.type =
            "BufferGeometry";
        this.index = null;
        this.attributes = {};
        this.morphAttributes = {};
        this.groups = [];
        this.boundingSphere = this
            .boundingBox = null;
        this.drawRange = {
            start: 0
            , count: Infinity
        }
    }

    function Za(a, b) {
        Y.call(this);
        this.type = "Mesh";
        this.geometry = void 0 !==
            a ? a : new fa;
        this.material = void 0 !==
            b ? b : new La({
                color: 16777215 *
                    Math
                    .random()
            });
        this.drawMode = 0;
        this.updateMorphTargets()
    }

    function ab(a, b, c, d, e, f) {
        function g(a, b, c, d, e, f
            , g, l, G, C, E) {
            var J = f / G
                , F = g / C
                , K = f / 2
                , M = g / 2
                , X = l / 2;
            g = G + 1;
            var V = C + 1
                , L = f = 0
                , O, D, H = new m;
            for (D = 0; D <
                V; D++) {
                var ha = D * F - M;
                for (O = 0; O <
                    g; O++) H[a] = (
                        O * J - K) *
                    d, H[b] = ha *
                    e, H[c] = X, n
                    .push(H.x, H.y
                        , H.z), H[
                    a] =
                    0, H[b] = 0, H[
                        c] = 0 < l ?
                    1 : -1, B.push(H
                        .x, H.y, H.z
                    ), r.push(
                        O / G), r
                    .push(1 - D /
                        C), f += 1
            }
            for (D = 0; D < C; D++)
                for (O = 0; O <
                    G; O++) a = p +
                    O +
                    g * (D + 1), b =
                    p + (O + 1) +
                    g * (D + 1), c =
                    p + (O + 1) +
                    g * D, k.push(
                        p + O + g *
                        D, a, c), k
                    .push(a, b, c)
                    , L += 6;
            h.addGroup(q, L, E);
            q += L;
            p += f
        }
        fa.call(this);
        this.type =
            "BoxBufferGeometry";
        this.parameters = {
            width: a
            , height: b
            , depth: c
            , widthSegments: d
            , heightSegments: e
            , depthSegments: f
        };
        var h = this;
        d = Math.floor(d) || 1;
        e = Math.floor(e) || 1;
        f = Math.floor(f) || 1;
        var k = []
            , n = []
            , B = []
            , r = []
            , p = 0
            , q = 0;
        g("z", "y", "x", -1, -1, c
            , b, a, f, e, 0);
        g("z", "y", "x", 1, -1, c
            , b, -a, f, e, 1);
        g("x", "z", "y", 1, 1, a, c
            , b, d, f, 2);
        g("x", "z", "y", 1, -1, a
            , c, -b, d, f, 3);
        g("x", "y", "z", 1, -1, a
            , b, c, d, e
            , 4);
        g("x", "y", "z", -1, -1, a
            , b, -c, d, e, 5);
        this.setIndex(k);
        this.addAttribute(
            "position", new Q(n
                , 3));
        this.addAttribute("normal"
            , new Q(B, 3));
        this.addAttribute("uv"
            , new Q(r, 2))
    }

    function bb(a, b, c, d) {
        fa.call(this);
        this.type =
            "PlaneBufferGeometry";
        this.parameters = {
            width: a
            , height: b
            , widthSegments: c
            , heightSegments: d
        };
        var e = a / 2
            , f = b / 2;
        c = Math.floor(c) || 1;
        d = Math.floor(d) || 1;
        var g = c + 1
            , h = d + 1
            , k = a / c
            , n = b / d
            , B = []
            , r = []
            , p = []
            , q = [];
        for (a = 0; a < h; a++) {
            var m = a * n - f;
            for (b = 0; b < g; b++)
                r.push(b * k - e, -
                    m, 0), p.push(0
                    , 0, 1), q.push(
                    b / c), q.push(
                    1 -
                    a / d)
        }
        for (a = 0; a < d; a++)
            for (b = 0; b < c; b++)
                e = b + g * (a + 1)
                , f = b + 1 + g * (
                    a +
                    1), h = b + 1 +
                g * a, B.push(b +
                    g * a, e, h), B
                .push(e, f, h);
        this.setIndex(B);
        this.addAttribute(
            "position", new Q(r
                , 3));
        this.addAttribute("normal"
            , new Q(p, 3));
        this.addAttribute("uv"
            , new Q(q, 2))
    }

    function ka() {
        Y.call(this);
        this.type = "Camera";
        this.matrixWorldInverse =
            new I;
        this.projectionMatrix =
            new I
    }

    function cb(a, b, c, d) {
        ka.call(this);
        this.type =
            "PerspectiveCamera";
        this.fov = void 0 !== a ?
            a : 50;
        this.zoom = 1;
        this.near = void 0 !== c ?
            c : .1;
        this.far = void 0 !== d ?
            d : 2E3;
        this.focus =
            10;
        this.aspect = void 0 !== b ?
            b : 1;
        this.view = null;
        this.filmGauge = 35;
        this.filmOffset = 0;
        this.updateProjectionMatrix()
    }

    function sb(a, b, c, d, e, f) {
        ka.call(this);
        this.type =
            "OrthographicCamera";
        this.zoom = 1;
        this.view = null;
        this.left = a;
        this.right = b;
        this.top = c;
        this.bottom = d;
        this.near = void 0 !== e ?
            e : .1;
        this.far = void 0 !== f ?
            f : 2E3;
        this.updateProjectionMatrix()
    }

    function zc(a, b, c) {
        var d, e, f;
        return {
            setMode: function (a) {
                d = a
            }
            , setIndex: function (
                c) {
                c.array instanceof Uint32Array &&
                    b.get(
                        "OES_element_index_uint"
                    ) ? (e =
                        a
                        .UNSIGNED_INT
                        , f = 4
                    ) : c
                    .array instanceof Uint16Array ?
                    (e = a
                        .UNSIGNED_SHORT
                        , f = 2
                        ) :
                    (e = a
                        .UNSIGNED_BYTE
                        , f = 1)
            }
            , render: function (b
                , h) {
                a.drawElements(
                    d, h, e
                    , b * f);
                c.calls++;
                c.vertices += h;
                d === a
                    .TRIANGLES &&
                    (c.faces +=
                        h / 3)
            }
            , renderInstances: function (
                g, h, k) {
                var n = b.get(
                    "ANGLE_instanced_arrays"
                );
                null === n ?
                    console
                    .error(
                        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
                    ) : (n
                        .drawElementsInstancedANGLE(
                            d
                            , k
                            , e
                            , h *
                            f, g
                            .maxInstancedCount
                        ), c
                        .calls++
                        , c
                        .vertices +=
                        k * g
                        .maxInstancedCount
                        , d ===
                        a
                        .TRIANGLES &&
                        (c.faces +=
                            g
                            .maxInstancedCount *
                            k /
                            3))
            }
        }
    }

    function Ac(a, b, c) {
        var d;
        return {
            setMode: function (a) {
                d = a
            }
            , render: function (b
                , f) {
                a.drawArrays(d
                    , b, f);
                c.calls++;
                c.vertices += f;
                d === a
                    .TRIANGLES &&
                    (c.faces +=
                        f / 3)
            }
            , renderInstances: function (
                e) {
                var f = b.get(
                    "ANGLE_instanced_arrays"
                );
                if (null === f)
                    console
                    .error(
                        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
                    );
                else {
                    var g = e
                        .attributes
                        .position
                        , g = g
                        .isInterleavedBufferAttribute ?
                        g.data
                        .count :
                        g.count;
                    f.drawArraysInstancedANGLE(
                        d
                        , 0
                        , g,
                        e
                        .maxInstancedCount
                    );
                    c.calls++;
                    c.vertices +=
                        g * e
                        .maxInstancedCount;
                    d === a
                        .TRIANGLES &&
                        (c.faces +=
                            e
                            .maxInstancedCount *
                            g /
                            3)
                }
            }
        }
    }

    function Bc() {
        var a = {};
        return {
            get: function (b) {
                if (void 0 !==
                    a[b.id])
                    return a[b
                        .id];
                var c;
                switch (b
                    .type) {
                case "DirectionalLight":
                    c = {
                        direction: new m
                        , color: new ea
                        , shadow:
                            !
                            1
                        , shadowBias: 0
                        , shadowRadius: 1
                        , shadowMapSize: new A
                    };
                    break;
                case "SpotLight":
                    c = {
                        position: new m
                        , direction: new m
                        , color: new ea
                        , distance: 0
                        , coneCos: 0
                        , penumbraCos: 0
                        , decay: 0
                        , shadow:
                            !
                            1
                        , shadowBias: 0
                        , shadowRadius: 1
                        , shadowMapSize: new A
                    };
                    break;
                case "PointLight":
                    c = {
                        position: new m
                        , color: new ea
                        , distance: 0
                        , decay: 0
                        , shadow:
                            !
                            1
                        , shadowBias: 0
                        , shadowRadius: 1
                        , shadowMapSize: new A
                    };
                    break;
                case "HemisphereLight":
                    c = {
                        direction: new m
                        , skyColor: new ea
                        , groundColor: new ea
                    };
                    break;
                case "RectAreaLight":
                    c = {
                        color: new ea
                        , position: new m
                        , halfWidth: new m
                        , halfHeight: new m
                    }
                }
                return a[b.id] =
                    c
            }
        }
    }

    function Cc(a) {
        a = a.split("\n");
        for (var b = 0; b < a
            .length; b++) a[b] = b +
            1 + ": " + a[b];
        return a.join("\n")
    }

    function Nb(a, b, c) {
        var d = a.createShader(b);
        a.shaderSource(d, c);
        a.compileShader(d);
        !1 === a.getShaderParameter(
            d, a.COMPILE_STATUS
        ) && console.error(
            "THREE.WebGLShader: Shader couldn't compile."
        );
        "" !== a.getShaderInfoLog(
            d) && console.warn(
            "THREE.WebGLShader: gl.getShaderInfoLog()"
            , b === a
            .VERTEX_SHADER ?
            "vertex" :
            "fragment", a
            .getShaderInfoLog(
                d), Cc(c));
        return d
    }

    function Ob(a) {
        switch (a) {
        case 3E3:
            return ["Linear"
                    , "( value )"];
        case 3001:
            return ["sRGB"
                    , "( value )"];
        case 3002:
            return ["RGBE"
                    , "( value )"];
        case 3004:
            return ["RGBM"
                    , "( value, 7.0 )"
                    ];
        case 3005:
            return ["RGBM"




                    
                , "( value, 16.0 )"
                ];
        case 3006:
            return ["RGBD"
                    , "( value, 256.0 )"
                    ];
        case 3007:
            return ["Gamma"
                    , "( value, float( GAMMA_FACTOR ) )"
                    ];
        default:
            throw Error(
                "unsupported encoding: " +
                a);
        }
    }

    function tb(a, b) {
        var c = Ob(b);
        return "vec4 " + a +
            "( vec4 value ) { return " +
            c[0] + "ToLinear" + c[
                1] + "; }"
    }

    function Dc(a, b) {
        var c = Ob(b);
        return "vec4 " + a +
            "( vec4 value ) { return LinearTo" +
            c[0] + c[1] + "; }"
    }

    function Ec(a, b) {
        var c;
        switch (b) {
        case 1:
            c = "Linear";
            break;
        case 2:
            c = "Reinhard";
            break;
        case 3:
            c = "Uncharted2";
            break;
        case 4:
            c =
                "OptimizedCineon";
            break;
        default:
            throw Error(
                "unsupported toneMapping: " +
                b);
        }
        return "vec3 " + a +
            "( vec3 color ) { return " +
            c +
            "ToneMapping( color ); }"
    }

    function Fc(a, b, c) {
        a = a || {};
        return [a.derivatives || b
            .envMapCubeUV || b
            .bumpMap || b
            .normalMap || b
            .flatShading ?
            "#extension GL_OES_standard_derivatives : enable" :
            "", (a.fragDepth ||
                b
                .logarithmicDepthBuffer
            ) && c.get(
                "EXT_frag_depth"
            ) ?
            "#extension GL_EXT_frag_depth : enable" :
            "", a.drawBuffers &&
            c.get(
                "WEBGL_draw_buffers"
            ) ?
            "#extension GL_EXT_draw_buffers : require" :
            "", (a
                .shaderTextureLOD ||
                b.envMap) && c
            .get(
                "EXT_shader_texture_lod"
            ) ?
            "#extension GL_EXT_shader_texture_lod : enable" :
            ""].filter(Ra).join(
            "\n")
    }

    function Gc(a) {
        var b = []
            , c;
        for (c in a) {
            var d = a[c];
            !1 !== d && b.push(
                "#define " + c +
                " " + d)
        }
        return b.join("\n")
    }

    function Ra(a) {
        return "" !== a
    }

    function Pb(a, b) {
        return a.replace(
                /NUM_DIR_LIGHTS/g, b
                .numDirLights)
            .replace(
                /NUM_SPOT_LIGHTS/g
                , b.numSpotLights)
            .replace(
                /NUM_RECT_AREA_LIGHTS/g
                , b
                .numRectAreaLights)
            .replace(
                /NUM_POINT_LIGHTS/g
                , b.numPointLights)
            .replace(
                /NUM_HEMI_LIGHTS/g
                , b.numHemiLights)
    }

    function ub(a) {
        return a.replace(
            /#include +<([\w\d.]+)>/g
            , function (a, c) {
                var d = W[c];
                if (void 0 ===
                    d) throw Error(
                    "Can not resolve #include <" +
                    c +
                    ">");
                return ub(d)
            })
    }

    function Qb(a) {
        return a.replace(
            /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
            , function (a, c, d
                , e) {
                a = "";
                for (c =
                    parseInt(
                        c); c <
                    parseInt(
                        d); c++)
                    a += e
                    .replace(
                        /\[ i \]/g
                        , "[ " +
                        c + " ]"
                    );
                return a
            })
    }

    function Hc(a, b, c, d) {
        var e = a.context
            , f = c.extensions
            , g = c.defines
            , h = c.__webglShader
            .vertexShader
            , k = c.__webglShader
            .fragmentShader
            , n =
            "SHADOWMAP_TYPE_BASIC";
        1 === d.shadowMapType ? n =
            "SHADOWMAP_TYPE_PCF" :
            2 === d.shadowMapType &&
            (n =
                "SHADOWMAP_TYPE_PCF_SOFT"
                );
        var B = "ENVMAP_TYPE_CUBE"
            , r =
            "ENVMAP_MODE_REFLECTION"
            , p =
            "ENVMAP_BLENDING_MULTIPLY";
        if (d.envMap) {
            switch (c.envMap
                .mapping) {
            case 301:
            case 302:
                B =
                    "ENVMAP_TYPE_CUBE";
                break;
            case 306:
            case 307:
                B =
                    "ENVMAP_TYPE_CUBE_UV";
                break;
            case 303:
            case 304:
                B =
                    "ENVMAP_TYPE_EQUIREC";
                break;
            case 305:
                B = "ENVMAP_TYPE_SPHERE"
            }
            switch (c.envMap
                .mapping) {
            case 302:
            case 304:
                r = "ENVMAP_MODE_REFRACTION"
            }
            switch (c.combine) {
            case 0:
                p =
                    "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                p =
                    "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                p = "ENVMAP_BLENDING_ADD"
            }
        }
        var q = 0 < a.gammaFactor ?
            a.gammaFactor : 1
            , f = Fc(f, d, a
                .extensions)
            , m = Gc(g)
            , l = e.createProgram();
        c.isRawShaderMaterial ? (
            g = [m, "\n"]
            .filter(Ra).join(
                "\n"), n = [f
                    , m, "\n"].filter(
                Ra).join("\n")
        ) : (g = [
                "precision " + d
                .precision +
                " float;"
                , "precision " + d
                .precision +
                " int;"
                , "#define SHADER_NAME " +
                c.__webglShader
                .name, m, d
                .supportsVertexTextures ?
                "#define VERTEX_TEXTURES" :
                ""
                , "#define GAMMA_FACTOR " +
                q
                , "#define MAX_BONES " +
                d.maxBones, d
                .useFog && d
                .fog ?
            "#define USE_FOG" : "", d
                .useFog && d
                .fogExp ?
                "#define FOG_EXP2" :
                "", d.map ?
                "#define USE_MAP" :
                "", d.envMap ?
                "#define USE_ENVMAP" :
                "", d.envMap ?
                "#define " + r :
                "", d.lightMap ?
                "#define USE_LIGHTMAP" :
                "", d.aoMap ?
                "#define USE_AOMAP" :
                "", d
                .emissiveMap ?
                "#define USE_EMISSIVEMAP" :
                "", d.bumpMap ?
                "#define USE_BUMPMAP" :
                "", d
                .normalMap ?
                "#define USE_NORMALMAP" :
                "", d
                .displacementMap &&
                d
                .supportsVertexTextures ?
                "#define USE_DISPLACEMENTMAP" :
                "", d
                .specularMap ?
                "#define USE_SPECULARMAP" :
                "", d
                .roughnessMap ?
                "#define USE_ROUGHNESSMAP" :
                "", d
                .metalnessMap ?
            "#define USE_METALNESSMAP" : ""
                , d.alphaMap ?
                "#define USE_ALPHAMAP" :
                "", d
                .vertexColors ?
                "#define USE_COLOR" :
                "", d
                .flatShading ?
                "#define FLAT_SHADED" :
                "", d.skinning ?
                "#define USE_SKINNING" :
                "", d
                .useVertexTexture ?
                "#define BONE_TEXTURE" :
                "", d
                .morphTargets ?
                "#define USE_MORPHTARGETS" :
                "", d
                .morphNormals &&
                !1 === d
                .flatShading ?
                "#define USE_MORPHNORMALS" :
                "", d
                .doubleSided ?
                "#define DOUBLE_SIDED" :
                "", d
                .flipSided ?
                "#define FLIP_SIDED" :
                ""
                , "#define NUM_CLIPPING_PLANES " +
                d
                .numClippingPlanes
                , d
                .shadowMapEnabled ?
                "#define USE_SHADOWMAP" :
            "", d.shadowMapEnabled ?
                "#define " + n :
                "", d
                .sizeAttenuation ?
                "#define USE_SIZEATTENUATION" :
                "", d
                .logarithmicDepthBuffer ?
                "#define USE_LOGDEPTHBUF" :
                "", d
                .logarithmicDepthBuffer &&
                a.extensions
                .get(
                "EXT_frag_depth"
            ) ?
                "#define USE_LOGDEPTHBUF_EXT" :
                ""
                , "uniform mat4 modelMatrix;"
                , "uniform mat4 modelViewMatrix;"
                , "uniform mat4 projectionMatrix;"
                , "uniform mat4 viewMatrix;"
                , "uniform mat3 normalMatrix;"
                , "uniform vec3 cameraPosition;"
                , "attribute vec3 position;"
                , "attribute vec3 normal;"
                , "attribute vec2 uv;"
                , "#ifdef USE_COLOR"




                
            , "\tattribute vec3 color;"
                , "#endif"
                , "#ifdef USE_MORPHTARGETS"
                , "\tattribute vec3 morphTarget0;"
                , "\tattribute vec3 morphTarget1;"
                , "\tattribute vec3 morphTarget2;"
                , "\tattribute vec3 morphTarget3;"
                , "\t#ifdef USE_MORPHNORMALS"
                , "\t\tattribute vec3 morphNormal0;"
                , "\t\tattribute vec3 morphNormal1;"
                , "\t\tattribute vec3 morphNormal2;"
                , "\t\tattribute vec3 morphNormal3;"
                , "\t#else"
                , "\t\tattribute vec3 morphTarget4;"
                , "\t\tattribute vec3 morphTarget5;"
                , "\t\tattribute vec3 morphTarget6;"
                , "\t\tattribute vec3 morphTarget7;"




                
            , "\t#endif"
                , "#endif"
                , "#ifdef USE_SKINNING"
                , "\tattribute vec4 skinIndex;"
                , "\tattribute vec4 skinWeight;"
                , "#endif", "\n"
        ].filter(Ra).join("\n"), n = [f
                , "precision " + d
                .precision +
                " float;"
                , "precision " + d
                .precision +
                " int;"
                , "#define SHADER_NAME " +
                c.__webglShader
                .name, m, d
                .alphaTest ?
                "#define ALPHATEST " +
                d.alphaTest :
                ""
                , "#define GAMMA_FACTOR " +
                q, d.useFog && d
                .fog ?
                "#define USE_FOG" :
                "", d.useFog &&
                d.fogExp ?
                "#define FOG_EXP2" :
                "", d.map ?
                "#define USE_MAP" :
                "", d.envMap ?
                "#define USE_ENVMAP" :
                "", d.envMap ?
                "#define " + B :
                "", d.envMap ?
            "#define " + r : "", d.envMap ?
                "#define " + p :
                "", d.lightMap ?
                "#define USE_LIGHTMAP" :
                "", d.aoMap ?
                "#define USE_AOMAP" :
                "", d
                .emissiveMap ?
                "#define USE_EMISSIVEMAP" :
                "", d.bumpMap ?
                "#define USE_BUMPMAP" :
                "", d
                .normalMap ?
                "#define USE_NORMALMAP" :
                "", d
                .specularMap ?
                "#define USE_SPECULARMAP" :
                "", d
                .roughnessMap ?
                "#define USE_ROUGHNESSMAP" :
                "", d
                .metalnessMap ?
                "#define USE_METALNESSMAP" :
                "", d.alphaMap ?
                "#define USE_ALPHAMAP" :
                "", d
                .vertexColors ?
                "#define USE_COLOR" :
                "", d
                .gradientMap ?
                "#define USE_GRADIENTMAP" :
                "", d
                .flatShading ?
                "#define FLAT_SHADED" :
            "", d.doubleSided ?
                "#define DOUBLE_SIDED" :
                "", d
                .flipSided ?
                "#define FLIP_SIDED" :
                ""
                , "#define NUM_CLIPPING_PLANES " +
                d
                .numClippingPlanes
                , "#define UNION_CLIPPING_PLANES " +
                (d.numClippingPlanes -
                d
                .numClipIntersection
            ), d
                .shadowMapEnabled ?
                "#define USE_SHADOWMAP" :
                "", d
                .shadowMapEnabled ?
                "#define " + n :
                "", d
                .premultipliedAlpha ?
                "#define PREMULTIPLIED_ALPHA" :
                "", d
                .physicallyCorrectLights ?
                "#define PHYSICALLY_CORRECT_LIGHTS" :
                "", d
                .logarithmicDepthBuffer ?
                "#define USE_LOGDEPTHBUF" :
                "", d
                .logarithmicDepthBuffer &&
                a.extensions
                .get(
                "EXT_frag_depth"
            ) ?
            "#define USE_LOGDEPTHBUF_EXT" :
                "", d.envMap &&
                a.extensions
                .get(
                "EXT_shader_texture_lod"
            ) ?
                "#define TEXTURE_LOD_EXT" :
                ""
                , "uniform mat4 viewMatrix;"
                , "uniform vec3 cameraPosition;"
                , 0 !== d
                .toneMapping ?
                "#define TONE_MAPPING" :
                "", 0 !== d
                .toneMapping ? W
                .tonemapping_pars_fragment :
                "", 0 !== d
                .toneMapping ?
                Ec("toneMapping"
                , d
                .toneMapping
            ) : "", d
                .outputEncoding ||
                d.mapEncoding ||
                d
                .envMapEncoding ||
                d
                .emissiveMapEncoding ?
                W
                .encodings_pars_fragment :
                "", d
                .mapEncoding ?
                tb("mapTexelToLinear"
                , d
                .mapEncoding
            ) : "", d
                .envMapEncoding ?
                tb("envMapTexelToLinear"
                , d
                .envMapEncoding
            ) : "", d
                .emissiveMapEncoding ?
                tb("emissiveMapTexelToLinear"
                , d
                .emissiveMapEncoding
            ) : "", d
                .outputEncoding ?
                Dc("linearToOutputTexel"
                , d
                .outputEncoding
            ) : "", d
                .depthPacking ?
                "#define DEPTH_PACKING " +
                c.depthPacking :
                "", "\n"
        ].filter(Ra).join("\n"));
        h = ub(h, d);
        h = Pb(h, d);
        k = ub(k, d);
        k = Pb(k, d);
        c.isShaderMaterial || (h =
            Qb(h), k = Qb(k));
        k = n + k;
        h = Nb(e, e.VERTEX_SHADER
            , g + h);
        k = Nb(e, e.FRAGMENT_SHADER
            , k);
        e.attachShader(l, h);
        e.attachShader(l, k);
        void 0 !== c
            .index0AttributeName ? e
            .bindAttribLocation(l
                , 0, c
                .index0AttributeName
            ) :
            !0 === d.morphTargets &&
            e.bindAttribLocation(l
                , 0, "position");
        e.linkProgram(l);
        d = e.getProgramInfoLog(l);
        B = e.getShaderInfoLog(h);
        r = e.getShaderInfoLog(k);
        q = p = !0;
        if (!1 === e
            .getProgramParameter(l
                , e.LINK_STATUS))
            p = !1, console.error(
                "THREE.WebGLProgram: shader error: "
                , e.getError()
                , "gl.VALIDATE_STATUS"
                , e
                .getProgramParameter(
                    l, e
                    .VALIDATE_STATUS
                )
                , "gl.getProgramInfoLog"
                , d, B, r);
        else if ("" !== d) console
            .warn(
                "THREE.WebGLProgram: gl.getProgramInfoLog()"
                , d);
        else if ("" === B || "" ===
            r) q = !1;
        q && (this.diagnostics = {
            runnable: p
            , material: c
            , programLog: d
            , vertexShader: {
                log: B
                , prefix: g
            }
            , fragmentShader: {
                log: r
                , prefix: n
            }
        });
        e.deleteShader(h);
        e.deleteShader(k);
        var z;
        this.getUniforms =
            function () {
                void 0 === z && (z =
                    new Ja(e, l
                        , a));
                return z
            };
        var v;
        this.getAttributes =
            function () {
                if (void 0 === v) {
                    for (var a = {}
                            , b = e
                            .getProgramParameter(
                                l, e
                                .ACTIVE_ATTRIBUTES
                            )
                            , c =
                            0; c <
                        b; c++) {
                        var d = e
                            .getActiveAttrib(
                                l, c
                            )
                            .name;
                        a[d] = e
                            .getAttribLocation(
                                l, d
                            )
                    }
                    v = a
                }
                return v
            };
        this.destroy = function () {
            e.deleteProgram(l);
            this.program =
                void 0
        };
        Object.defineProperties(
            this, {
                uniforms: {
                    get: function () {
                        console
                            .warn(
                                "THREE.WebGLProgram: .uniforms is now .getUniforms()."
                            );
                        return this
                            .getUniforms()
                    }
                }
                , attributes: {
                    get: function () {
                        console
                            .warn(
                                "THREE.WebGLProgram: .attributes is now .getAttributes()."
                            );
                        return this
                            .getAttributes()
                    }
                }
            });
        this.id = Ic++;
        this.code = b;
        this.usedTimes = 1;
        this.program = l;
        this.vertexShader = h;
        this.fragmentShader = k;
        return this
    }

    function Jc(a, b) {
        function c(a, b) {
            var c;
            a ? a.isTexture ? c = a
                .encoding : a
                .isWebGLRenderTarget &&
                (console.warn(
                        "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
                    ), c =
                    a.texture
                    .encoding) : c =
                3E3;
            3E3 === c && b && (c =
                3007);
            return c
        }
        var d = []
            , e = {
                MeshDepthMaterial: "depth"
                , MeshNormalMaterial: "normal"
                , MeshBasicMaterial: "basic"
                , MeshLambertMaterial: "lambert"
                , MeshPhongMaterial: "phong"
                , MeshToonMaterial: "phong"
                , MeshStandardMaterial: "physical"
                , MeshPhysicalMaterial: "physical"
                , LineBasicMaterial: "basic"
                , LineDashedMaterial: "dashed"
                , PointsMaterial: "points"
            }
            , f =
            "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking"
            .split(" ");
        this.getParameters =
            function (d, f, k, n, B
                , r) {
                var p = e[d.type]
                    , q;
                b.floatVertexTextures &&
                    r && r
                    .skeleton && r
                    .skeleton
                    .useVertexTexture ?
                    q = 1024 : (q =
                        Math.floor((
                                b
                                .maxVertexUniforms -
                                20
                            ) /
                            4)
                        , void 0 !==
                        r && r && r
                        .isSkinnedMesh &&
                        (q = Math
                            .min(r
                                .skeleton
                                .bones
                                .length
                                , q
                                )
                            , q < r
                            .skeleton
                            .bones
                            .length &&
                            console
                            .warn(
                                "WebGLRenderer: too many bones - " +
                                r
                                .skeleton
                                .bones
                                .length +
                                ", this GPU supports just " +
                                q +
                                " (try OpenGL instead of ANGLE)"
                            )));
                var m = a
                    .getPrecision();
                null !== d
                    .precision && (
                        m = b
                        .getMaxPrecision(
                            d
                            .precision
                        ), m !==
                        d
                        .precision &&
                        console
                        .warn(
                            "THREE.WebGLProgram.getParameters:"
                            , d
                            .precision
                            , "not supported, using"
                            , m
                            , "instead."
                        ));
                var l = a
                    .getCurrentRenderTarget();
                return {
                    shaderID: p
                    , precision: m
                    , supportsVertexTextures: b
                        .vertexTextures
                    , outputEncoding: c(
                        l ? l
                        .texture :
                        null, a
                        .gammaOutput
                    )
                    , map: !!d.map
                    , mapEncoding: c(
                        d.map, a
                        .gammaInput
                    )
                    , envMap: !!d
                        .envMap
                    , envMapMode: d
                        .envMap && d
                        .envMap
                        .mapping
                    , envMapEncoding: c(
                        d
                        .envMap
                        , a
                        .gammaInput
                    )
                    , envMapCubeUV:
                        !!d
                        .envMap && (
                            306 ===
                            d.envMap
                            .mapping ||
                            307 ===
                            d.envMap
                            .mapping
                        )
                    , lightMap: !!d
                        .lightMap
                    , aoMap: !!d
                        .aoMap
                    , emissiveMap: !
                        !d
                        .emissiveMap
                    , emissiveMapEncoding: c(
                        d
                        .emissiveMap
                        , a
                        .gammaInput
                    )
                    , bumpMap: !!d
                        .bumpMap
                    , normalMap: !!d
                        .normalMap
                    , displacementMap:
                        !!d
                        .displacementMap
                    , roughnessMap:
                        !!d
                        .roughnessMap
                    , metalnessMap:
                        !!d
                        .metalnessMap
                    , specularMap: !
                        !d
                        .specularMap
                    , alphaMap: !!d
                        .alphaMap
                    , gradientMap: !
                        !d
                        .gradientMap
                    , combine: d
                        .combine
                    , vertexColors: d
                        .vertexColors
                    , fog: !!k
                    , useFog: d.fog
                    , fogExp: k && k
                        .isFogExp2
                    , flatShading: 1 ===
                        d.shading
                    , sizeAttenuation: d
                        .sizeAttenuation
                    , logarithmicDepthBuffer: b
                        .logarithmicDepthBuffer
                    , skinning: d
                        .skinning
                    , maxBones: q
                    , useVertexTexture: b
                        .floatVertexTextures &&
                        r && r
                        .skeleton &&
                        r.skeleton
                        .useVertexTexture
                    , morphTargets: d
                        .morphTargets
                    , morphNormals: d
                        .morphNormals
                    , maxMorphTargets: a
                        .maxMorphTargets
                    , maxMorphNormals: a
                        .maxMorphNormals
                    , numDirLights: f
                        .directional
                        .length
                    , numPointLights: f
                        .point
                        .length
                    , numSpotLights: f
                        .spot
                        .length
                    , numRectAreaLights: f
                        .rectArea
                        .length
                    , numHemiLights: f
                        .hemi
                        .length
                    , numClippingPlanes: n
                    , numClipIntersection: B
                    , shadowMapEnabled: a
                        .shadowMap
                        .enabled &&
                        r
                        .receiveShadow &&
                        0 < f
                        .shadows
                        .length
                    , shadowMapType: a
                        .shadowMap
                        .type
                    , toneMapping: a
                        .toneMapping
                    , physicallyCorrectLights: a
                        .physicallyCorrectLights
                    , premultipliedAlpha: d
                        .premultipliedAlpha
                    , alphaTest: d
                        .alphaTest
                    , doubleSided: 2 ===
                        d.side
                    , flipSided: 1 ===
                        d.side
                    , depthPacking: void 0 !==
                        d
                        .depthPacking ?
                        d
                        .depthPacking :
                        !1
                }
            };
        this.getProgramCode =
            function (a, b) {
                var c = [];
                b.shaderID ? c.push(
                    b.shaderID
                ) : (c.push(
                        a
                        .fragmentShader
                    ), c
                    .push(a
                        .vertexShader
                    ));
                if (void 0 !== a
                    .defines)
                    for (var d in a
                            .defines)
                        c.push(d), c
                        .push(a
                            .defines[
                                d]);
                for (d = 0; d < f
                    .length; d++) c
                    .push(b[f[d]]);
                return c.join()
            };
        this.acquireProgram =
            function (b, c, e) {
                for (var f, B = 0
                        , r = d
                        .length; B <
                    r; B++) {
                    var p = d[B];
                    if (p.code ===
                        e) {
                        f = p;
                        ++f
                            .usedTimes;
                        break
                    }
                }
                void 0 === f && (f =
                    new Hc(a, e
                        , b, c),
                    d
                    .push(f));
                return f
            };
        this.releaseProgram =
            function (a) {
                if (0 === --a
                    .usedTimes) {
                    var b = d
                        .indexOf(a);
                    d[b] = d[d
                        .length -
                        1];
                    d.pop();
                    a.destroy()
                }
            };
        this.programs = d
    }

    function Kc(a, b, c) {
        function d(a) {
            var h = a.target;
            a = f[h.id];
            null !== a.index && e(a
                .index);
            var k = a.attributes
                , n;
            for (n in k) e(k[n]);
            h.removeEventListener(
                "dispose", d);
            delete f[h.id];
            n = b.get(h);
            n.wireframe && e(n
                .wireframe);
            b["delete"](h);
            h = b.get(a);
            h.wireframe && e(h
                .wireframe);
            b["delete"](a);
            c.memory.geometries--
        }

        function e(c) {
            var d;
            d = c
                .isInterleavedBufferAttribute ?
                b.get(c.data)
                .__webglBuffer : b
                .get(c)
                .__webglBuffer;
            void 0 !== d && (a
                .deleteBuffer(
                    d), c
                .isInterleavedBufferAttribute ?
                b["delete"](c
                    .data) : b[
                    "delete"](c)
            )
        }
        var f = {};
        return {
            get: function (a) {
                var b = a
                    .geometry;
                if (void 0 !==
                    f[b.id])
                    return f[b
                        .id];
                b.addEventListener(
                    "dispose"
                    , d);
                var e;
                b.isBufferGeometry ?
                    e = b : b
                    .isGeometry &&
                    (void 0 ===
                        b
                        ._bufferGeometry &&
                        (b._bufferGeometry =
                            (
                                new fa
                                )
                            .setFromObject(
                                a
                            )
                        )
                        , e = b
                        ._bufferGeometry
                    );
                f[b.id] = e;
                c.memory
                    .geometries++;
                return e
            }
        }
    }

    function Lc(a, b, c) {
        function d(c, d) {
            var e = c
                .isInterleavedBufferAttribute ?
                c.data : c
                , k = b.get(e);
            if (void 0 === k
                .__webglBuffer) {
                k.__webglBuffer = a
                    .createBuffer();
                a.bindBuffer(d, k
                    .__webglBuffer
                );
                a.bufferData(d, e
                    .array, e
                    .dynamic ? a
                    .DYNAMIC_DRAW :
                    a
                    .STATIC_DRAW
                );
                var n = a.FLOAT
                    , B = e.array;
                B instanceof Float32Array
                    ?
                    n = a.FLOAT :
                    B instanceof Float64Array ?
                    console.warn(
                        "Unsupported data buffer format: Float64Array"
                    ) :
                    B instanceof Uint16Array ?
                    n = a
                    .UNSIGNED_SHORT :
                    B instanceof Int16Array ?
                    n = a.SHORT :
                    B instanceof Uint32Array ?
                    n = a
                    .UNSIGNED_INT :
                    B instanceof Int32Array ?
                    n = a.INT :
                    B instanceof Int8Array ?
                    n = a.BYTE :
                    B instanceof Uint8Array &&
                    (n = a
                        .UNSIGNED_BYTE
                    );
                k.bytesPerElement =
                    B
                    .BYTES_PER_ELEMENT;
                k.type = n;
                k.version = e
                    .version;
                e.onUploadCallback()
            } else k.version !== e
                .version && (a
                    .bindBuffer(d, k
                        .__webglBuffer
                    ), !1 === e
                    .dynamic ? a
                    .bufferData(d, e
                        .array, a
                        .STATIC_DRAW
                    ) : -1 === e
                    .updateRange
                    .count ? a
                    .bufferSubData(
                        d, 0, e
                        .array) :
                    0 === e
                    .updateRange
                    .count ? console
                    .error(
                        "THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."
                    ) :
                    (a.bufferSubData(
                            d, e
                            .updateRange
                            .offset *
                            e.array
                            .BYTES_PER_ELEMENT
                            , e
                            .array
                            .subarray(
                                e
                                .updateRange
                                .offset
                                , e
                                .updateRange
                                .offset +
                                e
                                .updateRange
                                .count
                            ))
                        , e
                        .updateRange
                        .count = 0)
                    , k.version = e
                    .version)
        }
        var e = new Kc(a, b, c);
        return {
            getAttributeBuffer: function (
                a) {
                return a
                    .isInterleavedBufferAttribute ?
                    b.get(a
                        .data)
                    .__webglBuffer :
                    b.get(a)
                    .__webglBuffer
            }
            , getAttributeProperties: function (
                a) {
                return a
                    .isInterleavedBufferAttribute ?
                    b.get(a
                        .data) :
                    b.get(a)
            }
            , getWireframeAttribute: function (
                c) {
                var e = b.get(
                    c);
                if (void 0 !== e
                    .wireframe)
                    return e
                        .wireframe;
                var h = []
                    , k = c
                    .index;
                c = c
                    .attributes;
                if (null !==
                    k) {
                    k = k.array;
                    c = 0;
                    for (var n =
                            k
                            .length; c <
                        n; c +=
                        3) {
                        var B =
                            k[c +
                                0
                            ]
                            , r =
                            k[c +
                                1
                            ]
                            , p =
                            k[c +
                                2
                            ];
                        h.push(B
                            , r
                            , r
                            , p
                            , p
                            , B
                        )
                    }
                } else
                    for (k = c
                        .position
                        .array
                        , c = 0
                        , n = k
                        .length /
                        3 -
                        1; c <
                        n; c +=
                        3) B =
                        c + 0
                        , r =
                        c +
                        1, p =
                        c + 2, h
                        .push(B
                            , r
                            , r
                            , p
                            , p,
                            B
                        );
                h = new(65535 <
                        rb(h) ?
                        Qa : ya)
                    (h, 1);
                d(h, a
                    .ELEMENT_ARRAY_BUFFER
                    );
                return e
                    .wireframe =
                    h
            }
            , update: function (b) {
                var c = e.get(
                    b);
                b.geometry
                    .isGeometry &&
                    c
                    .updateFromObject(
                        b);
                b = c.index;
                var h = c
                    .attributes;
                null !== b && d(
                    b, a
                    .ELEMENT_ARRAY_BUFFER
                );
                for (var k in h)
                    d(h[k], a
                        .ARRAY_BUFFER
                    );
                b = c
                    .morphAttributes;
                for (k in b)
                    for (var h =
                            b[
                                k
                                ]
                            , n =
                            0
                            , B =
                            h
                            .length; n <
                        B; n++)
                        d(h[n]
                            , a
                            .ARRAY_BUFFER
                        );
                return c
            }
        }
    }

    function Mc(a, b, c, d, e, f
        , g) {
        function h(a, b) {
            if (a.width > b || a
                .height > b) {
                var c = b / Math
                    .max(a.width, a
                        .height)
                    , d = document
                    .createElementNS(
                        "http://www.w3.org/1999/xhtml"
                        , "canvas");
                d.width = Math
                    .floor(a.width *
                        c);
                d.height = Math
                    .floor(a
                        .height * c
                    );
                d.getContext("2d")
                    .drawImage(a, 0
                        , 0, a
                        .width
                        , a.height,
                        0
                        , 0, d
                        .width
                        , d.height);
                console.warn(
                    "THREE.WebGLRenderer: image is too big (" +
                    a.width +
                    "x" + a
                    .height +
                    "). Resized to " +
                    d.width +
                    "x" + d
                    .height, a);
                return d
            }
            return a
        }

        function k(a) {
            return P.isPowerOfTwo(a
                    .width) && P
                .isPowerOfTwo(a
                    .height)
        }

        function n(b) {
            return 1003 === b ||
                1004 === b ||
                1005 === b ? a
                .NEAREST : a.LINEAR
        }

        function B(b) {
            b = b.target;
            b.removeEventListener(
                "dispose", B);
            a: {
                var c = d.get(
                    b);
                if (b.image && c
                    .__image__webglTextureCube
                ) a
                    .deleteTexture(
                        c
                        .__image__webglTextureCube
                    );
                else {
                    if (void 0 ===
                        c
                        .__webglInit
                    )
                        break a;
                    a.deleteTexture(
                        c
                        .__webglTexture
                    )
                }
                d["delete"](b)
            }
            z.textures--
        }

        function r(b) {
            b = b.target;
            b.removeEventListener(
                "dispose"
                , r);
            var c = d.get(b)
                , e = d.get(b
                    .texture);
            if (b) {
                void 0 !== e
                    .__webglTexture &&
                    a.deleteTexture(
                        e
                        .__webglTexture
                    );
                b.depthTexture && b
                    .depthTexture
                    .dispose();
                if (b
                    .isWebGLRenderTargetCube
                )
                    for (e = 0; 6 >
                        e; e++) a
                        .deleteFramebuffer(
                            c
                            .__webglFramebuffer[
                                e])
                        , c
                        .__webglDepthbuffer &&
                        a
                        .deleteRenderbuffer(
                            c
                            .__webglDepthbuffer[
                                e]);
                else a
                    .deleteFramebuffer(
                        c
                        .__webglFramebuffer
                    ), c
                    .__webglDepthbuffer &&
                    a
                    .deleteRenderbuffer(
                        c
                        .__webglDepthbuffer
                    );
                d["delete"](b
                    .texture);
                d["delete"](b)
            }
            z.textures--
        }

        function p(b, g) {
            var p = d.get(b);
            if (0 <
                b.version && p
                .__version !== b
                .version) {
                var n = b.image;
                if (void 0 === n)
                    console.warn(
                        "THREE.WebGLRenderer: Texture marked for update but image is undefined"
                        , b);
                else if (!1 === n
                    .complete)
                    console.warn(
                        "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
                        , b);
                else {
                    void 0 === p
                        .__webglInit &&
                        (p.__webglInit = !
                            0, b
                            .addEventListener(
                                "dispose"
                                , B
                                )
                            , p
                            .__webglTexture =
                            a
                            .createTexture()
                            , z
                            .textures++
                        );
                    c.activeTexture(
                        a
                        .TEXTURE0 +
                        g);
                    c.bindTexture(a
                        .TEXTURE_2D
                        , p
                        .__webglTexture
                    );
                    a.pixelStorei(a
                        .UNPACK_FLIP_Y_WEBGL
                        , b
                        .flipY);
                    a.pixelStorei(a
                        .UNPACK_PREMULTIPLY_ALPHA_WEBGL
                        , b
                        .premultiplyAlpha
                    );
                    a.pixelStorei(a
                        .UNPACK_ALIGNMENT
                        , b
                        .unpackAlignment
                    );
                    var r = h(b
                        .image
                        , e
                        .maxTextureSize
                    );
                    if ((1001 !== b
                            .wrapS ||
                            1001 !==
                            b
                            .wrapT ||
                            1003 !==
                            b
                            .minFilter &&
                            1006 !==
                            b
                            .minFilter
                        ) && !
                        1 === k(r))
                        if (n = r
                            , n instanceof HTMLImageElement ||
                            n instanceof HTMLCanvasElement
                        ) {
                            var m =
                                document
                                .createElementNS(
                                    "http://www.w3.org/1999/xhtml"
                                    , "canvas"
                                );
                            m.width =
                                P
                                .nearestPowerOfTwo(
                                    n
                                    .width
                                );
                            m.height =
                                P
                                .nearestPowerOfTwo(
                                    n
                                    .height
                                );
                            m.getContext(
                                    "2d"
                                )
                                .drawImage(
                                    n
                                    , 0
                                    , 0
                                    , m
                                    .width
                                    , m
                                    .height
                                );
                            console
                                .warn(
                                    "THREE.WebGLRenderer: image is not power of two (" +
                                    n
                                    .width +
                                    "x" +
                                    n
                                    .height +
                                    "). Resized to " +
                                    m
                                    .width +
                                    "x" +
                                    m
                                    .height
                                    , n
                                );
                            r = m
                        } else r =
                            n;
                    var n = k(r)
                        , m = f(b
                            .format
                        )
                        , l = f(b
                            .type);
                    q(a.TEXTURE_2D
                        , b, n);
                    var x = b
                        .mipmaps;
                    if (b
                        .isDepthTexture
                    ) {
                        x = a
                            .DEPTH_COMPONENT;
                        if (1015 ===
                            b.type
                        ) {
                            if (!v)
                                throw Error(
                                    "Float Depth Texture only supported in WebGL2.0"
                                );
                            x = a
                                .DEPTH_COMPONENT32F
                        } else v &&
                            (x = a
                                .DEPTH_COMPONENT16
                            );
                        1026 === b
                            .format &&
                            x === a
                            .DEPTH_COMPONENT &&
                            1012 !==
                            b
                            .type &&
                            1014 !==
                            b
                            .type &&
                            (console
                                .warn(
                                    "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
                                )
                                , b
                                .type =
                                1012
                                , l =
                                f(b
                                    .type
                                    )
                            );
                        1027 === b
                            .format &&
                            (x = a
                                .DEPTH_STENCIL
                                , 1020 !==
                                b
                                .type &&
                                (console
                                    .warn(
                                        "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                                    )
                                    , b
                                    .type =
                                    1020
                                    , l =
                                    f(b
                                        .type
                                        )
                                )
                            );
                        c.texImage2D(
                            a
                            .TEXTURE_2D
                            , 0
                            , x,
                            r
                            .width
                            , r
                            .height
                            , 0
                            , m
                            , l
                            , null
                        )
                    } else if (b
                        .isDataTexture
                    )
                        if (0 < x
                            .length &&
                            n) {
                            for (var w =
                                    0
                                    , K =
                                    x
                                    .length; w <
                                K; w++
                            )
                                r =
                                x[
                                    w
                                    ]
                                , c
                                .texImage2D(
                                    a
                                    .TEXTURE_2D
                                    , w
                                    , m
                                    , r
                                    .width
                                    , r
                                    .height
                                    , 0
                                    , m
                                    , l
                                    , r
                                    .data
                                );
                            b.generateMipmaps = !
                                1
                        } else c
                            .texImage2D(
                                a
                                .TEXTURE_2D
                                , 0
                                , m,
                                r
                                .width
                                , r
                                .height
                                , 0
                                , m
                                , l,
                                r
                                .data
                            );
                    else if (b
                        .isCompressedTexture
                    )
                        for (w =
                            0, K = x
                            .length; w <
                            K; w++)
                            r = x[
                                w]
                            , 1023 !==
                            b
                            .format &&
                            1022 !==
                            b
                            .format ?
                            -1 < c
                            .getCompressedTextureFormats()
                            .indexOf(
                                m) ?
                            c
                            .compressedTexImage2D(
                                a
                                .TEXTURE_2D
                                , w
                                , m,
                                r
                                .width
                                , r
                                .height
                                , 0,
                                r
                                .data
                            ) :
                            console
                            .warn(
                                "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                            ) :
                            c
                            .texImage2D(
                                a
                                .TEXTURE_2D
                                , w
                                , m,
                                r
                                .width
                                , r
                                .height
                                , 0
                                , m
                                , l,
                                r
                                .data
                            );
                    else if (0 < x
                        .length && n
                    ) {
                        w = 0;
                        for (K = x
                            .length; w <
                            K; w++)
                            r = x[
                                w],
                            c
                            .texImage2D(
                                a
                                .TEXTURE_2D
                                , w
                                , m
                                , m
                                , l,
                                r
                            );
                        b.generateMipmaps = !
                            1
                    } else c
                        .texImage2D(
                            a
                            .TEXTURE_2D
                            , 0, m,
                            m
                            , l, r);
                    b.generateMipmaps &&
                        n && a
                        .generateMipmap(
                            a
                            .TEXTURE_2D
                        );
                    p.__version = b
                        .version;
                    if (b.onUpdate)
                        b.onUpdate(
                            b);
                    return
                }
            }
            c.activeTexture(a
                .TEXTURE0 + g);
            c.bindTexture(a
                .TEXTURE_2D, p
                .__webglTexture)
        }

        function q(c, g, h) {
            h ? (a.texParameteri(c
                    , a
                    .TEXTURE_WRAP_S
                    , f(g.wrapS)
                    )
                , a
                .texParameteri(
                    c, a
                    .TEXTURE_WRAP_T
                    , f(g.wrapT)
                    )
                , a
                .texParameteri(
                    c, a
                    .TEXTURE_MAG_FILTER
                    , f(g
                        .magFilter
                        )
                ), a
                .texParameteri(
                    c, a
                    .TEXTURE_MIN_FILTER
                    , f(g
                        .minFilter
                        )
                )) : (a
                .texParameteri(
                    c, a
                    .TEXTURE_WRAP_S
                    , a
                    .CLAMP_TO_EDGE
                ), a
                .texParameteri(
                    c, a
                    .TEXTURE_WRAP_T
                    , a
                    .CLAMP_TO_EDGE
                )
                , 1001 === g
                .wrapS &&
                1001 === g
                .wrapT ||
                console.warn(
                    "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
                    , g), a
                .texParameteri(
                    c, a
                    .TEXTURE_MAG_FILTER
                    , n(g
                        .magFilter
                        )
                ), a
                .texParameteri(
                    c, a
                    .TEXTURE_MIN_FILTER
                    , n(g
                        .minFilter
                        )
                ), 1003 !==
                g.minFilter &&
                1006 !== g
                .minFilter &&
                console.warn(
                    "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
                    , g));
            !(h = b.get(
                "EXT_texture_filter_anisotropic"
            )) ||
            1015 === g.type &&
                null === b.get(
                    "OES_texture_float_linear"
                ) || 1016 === g
                .type && null === b
                .get(
                    "OES_texture_half_float_linear"
                ) || !(1 < g
                    .anisotropy || d
                    .get(g)
                    .__currentAnisotropy
                ) || (a
                    .texParameterf(
                        c, h
                        .TEXTURE_MAX_ANISOTROPY_EXT
                        , Math.min(g
                            .anisotropy
                            , e
                            .getMaxAnisotropy()
                        )), d
                    .get(g)
                    .__currentAnisotropy =
                    g.anisotropy)
        }

        function m(b, e, g, h) {
            var k = f(e.texture
                    .format)
                , n = f(e.texture
                    .type);
            c.texImage2D(h, 0, k, e
                .width, e
                .height, 0, k
                , n, null);
            a.bindFramebuffer(a
                .FRAMEBUFFER, b);
            a.framebufferTexture2D(a
                .FRAMEBUFFER, g
                , h, d.get(e
                    .texture)
                .__webglTexture
                , 0);
            a.bindFramebuffer(a
                .FRAMEBUFFER
                , null)
        }

        function l(b, c) {
            a.bindRenderbuffer(a
                .RENDERBUFFER, b
            );
            c.depthBuffer && !c
                .stencilBuffer ? (a
                    .renderbufferStorage(
                        a
                        .RENDERBUFFER
                        , a
                        .DEPTH_COMPONENT16
                        , c.width, c
                        .height), a
                    .framebufferRenderbuffer(
                        a
                        .FRAMEBUFFER
                        , a
                        .DEPTH_ATTACHMENT
                        , a
                        .RENDERBUFFER
                        , b)) : c
                .depthBuffer && c
                .stencilBuffer ? (a
                    .renderbufferStorage(
                        a
                        .RENDERBUFFER
                        , a
                        .DEPTH_STENCIL
                        , c.width, c
                        .height), a
                    .framebufferRenderbuffer(
                        a
                        .FRAMEBUFFER
                        , a
                        .DEPTH_STENCIL_ATTACHMENT
                        , a
                        .RENDERBUFFER
                        , b)) : a
                .renderbufferStorage(
                    a.RENDERBUFFER
                    , a.RGBA4, c
                    .width, c.height
                );
            a.bindRenderbuffer(a
                .RENDERBUFFER
                , null)
        }
        var z = g.memory
            , v = "undefined" !==
            typeof WebGL2RenderingContext &&
            a instanceof WebGL2RenderingContext;
        this.setTexture2D = p;
        this.setTextureCube =
            function (b, g) {
                var n = d.get(b);
                if (6 === b.image
                    .length)
                    if (0 < b
                        .version &&
                        n
                        .__version !==
                        b.version) {
                        n.__image__webglTextureCube ||
                            (b.addEventListener(
                                    "dispose"
                                    , B
                                )
                                , n
                                .__image__webglTextureCube =
                                a
                                .createTexture()
                                , z
                                .textures++
                            );
                        c.activeTexture(
                            a
                            .TEXTURE0 +
                            g);
                        c.bindTexture(
                            a
                            .TEXTURE_CUBE_MAP
                            , n
                            .__image__webglTextureCube
                        );
                        a.pixelStorei(
                            a
                            .UNPACK_FLIP_Y_WEBGL
                            , b
                            .flipY
                        );
                        for (var p =
                                b &&
                                b
                                .isCompressedTexture
                                , r =
                                b
                                .image[
                                    0
                                ] &&
                                b
                                .image[
                                    0
                                ]
                                .isDataTexture
                                , m = []
                                , l =
                                0; 6 >
                            l; l++)
                            m[l] =
                            p || r ?
                            r ? b
                            .image[
                                l]
                            .image :
                            b.image[
                                l] :
                            h(b.image[
                                    l
                                ]
                                , e
                                .maxCubemapSize
                            );
                        var x = k(m[
                                0
                                ])
                            , w = f(
                                b
                                .format
                            )
                            , v = f(
                                b
                                .type
                            );
                        q(a.TEXTURE_CUBE_MAP
                            , b,
                            x
                        );
                        for (l =
                            0; 6 >
                            l; l++)
                            if (p)
                                for (
                                    var M
                                        , X =
                                        m[
                                            l
                                            ]
                                        .mipmaps
                                        , V =
                                        0
                                        , L =
                                        X
                                        .length; V <
                                    L; V++
                                )
                                    M =
                                    X[
                                        V
                                        ]
                                    , 1023 !==
                                    b
                                    .format &&
                                    1022 !==
                                    b
                                    .format ?
                                    -
                                    1 <
                                    c
                                    .getCompressedTextureFormats()
                                    .indexOf(
                                        w
                                    ) ?
                                    c
                                    .compressedTexImage2D(
                                        a
                                        .TEXTURE_CUBE_MAP_POSITIVE_X +
                                        l
                                        , V
                                        , w
                                        , M
                                        .width
                                        , M
                                        .height
                                        , 0
                                        , M
                                        .data
                                    ) :
                                    console
                                    .warn(
                                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                                    ) :
                                    c
                                    .texImage2D(
                                        a
                                        .TEXTURE_CUBE_MAP_POSITIVE_X +
                                        l
                                        , V
                                        , w
                                        , M
                                        .width
                                        , M
                                        .height
                                        , 0
                                        , w
                                        , v
                                        , M
                                        .data
                                    );
                            else r ?
                                c
                                .texImage2D(
                                    a
                                    .TEXTURE_CUBE_MAP_POSITIVE_X +
                                    l
                                    , 0
                                    , w
                                    , m[
                                        l
                                        ]
                                    .width
                                    , m[
                                        l
                                        ]
                                    .height
                                    , 0
                                    , w
                                    , v
                                    , m[
                                        l
                                        ]
                                    .data
                                ) :
                                c
                                .texImage2D(
                                    a
                                    .TEXTURE_CUBE_MAP_POSITIVE_X +
                                    l
                                    , 0
                                    , w
                                    , w
                                    , v
                                    , m[
                                        l
                                        ]
                                );
                        b.generateMipmaps &&
                            x && a
                            .generateMipmap(
                                a
                                .TEXTURE_CUBE_MAP
                            );
                        n.__version =
                            b
                            .version;
                        if (b
                            .onUpdate
                        ) b
                            .onUpdate(
                                b)
                    } else c
                        .activeTexture(
                            a
                            .TEXTURE0 +
                            g)
                        , c
                        .bindTexture(
                            a
                            .TEXTURE_CUBE_MAP
                            , n
                            .__image__webglTextureCube
                        )
            };
        this.setTextureCubeDynamic =
            function (b, e) {
                c.activeTexture(a
                    .TEXTURE0 +
                    e);
                c.bindTexture(a
                    .TEXTURE_CUBE_MAP
                    , d.get(b)
                    .__webglTexture
                )
            };
        this.setupRenderTarget =
            function (b) {
                var e = d.get(b)
                    , f = d.get(b
                        .texture);
                b.addEventListener(
                    "dispose", r
                );
                f.__webglTexture = a
                    .createTexture();
                z.textures++;
                var g = !0 === b
                    .isWebGLRenderTargetCube
                    , h = k(b);
                if (g) {
                    e
                        .__webglFramebuffer = [];
                    for (var n =
                            0; 6 >
                        n; n++) e
                        .__webglFramebuffer[
                            n] = a
                        .createFramebuffer()
                } else e
                    .__webglFramebuffer =
                    a
                    .createFramebuffer();
                if (g) {
                    c.bindTexture(a
                        .TEXTURE_CUBE_MAP
                        , f
                        .__webglTexture
                    );
                    q(a.TEXTURE_CUBE_MAP
                        , b
                        .texture
                        , h);
                    for (n = 0; 6 >
                        n; n++) m(e
                        .__webglFramebuffer[
                            n]
                        , b, a
                        .COLOR_ATTACHMENT0
                        , a
                        .TEXTURE_CUBE_MAP_POSITIVE_X +
                        n);
                    b.texture
                        .generateMipmaps &&
                        h && a
                        .generateMipmap(
                            a
                            .TEXTURE_CUBE_MAP
                        );
                    c.bindTexture(a
                        .TEXTURE_CUBE_MAP
                        , null)
                } else c
                    .bindTexture(a
                        .TEXTURE_2D
                        , f
                        .__webglTexture
                    ), q(a
                        .TEXTURE_2D
                        , b.texture,
                        h
                    ), m(e
                        .__webglFramebuffer
                        , b, a
                        .COLOR_ATTACHMENT0
                        , a
                        .TEXTURE_2D
                    ), b.texture
                    .generateMipmaps &&
                    h && a
                    .generateMipmap(
                        a.TEXTURE_2D
                    )
                    , c.bindTexture(
                        a
                        .TEXTURE_2D
                        , null);
                if (b.depthBuffer) {
                    e = d.get(b);
                    f = !0 === b
                        .isWebGLRenderTargetCube;
                    if (b
                        .depthTexture
                    ) {
                        if (f) throw Error(
                            "target.depthTexture not supported in Cube render targets"
                        );
                        if (b && b
                            .isWebGLRenderTargetCube
                        ) throw Error(
                            "Depth Texture with cube render targets is not supported!"
                        );
                        a.bindFramebuffer(
                            a
                            .FRAMEBUFFER
                            , e
                            .__webglFramebuffer
                        );
                        if (!b
                            .depthTexture ||
                            !b
                            .depthTexture
                            .isDepthTexture
                        ) throw Error(
                            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
                        );
                        d.get(b
                                .depthTexture
                                )
                            .__webglTexture &&
                            b
                            .depthTexture
                            .image
                            .width ===
                            b
                            .width &&
                            b
                            .depthTexture
                            .image
                            .height ===
                            b
                            .height ||
                            (b.depthTexture
                                .image
                                .width =
                                b
                                .width
                                , b
                                .depthTexture
                                .image
                                .height =
                                b
                                .height
                                , b
                                .depthTexture
                                .needsUpdate = !
                                0);
                        p(b.depthTexture
                            , 0);
                        e = d.get(b
                                .depthTexture
                            )
                            .__webglTexture;
                        if (1026 ===
                            b
                            .depthTexture
                            .format)
                            a
                            .framebufferTexture2D(
                                a
                                .FRAMEBUFFER
                                , a
                                .DEPTH_ATTACHMENT
                                , a
                                .TEXTURE_2D
                                , e,
                                0
                            );
                        else if (
                            1027 ===
                            b
                            .depthTexture
                            .format)
                            a
                            .framebufferTexture2D(
                                a
                                .FRAMEBUFFER
                                , a
                                .DEPTH_STENCIL_ATTACHMENT
                                , a
                                .TEXTURE_2D
                                , e,
                                0
                            );
                        else throw Error(
                            "Unknown depthTexture format"
                        );
                    } else if (f)
                        for (e
                            .__webglDepthbuffer = []
                            , f =
                            0; 6 >
                            f; f++)
                            a
                            .bindFramebuffer(
                                a
                                .FRAMEBUFFER
                                , e
                                .__webglFramebuffer[
                                    f
                                ]
                            ), e
                            .__webglDepthbuffer[
                                f] =
                            a
                            .createRenderbuffer()
                            , l(e
                                .__webglDepthbuffer[
                                    f
                                ]
                                , b
                                );
                    else a
                        .bindFramebuffer(
                            a
                            .FRAMEBUFFER
                            , e
                            .__webglFramebuffer
                        ), e
                        .__webglDepthbuffer =
                        a
                        .createRenderbuffer()
                        , l(e
                            .__webglDepthbuffer
                            , b);
                    a.bindFramebuffer(
                        a
                        .FRAMEBUFFER
                        , null)
                }
            };
        this.updateRenderTargetMipmap =
            function (b) {
                var e = b.texture;
                e.generateMipmaps &&
                    k(b) && 1003 !==
                    e.minFilter &&
                    1006 !== e
                    .minFilter && (
                        b = b && b
                        .isWebGLRenderTargetCube ?
                        a
                        .TEXTURE_CUBE_MAP :
                        a
                        .TEXTURE_2D
                        , e = d.get(
                            e)
                        .__webglTexture
                        , c
                        .bindTexture(
                            b, e), a
                        .generateMipmap(
                            b), c
                        .bindTexture(
                            b, null)
                    )
            }
    }

    function Nc() {
        var a = {};
        return {
            get: function (b) {
                b = b.uuid;
                var c = a[b];
                void 0 === c &&
                    (c = {}, a[
                            b] =
                        c);
                return c
            }
            , "delete": function (
                b) {
                delete a[b.uuid]
            }
            , clear: function () {
                a = {}
            }
        }
    }

    function Oc(a, b, c) {
        function d(b, c, d) {
            var e = new Uint8Array(
                    4)
                , f = a
                .createTexture();
            a.bindTexture(b, f);
            a.texParameteri(b, a
                .TEXTURE_MIN_FILTER
                , a.NEAREST);
            a.texParameteri(b, a
                .TEXTURE_MAG_FILTER
                , a.NEAREST);
            for (b = 0; b < d; b++)
                a.texImage2D(c +
                    b, 0, a.RGBA, 1
                    , 1, 0, a.RGBA,
                    a
                    .UNSIGNED_BYTE
                    , e);
            return f
        }

        function e(b) {
            !0 !== y[b] && (a
                .enable(b), y[
                    b] = !0)
        }

        function f(b) {
            !1 !== y[b] && (a
                .disable(b), y[
                    b] = !1)
        }

        function g(b, d, g, h, k, n
            , p, r) {
            0 !== b ? e(a.BLEND) :
                f(a.BLEND);
            if (b !== t || r !== K)
                2 === b ? r ? (a
                    .blendEquationSeparate(
                        a.FUNC_ADD
                        , a.FUNC_ADD
                        )
                    , a
                    .blendFuncSeparate(
                        a.ONE, a
                        .ONE, a.ONE
                        , a.ONE)) :
                (a
                    .blendEquation(a
                        .FUNC_ADD)
                    , a.blendFunc(a
                        .SRC_ALPHA
                        , a.ONE)) :
                3 === b ? r ? (a
                    .blendEquationSeparate(
                        a.FUNC_ADD
                        , a.FUNC_ADD
                        )
                    , a
                    .blendFuncSeparate(
                        a.ZERO, a
                        .ZERO, a
                        .ONE_MINUS_SRC_COLOR
                        , a
                        .ONE_MINUS_SRC_ALPHA
                    )) :
                (a.blendEquation(a
                        .FUNC_ADD)
                    , a.blendFunc(a
                        .ZERO, a
                        .ONE_MINUS_SRC_COLOR
                    )) : 4 ===
                b ? r ? (a
                    .blendEquationSeparate(
                        a.FUNC_ADD
                        , a.FUNC_ADD
                        )
                    , a
                    .blendFuncSeparate(
                        a.ZERO, a
                        .SRC_COLOR
                        , a.ZERO, a
                        .SRC_ALPHA)
                ) : (a
                    .blendEquation(a
                        .FUNC_ADD)
                    , a.blendFunc(a
                        .ZERO, a
                        .SRC_COLOR)
                ) : r ? (a
                    .blendEquationSeparate(
                        a.FUNC_ADD
                        , a.FUNC_ADD
                        )
                    , a
                    .blendFuncSeparate(
                        a.ONE, a
                        .ONE_MINUS_SRC_ALPHA
                        , a.ONE, a
                        .ONE_MINUS_SRC_ALPHA
                    )) : (a
                    .blendEquationSeparate(
                        a.FUNC_ADD
                        , a.FUNC_ADD
                        )
                    , a
                    .blendFuncSeparate(
                        a.SRC_ALPHA
                        , a
                        .ONE_MINUS_SRC_ALPHA
                        , a.ONE, a
                        .ONE_MINUS_SRC_ALPHA
                    ))
                , t = b, K = r;
            if (5 === b) {
                k = k || d;
                n = n || g;
                p = p || h;
                if (d !== U || k !==
                    E) a
                    .blendEquationSeparate(
                        c(d), c(k))
                    , U = d, E = k;
                if (g !== G || h !==
                    C || n !== J ||
                    p !== F) a
                    .blendFuncSeparate(
                        c(g), c(h)
                        , c(n), c(p)
                        )
                    , G = g, C = h
                    , J = n, F = p
            } else F = J = E = C =
                G = U = null
        }

        function h(a) {
            p.setFunc(a)
        }

        function k(b) {
            M !== b && (b ? a
                .frontFace(a
                    .CW) : a
                .frontFace(a
                    .CCW), M = b
            )
        }

        function n(b) {
            0 !== b ? (e(a
                    .CULL_FACE)
                , b !== X && (
                    1 === b ? a
                    .cullFace(a
                        .BACK) :
                    2 === b ? a
                    .cullFace(a
                        .FRONT
                    ) : a
                    .cullFace(a
                        .FRONT_AND_BACK
                    ))) : f(
                a.CULL_FACE);
            X = b
        }

        function B(b) {
            void 0 === b && (b = a
                .TEXTURE0 + H -
                1);
            T !== b && (a
                .activeTexture(
                    b)
                , T = b)
        }
        var r = new function () {
                var b = !1
                    , c = new da
                    , d = null
                    , e = new da;
                return {
                    setMask: function (
                        c) {
                        d ===
                            c ||
                            b ||
                            (a.colorMask(
                                    c
                                    , c
                                    , c
                                    , c
                                )
                                , d =
                                c
                            )
                    }
                    , setLocked: function (
                        a) {
                        b = a
                    }
                    , setClear: function (
                        b, d, f
                        , g, h
                        ) {
                        !0 ===
                            h &&
                            (b *=
                                g
                                , d *=
                                g
                                , f *=
                                g
                            );
                        c.set(b, d
                            , f
                            , g
                        );
                        !1 === e
                            .equals(
                                c
                            ) &&
                            (a.clearColor(

                                    b
                                    , d
                                    , f
                                    , g
                                )
                                , e
                                .copy(
                                    c
                                )
                            )
                    }
                    , reset: function () {
                        b = !1;
                        d =
                            null;
                        e.set(0, 0
                            , 0
                            , 1
                        )
                    }
                }
            }
            , p = new function () {
                var b = !1
                    , c = null
                    , d = null
                    , g = null;
                return {
                    setTest: function (
                        b) {
                        b ? e(a
                                .DEPTH_TEST
                                ) :
                            f(a
                                .DEPTH_TEST
                                )
                    }
                    , setMask: function (
                        d) {
                        c ===
                            d ||
                            b ||
                            (a.depthMask(
                                    d
                                )
                                , c =
                                d
                            )
                    }
                    , setFunc: function (
                        b) {
                        if (d !==
                            b) {
                            if (
                                b
                                )
                                switch (
                                    b
                                ) {
                                case 0:
                                    a.depthFunc(
                                        a
                                        .NEVER
                                    );
                                    break;
                                case 1:
                                    a.depthFunc(
                                        a
                                        .ALWAYS
                                    );
                                    break;
                                case 2:
                                    a.depthFunc(
                                        a
                                        .LESS
                                    );
                                    break;
                                case 3:
                                    a.depthFunc(
                                        a
                                        .LEQUAL
                                    );
                                    break;
                                case 4:
                                    a.depthFunc(
                                        a
                                        .EQUAL
                                    );
                                    break;
                                case 5:
                                    a.depthFunc(
                                        a
                                        .GEQUAL
                                    );
                                    break;
                                case 6:
                                    a.depthFunc(
                                        a
                                        .GREATER
                                    );
                                    break;
                                case 7:
                                    a.depthFunc(
                                        a
                                        .NOTEQUAL
                                    );
                                    break;
                                default:
                                    a.depthFunc(
                                        a
                                        .LEQUAL
                                    )
                                } else
                                    a
                                    .depthFunc(
                                        a
                                        .LEQUAL
                                    );
                            d = b
                        }
                    }
                    , setLocked: function (
                        a) {
                        b = a
                    }
                    , setClear: function (
                        b) {
                        g !==
                            b &&
                            (a.clearDepth(
                                    b
                                )
                                , g =
                                b
                            )
                    }
                    , reset: function () {
                        b = !1;
                        g = d =
                            c =
                            null
                    }
                }
            }
            , q = new function () {
                var b = !1
                    , c =
                    null
                    , d = null
                    , g = null
                    , h = null
                    , k = null
                    , n = null
                    , p = null
                    , r = null;
                return {
                    setTest: function (
                        b) {
                        b ? e(a
                                .STENCIL_TEST
                                ) :
                            f(a
                                .STENCIL_TEST
                                )
                    }
                    , setMask: function (
                        d) {
                        c ===
                            d ||
                            b ||
                            (a.stencilMask(
                                    d
                                )
                                , c =
                                d
                            )
                    }
                    , setFunc: function (
                        b, c, e
                    ) {
                        if (d !==
                            b ||
                            g !==
                            c ||
                            h !==
                            e) a
                            .stencilFunc(
                                b
                                , c
                                , e
                            )
                            , d =
                            b
                            , g =
                            c
                            , h =
                            e
                    }
                    , setOp: function (
                        b, c, d
                    ) {
                        if (k !==
                            b ||
                            n !==
                            c ||
                            p !==
                            d) a
                            .stencilOp(
                                b
                                , c
                                , d
                            )
                            , k =
                            b
                            , n =
                            c
                            , p =
                            d
                    }
                    , setLocked: function (
                        a) {
                        b = a
                    }
                    , setClear: function (
                        b) {
                        r !==
                            b &&
                            (a.clearStencil(
                                    b
                                )
                                , r =
                                b
                            )
                    }
                    , reset: function () {
                        b = !1;
                        r = p =
                            n =
                            k =
                            h =
                            g =
                            d =
                            c =
                            null
                    }
                }
            }
            , m = a.getParameter(a
                .MAX_VERTEX_ATTRIBS
            )
            , l = new Uint8Array(m)
            , z = new Uint8Array(m)
            , v = new Uint8Array(m)
            , y = {}
            , S = null
            , t = null
            , U = null
            , G = null
            , C = null
            , E = null
            , J = null
            , F = null
            , K = !1
            , M = null
            , X = null
            , V = null
            , L = null
            , O = null
            , D = null
            , H = a.getParameter(a
                .MAX_TEXTURE_IMAGE_UNITS
            )
            , m = parseFloat(
                /^WebGL\ ([0-9])/
                .exec(a
                    .getParameter(a
                        .VERSION))[
                    1])
            , ha = 1 <= parseFloat(
                m)
            , T = null
            , I = {}
            , A = new da
            , P = new da
            , Q = {};
        Q[a.TEXTURE_2D] = d(a
            .TEXTURE_2D, a
            .TEXTURE_2D, 1);
        Q[a.TEXTURE_CUBE_MAP] = d(a
            .TEXTURE_CUBE_MAP, a
            .TEXTURE_CUBE_MAP_POSITIVE_X
            , 6);
        return {
            buffers: {
                color: r
                , depth: p
                , stencil: q
            }
            , init: function () {
                r.setClear(0
                    , 0, 0
                    , 1);
                p.setClear(1);
                q.setClear(0);
                e(a.DEPTH_TEST);
                h(3);
                k(!1);
                n(1);
                e(a.CULL_FACE);
                e(a.BLEND);
                g(1)
            }
            , initAttributes: function () {
                for (var a = 0
                        , b = l
                        .length; a <
                    b; a++) l[
                    a] = 0
            }
            , enableAttribute: function (
                c) {
                l[c] = 1;
                0 === z[c] && (a
                    .enableVertexAttribArray(
                        c)
                    , z[c] =
                    1
                );
                0 !== v[c] && (b
                    .get(
                        "ANGLE_instanced_arrays"
                    )
                    .vertexAttribDivisorANGLE(
                        c, 0
                    )
                    , v[c] =
                    0
                )
            }
            , enableAttributeAndDivisor: function (
                b, c, d) {
                l[b] = 1;
                0 === z[b] && (a
                    .enableVertexAttribArray(
                        b)
                    , z[b] =
                    1
                );
                v[b] !== c && (d
                    .vertexAttribDivisorANGLE(
                        b, c
                    )
                    , v[b] =
                    c
                )
            }
            , disableUnusedAttributes: function () {
                for (var b =
                        0, c = z
                        .length; b !==
                    c; ++b) z[
                        b] !==
                    l[
                        b] && (a
                        .disableVertexAttribArray(
                            b)
                        , z[b] =
                        0
                    )
            }
            , enable: e
            , disable: f
            , getCompressedTextureFormats: function () {
                if (null ===
                    S && (
                        S = [],
                        b
                        .get(
                            "WEBGL_compressed_texture_pvrtc"
                        ) ||
                        b.get(
                            "WEBGL_compressed_texture_s3tc"
                        ) ||
                        b.get(
                            "WEBGL_compressed_texture_etc1"
                        )))
                    for (var c =
                            a
                            .getParameter(
                                a
                                .COMPRESSED_TEXTURE_FORMATS
                            )
                            , d =
                            0; d <
                        c
                        .length; d++
                    ) S
                        .push(c[
                            d
                            ]);
                return S
            }
            , setBlending: g
            , setColorWrite: function (
                a) {
                r.setMask(a)
            }
            , setDepthTest: function (
                a) {
                p.setTest(a)
            }
            , setDepthWrite: function (
                a) {
                p.setMask(a)
            }
            , setDepthFunc: h
            , setStencilTest: function (
                a) {
                q.setTest(a)
            }
            , setStencilWrite: function (
                a) {
                q.setMask(a)
            }
            , setStencilFunc: function (
                a, b, c) {
                q.setFunc(a, b
                    , c)
            }
            , setStencilOp: function (
                a, b, c) {
                q.setOp(a, b, c)
            }
            , setFlipSided: k
            , setCullFace: n
            , setLineWidth: function (
                b) {
                b !== V && (
                    ha && a
                    .lineWidth(
                        b)
                    , V = b)
            }
            , setPolygonOffset: function (
                b, c, d) {
                if (b) {
                    if (e(a
                            .POLYGON_OFFSET_FILL
                            )
                        , L !==
                        c ||
                        O !== d)
                        a
                        .polygonOffset(
                            c, d
                        )
                        , L = c
                        , O = d
                } else f(a
                    .POLYGON_OFFSET_FILL
                )
            }
            , getScissorTest: function () {
                return D
            }
            , setScissorTest: function (
                b) {
                (D = b) ? e(a
                        .SCISSOR_TEST
                    ):
                    f(a
                        .SCISSOR_TEST
                        )
            }
            , activeTexture: B
            , bindTexture: function (
                b, c) {
                null === T &&
                    B();
                var d = I[T];
                void 0 === d &&
                    (d = {
                            type: void 0
                            , texture: void 0
                        }, I[
                            T] =
                        d);
                if (d.type !==
                    b || d
                    .texture !==
                    c) a
                    .bindTexture(
                        b, c ||
                        Q[b]), d
                    .type = b, d
                    .texture = c
            }
            , compressedTexImage2D: function () {
                try {
                    a.compressedTexImage2D
                        .apply(
                            a
                            , arguments
                        )
                } catch (b) {
                    console
                        .error(
                            b)
                }
            }
            , texImage2D: function () {
                try {
                    a.texImage2D
                        .apply(
                            a
                            , arguments
                        )
                } catch (b) {
                    console
                        .error(
                            b)
                }
            }
            , scissor: function (
            b) {
                !1 === A.equals(
                    b) && (a
                    .scissor(
                        b.x
                        , b
                        .y
                        , b
                        .z
                        , b
                        .w
                    ), A
                    .copy(b)
                )
            }
            , viewport: function (
                b) {
                !1 ===
                    P.equals(
                        b) && (a
                        .viewport(
                            b.x
                            , b
                            .y
                            , b
                            .z
                            , b
                            .w
                        ), P
                        .copy(b)
                    )
            }
            , reset: function () {
                for (var b =
                        0; b < z
                    .length; b++
                ) 1 === z[
                    b] && (a
                    .disableVertexAttribArray(
                        b)
                    , z[b] =
                    0
                );
                y = {};
                T = S = null;
                I = {};
                X = M = t =
                    null;
                r.reset();
                p.reset();
                q.reset()
            }
        }
    }

    function Pc(a, b, c) {
        function d(b) {
            if ("highp" === b) {
                if (0 < a
                    .getShaderPrecisionFormat(
                        a
                        .VERTEX_SHADER
                        , a
                        .HIGH_FLOAT
                    )
                    .precision &&
                    0 < a
                    .getShaderPrecisionFormat(
                        a
                        .FRAGMENT_SHADER
                        , a
                        .HIGH_FLOAT
                    ).precision)
                    return "highp";
                b = "mediump"
            }
            return "mediump" ===
                b && 0 < a
                .getShaderPrecisionFormat(
                    a.VERTEX_SHADER
                    , a.MEDIUM_FLOAT
                    )
                .precision &&
                0 < a
                .getShaderPrecisionFormat(
                    a
                    .FRAGMENT_SHADER
                    , a.MEDIUM_FLOAT
                    )
                .precision ?
                "mediump" : "lowp"
        }
        var e, f = void 0 !== c
            .precision ? c
            .precision : "highp"
            , g = d(f);
        g !== f && (console.warn(
                "THREE.WebGLRenderer:"
                , f
                , "not supported, using"
                , g, "instead."
                )
            , f = g);
        c = !0 === c
            .logarithmicDepthBuffer &&
            !!b.get(
                "EXT_frag_depth");
        var g = a.getParameter(a
                .MAX_TEXTURE_IMAGE_UNITS
            )
            , h = a.getParameter(a
                .MAX_VERTEX_TEXTURE_IMAGE_UNITS
            )
            , k = a.getParameter(a
                .MAX_TEXTURE_SIZE)
            , n = a.getParameter(a
                .MAX_CUBE_MAP_TEXTURE_SIZE
            )
            , B = a.getParameter(a
                .MAX_VERTEX_ATTRIBS
            )
            , r = a.getParameter(a
                .MAX_VERTEX_UNIFORM_VECTORS
            )
            , p = a.getParameter(a
                .MAX_VARYING_VECTORS
            )
            , q = a.getParameter(a
                .MAX_FRAGMENT_UNIFORM_VECTORS
            )
            , m = 0 < h
            , l = !!b.get(
                "OES_texture_float"
            );
        return {
            getMaxAnisotropy: function () {
                if (void 0 !==
                    e) return e;
                var c = b.get(
                    "EXT_texture_filter_anisotropic"
                );
                return e =
                    null !== c ?
                    a
                    .getParameter(
                        c
                        .MAX_TEXTURE_MAX_ANISOTROPY_EXT
                    ) : 0
            }
            , getMaxPrecision: d
            , precision: f
            , logarithmicDepthBuffer: c
            , maxTextures: g
            , maxVertexTextures: h
            , maxTextureSize: k
            , maxCubemapSize: n
            , maxAttributes: B
            , maxVertexUniforms: r
            , maxVaryings: p
            , maxFragmentUniforms: q
            , vertexTextures: m
            , floatFragmentTextures: l
            , floatVertexTextures: m &&
                l
        }
    }

    function Qc(a) {
        var b = {};
        return {
            get: function (c) {
                if (void 0 !==
                    b[c])
                    return b[c];
                var d;
                switch (c) {
                case "WEBGL_depth_texture":
                    d = a
                        .getExtension(
                            "WEBGL_depth_texture"
                        ) ||
                        a
                        .getExtension(
                            "MOZ_WEBGL_depth_texture"
                        ) ||
                        a
                        .getExtension(
                            "WEBKIT_WEBGL_depth_texture"
                        );
                    break;
                case "EXT_texture_filter_anisotropic":
                    d = a
                        .getExtension(
                            "EXT_texture_filter_anisotropic"
                        ) ||
                        a
                        .getExtension(
                            "MOZ_EXT_texture_filter_anisotropic"
                        ) ||
                        a
                        .getExtension(
                            "WEBKIT_EXT_texture_filter_anisotropic"
                        );
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    d = a
                        .getExtension(
                            "WEBGL_compressed_texture_s3tc"
                        ) ||
                        a
                        .getExtension(
                            "MOZ_WEBGL_compressed_texture_s3tc"
                        ) ||
                        a
                        .getExtension(
                            "WEBKIT_WEBGL_compressed_texture_s3tc"
                        );
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    d = a
                        .getExtension(
                            "WEBGL_compressed_texture_pvrtc"
                        ) ||
                        a
                        .getExtension(
                            "WEBKIT_WEBGL_compressed_texture_pvrtc"
                        );
                    break;
                case "WEBGL_compressed_texture_etc1":
                    d = a
                        .getExtension(
                            "WEBGL_compressed_texture_etc1"
                        );
                    break;
                default:
                    d = a
                        .getExtension(
                            c
                        )
                }
                null === d &&
                    console
                    .warn(
                        "THREE.WebGLRenderer: " +
                        c +
                        " extension not supported."
                    );
                return b[c] = d
            }
        }
    }

    function Rc() {
        function a() {
            n.value !== d && (n
                .value = d, n
                .needsUpdate =
                0 < e);
            c.numPlanes = e;
            c.numIntersection = 0
        }

        function b(a, b, d, e) {
            var f = null !== a ? a
                .length : 0
                , g = null;
            if (0 !== f) {
                g = n.value;
                if (!0 !== e ||
                    null === g) {
                    e = d + 4 * f;
                    b = b
                        .matrixWorldInverse;
                    k.getNormalMatrix(
                        b);
                    if (null ===
                        g || g
                        .length < e)
                        g =
                        new Float32Array(
                            e);
                    for (e =
                        0; e !==
                        f; ++e, d +=
                        4) h.copy(a[
                            e])
                        .applyMatrix4(
                            b, k), h
                        .normal
                        .toArray(g
                            , d), g[
                            d +
                            3] = h
                        .constant
                }
                n.value = g;
                n.needsUpdate = !0
            }
            c.numPlanes = f;
            return g
        }
        var c = this
            , d = null
            , e = 0
            , f = !1
            , g = !1
            , h = new ja
            , k = new pa
            , n = {
                value: null
                , needsUpdate: !1
            };
        this.uniform = n;
        this.numIntersection = this
            .numPlanes = 0;
        this.init = function (a, c
            , g) {
            var h = 0 !== a
                .length || c ||
                0 !== e || f;
            f = c;
            d = b(a, g, 0);
            e = a.length;
            return h
        };
        this.beginShadows =
            function () {
                g = !0;
                b(null)
            };
        this.endShadows =
            function () {
                g = !1;
                a()
            };
        this.setState = function (c
            , h, k, m, l, w) {
            if (!f || null ===
                c || 0 === c
                .length || g &&
                !k) g ? b(
                null) : a();
            else {
                k = g ? 0 : e;
                var z = 4 * k
                    , v = l
                    .clippingState ||
                    null;
                n.value = v;
                v = b(c, m, z
                    , w);
                for (c =
                    0; c !==
                    z; ++c) v[
                    c] = d[
                    c];
                l.clippingState =
                    v;
                this.numIntersection =
                    h ? this
                    .numPlanes :
                    0;
                this.numPlanes +=
                    k
            }
        }
    }

    function Aa() {
        Y.call(this);
        this.type = "Scene";

        this.overrideMaterial = this
            .fog = this.background =
            null;
        this.autoUpdate = !0
    }

    function Va(a, b, c, d, e, f, g
        , h, k) {
        function n() {
            requestAnimationFrame(
                n);
            a.readyState >= a
                .HAVE_CURRENT_DATA &&
                (m.needsUpdate = !0)
        }
        ga.call(this, a, b, c, d, e
            , f, g, h, k);
        this.generateMipmaps = !1;
        var m = this;
        n()
    }

    function Rb(a) {
        this.manager = void 0 !==
            a ? a : Sb
    }

    function Tb(a) {
        this.manager =
            void 0 !== a ? a : Sb
    }

    function vb(a, b, c, d) {
        this.ray = new Pa(a, b);
        this.near = c || 0;
        this.far = d || Infinity;
        this.params = {
            Mesh: {}
            , Line: {}
            , LOD: {}
            , Points: {
                threshold: 1
            }
            , Sprite: {}
        };
        Object.defineProperties(this
            .params, {
                PointCloud: {
                    get: function () {
                        console
                            .warn(
                                "THREE.Raycaster: params.PointCloud has been renamed to params.Points."
                            );
                        return this
                            .Points
                    }
                }
            })
    }

    function Ub(a, b) {
        return a.distance - b
            .distance
    }

    function wb(a, b, c, d) {
        if (!1 !== a.visible && (a
                .raycast(b, c), !
                0 === d)) {
            a = a.children;
            d = 0;
            for (var e = a
                    .length; d <
                e; d++)
                wb(a[d], b, c
                    , !0)
        }
    }

    function Wa(a, b, c, d, e) {
        la.call(this);
        this.type = "TorusGeometry";
        this.parameters = {
            radius: a
            , tube: b
            , radialSegments: c
            , tubularSegments: d
            , arc: e
        };
        this.fromBufferGeometry(
            new db(a, b, c, d
                , e))
    }

    function db(a, b, c, d, e) {
        fa.call(this);
        this.type =
            "TorusBufferGeometry";
        this.parameters = {
            radius: a
            , tube: b
            , radialSegments: c
            , tubularSegments: d
            , arc: e
        };
        a = a || 100;
        b = b || 40;
        c = Math.floor(c) || 8;
        d = Math.floor(d) || 6;
        e = e || 2 * Math.PI;
        var f = []
            , g = []
            , h = []
            , k = []
            , n = new m
            , l = new m
            , r = new m
            , p, q;
        for (p = 0; p <= c; p++)
            for (q = 0; q <=
                d; q++) {
                var x = q / d * e
                    , w =
                    p / c * Math
                    .PI * 2;
                l.x = (a + b * Math
                        .cos(w)) *
                    Math.cos(x);
                l.y = (a + b * Math
                        .cos(w)) *
                    Math.sin(x);
                l.z = b * Math.sin(
                    w);
                g.push(l.x, l.y, l
                    .z);
                n.x = a * Math.cos(
                    x);
                n.y = a * Math.sin(
                    x);
                r.subVectors(l, n)
                    .normalize();
                h.push(r.x, r.y, r
                    .z);
                k.push(q / d);
                k.push(p / c)
            }
        for (p = 1; p <= c; p++)
            for (q = 1; q <= d; q++)
                a = (d + 1) * (p -
                    1) + q - 1, b =
                (d + 1) * (p - 1) +
                q, e = (d + 1) * p +
                q, f.push((d + 1) *
                    p + q - 1, a, e
                ), f.push(a, b
                    , e);
        this.setIndex(f);
        this.addAttribute(
            "position", new Q(g
                , 3));
        this.addAttribute("normal"
            , new Q(h, 3));
        this.addAttribute("uv"
            , new Q(k, 2))
    }

    function eb(a, b, c, d, e
        , f, g) {
        la.call(this);
        this.type =
            "SphereGeometry";
        this.parameters = {
            radius: a
            , widthSegments: b
            , heightSegments: c
            , phiStart: d
            , phiLength: e
            , thetaStart: f
            , thetaLength: g
        };
        this.fromBufferGeometry(
            new fb(a, b, c, d
                , e, f, g))
    }

    function fb(a, b, c, d, e, f
        , g) {
        fa.call(this);
        this.type =
            "SphereBufferGeometry";
        this.parameters = {
            radius: a
            , widthSegments: b
            , heightSegments: c
            , phiStart: d
            , phiLength: e
            , thetaStart: f
            , thetaLength: g
        };
        a = a || 50;
        b = Math.max(3, Math.floor(
            b) || 8);
        c = Math.max(2, Math.floor(
            c) || 6);
        d = void 0 !== d ? d : 0;
        e = void 0 !== e ? e : 2 *
            Math.PI;
        f =
            void 0 !== f ? f : 0;
        g = void 0 !== g ? g : Math
            .PI;
        var h = f + g
            , k, n, l = 0
            , r = []
            , p = new m
            , q = new m
            , x = []
            , w = []
            , z = []
            , v = [];
        for (n = 0; n <= c; n++) {
            var y = []
                , S = n / c;
            for (k = 0; k <=
                b; k++) {
                var t = k / b;
                p.x = -a * Math.cos(
                        d + t * e) *
                    Math.sin(f + S *
                        g);
                p.y = a * Math.cos(
                    f + S * g);
                p.z = a * Math.sin(
                        d + t * e) *
                    Math.sin(f + S *
                        g);
                w.push(p.x, p.y, p
                    .z);
                q.set(p.x, p.y, p.z)
                    .normalize();
                z.push(q.x, q.y, q
                    .z);
                v.push(t, 1 - S);
                y.push(l++)
            }
            r.push(y)
        }
        for (n = 0; n < c; n++)
            for (k = 0; k < b; k++)
                a = r[n][k + 1], d =
                r[n][k], e = r[n +
                    1][k], g = r[n +
                    1][k + 1], (
                    0 !== n || 0 < f
                ) && x.push(a
                    , d, g), (n !==
                    c - 1 || h <
                    Math.PI) && x
                .push(d
                    , e, g);
        this.setIndex(x);
        this.addAttribute(
            "position", new Q(w
                , 3));
        this.addAttribute("normal"
            , new Q(z, 3));
        this.addAttribute("uv"
            , new Q(v, 2))
    }

    function gb(a, b, c, d) {
        la.call(this);
        this.type =
            "CircleGeometry";
        this.parameters = {
            radius: a
            , segments: b
            , thetaStart: c
            , thetaLength: d
        };
        this.fromBufferGeometry(
            new hb(a, b, c, d))
    }

    function hb(a, b, c, d) {
        fa.call(this);
        this.type =
            "CircleBufferGeometry";
        this.parameters = {
            radius: a
            , segments: b
            , thetaStart: c
            , thetaLength: d
        };
        a = a || 50;
        b = void 0 !== b ? Math.max(
            3, b) : 8;
        c = void 0 !== c ? c : 0;
        d = void 0 !==
            d ? d : 2 * Math.PI;
        var e = []
            , f = []
            , g = []
            , h = []
            , k, n, l = new m
            , r = new A;
        f.push(0, 0, 0);
        g.push(0, 0, 1);
        h.push(.5, .5);
        n = 0;
        for (k = 3; n <= b; n++
            , k += 3) {
            var p = c + n / b * d;
            l.x = a * Math.cos(p);
            l.y = a * Math.sin(p);
            f.push(l.x, l.y, l.z);
            g.push(0, 0, 1);
            r.x = (f[k] / a + 1) /
                2;
            r.y = (f[k + 1] / a +
                1) / 2;
            h.push(r.x, r.y)
        }
        for (k = 1; k <= b; k++) e
            .push(k, k + 1, 0);
        this.setIndex(e);
        this.addAttribute(
            "position", new Q(f
                , 3));
        this.addAttribute("normal"
            , new Q(g, 3));
        this.addAttribute("uv"
            , new Q(h, 2))
    }

    function ib(a, b, c, d, e, f) {
        la.call(this);
        this.type = "RingGeometry";
        this.parameters = {
            innerRadius: a
            , outerRadius: b
            , thetaSegments: c
            , phiSegments: d
            , thetaStart: e
            , thetaLength: f
        };
        this.fromBufferGeometry(
            new jb(a, b, c, d
                , e, f))
    }

    function jb(a, b, c, d, e, f) {
        fa.call(this);
        this.type =
            "RingBufferGeometry";
        this.parameters = {
            innerRadius: a
            , outerRadius: b
            , thetaSegments: c
            , phiSegments: d
            , thetaStart: e
            , thetaLength: f
        };
        a = a || 20;
        b = b || 50;
        e = void 0 !== e ? e : 0;
        f = void 0 !== f ? f : 2 *
            Math.PI;
        c = void 0 !== c ? Math.max(
            3, c) : 8;
        d = void 0 !== d ? Math.max(
            1, d) : 1;
        var g = []
            , h = []
            , k = []
            , n = []
            , l = a
            , r = (b - a) / d
            , p = new m
            , q = new A
            , x, w;
        for (x = 0; x <= d; x++) {
            for (w =
                0; w <= c; w++) a =
                e + w / c * f, p.x =
                l * Math.cos(a), p
                .y = l * Math.sin(
                    a), h.push(p.x,
                    p.y
                    , p.z), k.push(
                    0
                    , 0, 1), q.x = (
                    p
                    .x / b + 1) / 2
                , q.y = (p.y / b +
                    1) / 2, n.push(q
                    .x
                    , q.y);
            l += r
        }
        for (x = 0; x < d; x++)
            for (b = x * (c + 1)
                , w = 0; w < c; w++)
                a = w + b, e = a +
                c + 1, f = a + c +
                2, l = a + 1, g
                .push(a, e, l), g
                .push(e, f, l);
        this.setIndex(g);
        this.addAttribute(
            "position", new Q(h
                , 3));
        this.addAttribute("normal"
            , new Q(k, 3));
        this.addAttribute("uv"
            , new Q(n, 2))
    }
    void 0 === Number.EPSILON && (
        Number.EPSILON = Math
        .pow(2, -52));
    void 0 === Math.sign && (Math
        .sign = function (a) {
            return 0 > a ? -1 :
                0 < a ? 1 : +a
        });
    void 0 ===
        Function.prototype.name &&
        Object.defineProperty(
            Function.prototype
            , "name", {
                get: function () {
                    return this
                        .toString()
                        .match(
                            /^\s*function\s*([^\(\s]*)/
                        )[1]
                }
            });
    void 0 === Object.assign &&
        function () {
            Object.assign =
                function (a) {
                    if (void 0 ===
                        a ||
                        null === a)
                        throw new TypeError(
                            "Cannot convert undefined or null to object"
                        );
                    for (var b =
                            Object(
                                a)
                            , c =
                            1; c <
                        arguments
                        .length; c++
                    ) {
                        var d =
                            arguments[
                                c];
                        if (void 0 !==
                            d &&
                            null !==
                            d)
                            for (var e in
                                    d)
                                Object
                                .prototype
                                .hasOwnProperty
                                .call(
                                    d
                                    , e
                                ) &&
                                (b[e] =
                                    d[
                                        e
                                        ]
                                )
                    }
                    return b
                }
        }();
    var P = {
        DEG2RAD: Math.PI /
            180
        , RAD2DEG: 180 / Math
            .PI
        , generateUUID: function () {
            var a =
                "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                .split("")
                , b = Array(
                    36)
                , c = 0
                , d;
            return function () {
                for (var e =
                        0; 36 >
                    e; e++
                )
                    8 ===
                    e ||
                    13 ===
                    e ||
                    18 ===
                    e ||
                    23 ===
                    e ?
                    b[
                        e
                        ] =
                    "-" :
                    14 ===
                    e ?
                    b[
                        e
                        ] =
                    "4" :
                    (2 >=
                        c &&
                        (c = 33554432 +
                            16777216 *
                            Math
                            .random() |
                            0
                        )
                        , d =
                        c &
                        15
                        , c >>=
                        4
                        , b[
                            e
                            ] =
                        a[19 ===
                            e ?
                            d &
                            3 |
                            8 :
                            d
                        ]
                    );
                return b
                    .join(
                        ""
                    )
            }
        }()
        , clamp: function (a, b
            , c) {
            return Math.max(
                b, Math
                .min(c
                    , a)
                )
        }
        , euclideanModulo: function (
            a, b) {
            return (a % b +
                b) % b
        }
        , mapLinear: function (
            a
            , b, c, d, e) {
            return d + (a -
                    b) * (
                    e - d) /
                (c -
                    b)
        }
        , lerp: function (a, b
            , c) {
            return (1 - c) *
                a + c * b
        }
        , smoothstep: function (
            a, b, c) {
            if (a <= b)
                return 0;
            if (a >= c)
                return 1;
            a = (a - b) / (
                c - b);
            return a * a * (
                3 - 2 *
                a)
        }
        , smootherstep: function (
            a, b, c) {
            if (a <= b)
                return 0;
            if (a >= c)
                return 1;
            a = (a - b) / (
                c - b);
            return a * a *
                a * (a * (
                        6 *
                        a -
                        15
                    ) +
                    10)
        }
        , randInt: function (a
            , b) {
            return a + Math
                .floor(Math
                    .random() *
                    (b - a +
                        1))
        }
        , randFloat: function (
            a
            , b) {
            return a + Math
                .random() *
                (b - a)
        }
        , randFloatSpread: function (
            a) {
            return a * (.5 -
                Math
                .random()
            )
        }
        , degToRad: function (
            a) {
            return a * P
                .DEG2RAD
        }
        , radToDeg: function (
            a) {
            return a * P
                .RAD2DEG
        }
        , isPowerOfTwo: function (
            a) {
            return 0 === (
                    a & a -
                    1) &&
                0 !== a
        }
        , nearestPowerOfTwo: function (
            a) {
            return Math.pow(
                2, Math
                .round(
                    Math
                    .log(
                        a
                    ) /
                    Math
                    .LN2
                ))
        }
        , nextPowerOfTwo: function (
            a) {
            a--;
            a |= a >> 1;
            a |= a >> 2;
            a |= a >> 4;
            a |= a >> 8;
            a |= a >> 16;
            a++;
            return a
        }
    };
    aa.prototype = {
        constructor: aa
        , get x() {
            return this._x
        }
        , set x(a) {
            this._x = a;
            this.onChangeCallback()
        }
        , get y() {
            return this._y
        }
        , set y(a) {
            this._y = a;
            this.onChangeCallback()
        }
        , get z() {
            return this._z
        }
        , set z(a) {
            this._z = a;
            this.onChangeCallback()
        }
        , get w() {
            return this._w
        }
        , set w(a) {
            this._w = a;
            this.onChangeCallback()
        }
        , set: function (a, b,
            c
            , d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._w = d;
            this
                .onChangeCallback();
            return this
        }
        , clone: function () {
            return new this
                .constructor(
                    this._x
                    , this
                    ._y
                    , this
                    ._z
                    , this
                    ._w)
        }
        , copy: function (a) {
            this._x = a.x;
            this._y = a.y;
            this._z = a.z;
            this._w = a.w;
            this
                .onChangeCallback();
            return this
        }
        , setFromEuler: function (
            a, b) {
            if (!1 === (a &&
                    a
                    .isEuler
                ))
                throw Error(
                    "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
                );
            var c = Math
                .cos(a._x /
                    2)
                , d = Math
                .cos(a._y /
                    2)
                , e = Math
                .cos(a._z /
                    2)
                , f = Math
                .sin(a._x /
                    2)
                , g = Math
                .sin(a._y /
                    2)
                , h = Math
                .sin(a._z /
                    2)
                , k = a
                .order;
            "XYZ" === k ? (
                    this
                    ._x =
                    f * d *
                    e + c *
                    g * h
                    , this
                    ._y =
                    c * g *
                    e - f *
                    d * h
                    , this
                    ._z =
                    c * d *
                    h + f *
                    g * e
                    , this
                    ._w =
                    c * d *
                    e - f *
                    g * h) :
                "YXZ" ===
                k ? (this
                    ._x =
                    f * d *
                    e + c *
                    g * h
                    , this
                    ._y =
                    c * g *
                    e - f *
                    d * h
                    , this
                    ._z =
                    c * d *
                    h - f *
                    g * e
                    , this
                    ._w =
                    c * d *
                    e + f *
                    g * h) :
                "ZXY" ===
                k ? (this
                    ._x =
                    f * d *
                    e - c *
                    g * h
                    , this
                    ._y =
                    c * g *
                    e + f *
                    d * h
                    , this
                    ._z =
                    c * d *
                    h + f *
                    g * e
                    , this
                    ._w =
                    c * d *
                    e - f *
                    g * h) :
                "ZYX" ===
                k ? (this
                    ._x =
                    f * d *
                    e - c *
                    g * h
                    , this
                    ._y =
                    c * g *
                    e + f *
                    d * h
                    , this
                    ._z =
                    c * d *
                    h - f *
                    g * e
                    , this
                    ._w =
                    c * d *
                    e + f *
                    g * h) :
                "YZX" ===
                k ? (this
                    ._x =
                    f * d *
                    e + c *
                    g * h
                    , this
                    ._y =
                    c * g *
                    e + f *
                    d * h
                    , this
                    ._z =
                    c * d *
                    h - f *
                    g * e
                    , this
                    ._w =
                    c * d *
                    e - f *
                    g * h) :
                "XZY" ===
                k && (this
                    ._x =
                    f * d *
                    e - c *
                    g * h
                    , this
                    ._y =
                    c * g *
                    e - f *
                    d * h
                    , this
                    ._z =
                    c * d *
                    h + f *
                    g * e
                    , this
                    ._w =
                    c * d *
                    e + f *
                    g * h);
            if (!1 !== b)
                this
                .onChangeCallback();
            return this
        }
        , setFromAxisAngle: function (
            a, b) {
            var c = b / 2
                , d = Math
                .sin(c);
            this._x = a.x *
                d;
            this._y = a.y *
                d;
            this._z = a.z *
                d;
            this._w = Math
                .cos(c);
            this
                .onChangeCallback();
            return this
        }
        , setFromRotationMatrix: function (
            a) {
            var b = a
                .elements
                , c = b[0];
            a = b[4];
            var d = b[8]
                , e = b[1]
                , f = b[5]
                , g = b[9]
                , h = b[2]
                , k = b[6]
                , b = b[10]
                , n = c +
                f + b;
            0 < n ? (c =
                    .5 /
                    Math
                    .sqrt(
                        n +
                        1)
                    , this
                    ._w =
                    .25 / c
                    , this
                    ._x = (
                        k -
                        g) *
                    c
                    , this
                    ._y = (
                        d -
                        h) *
                    c, this
                    ._z = (
                        e -
                        a) *
                    c) : c >
                f && c > b ?
                (c = 2 *
                    Math
                    .sqrt(
                        1 +
                        c -
                        f -
                        b)
                    , this
                    ._w = (
                        k -
                        g) /
                    c, this
                    ._x =
                    .25 * c
                    , this
                    ._y = (
                        a +
                        e) /
                    c, this
                    ._z = (
                        d +
                        h) /
                    c) : f >
                b ? (c = 2 *
                    Math
                    .sqrt(
                        1 +
                        f -
                        c -
                        b)
                    , this
                    ._w = (
                        d -
                        h) /
                    c, this
                    ._x = (
                        a +
                        e) /
                    c, this
                    ._y =
                    .25 * c
                    , this
                    ._z = (
                        g +
                        k) /
                    c) : (
                    c = 2 *
                    Math
                    .sqrt(
                        1 +
                        b -
                        c -
                        f)
                    , this
                    ._w = (
                        e -
                        a) /
                    c, this
                    ._x = (
                        d +
                        h) /
                    c, this
                    ._y = (
                        g +
                        k) /
                    c, this
                    ._z =
                    .25 * c
                );
            this
                .onChangeCallback();
            return this
        }
        , setFromUnitVectors: function () {
            var a, b;
            return function (
                c, d) {
                void 0
                    ===
                    a &&
                    (a =
                        new m
                        );
                b = c
                    .dot(
                        d
                    ) +
                    1;
                1E-6 >
                    b ?
                    (b = 0
                        , Math
                        .abs(
                            c
                            .x
                        ) >
                        Math
                        .abs(
                            c
                            .z
                        ) ?
                        a
                        .set(
                            -
                            c
                            .y
                            , c
                            .x
                            , 0
                        ) :
                        a
                        .set(
                            0
                            , -
                            c
                            .z
                            , c
                            .y
                        )
                    ) :
                    a
                    .crossVectors(
                        c
                        , d
                    );
                this._x =
                    a.x;
                this._y =
                    a.y;
                this._z =
                    a.z;
                this._w =
                    b;
                return this
                    .normalize()
            }
        }()
        , inverse: function () {
            return this
                .conjugate()
                .normalize()
        }
        , conjugate: function () {
            this._x *= -1;
            this._y *= -1;
            this._z *= -1;
            this
                .onChangeCallback();
            return this
        }
        , dot: function (a) {
            return this._x *
                a._x + this
                ._y * a._y +
                this._z * a
                ._z + this
                ._w * a._w
        }
        , lengthSq: function () {
            return this._x *
                this._x +
                this._y *
                this._y +
                this._z *
                this._z +
                this._w *
                this._w
        }
        , length: function () {
            return Math
                .sqrt(this
                    ._x *
                    this
                    ._x +
                    this
                    ._y *
                    this
                    ._y +
                    this
                    ._z *
                    this
                    ._z +
                    this
                    ._w *
                    this._w)
        }
        , normalize: function () {
            var a = this
                .length();
            0 === a ? (this
                ._z =
                this
                ._y =
                this
                ._x = 0
                , this
                ._w = 1
            ) : (a =
                1 / a
                , this
                ._x *=
                a, this
                ._y *=
                a, this
                ._z *=
                a, this
                ._w *= a
            );
            this
                .onChangeCallback();
            return this
        }
        , multiply: function (a
            , b) {
            return void 0 !==
                b ? (console
                    .warn(
                        "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
                    )
                    , this
                    .multiplyQuaternions(
                        a, b
                    )) :
                this
                .multiplyQuaternions(
                    this, a)
        }
        , premultiply: function (
            a) {
            return this
                .multiplyQuaternions(
                    a, this)
        }
        , multiplyQuaternions: function (
            a
            , b) {
            var c = a._x
                , d = a._y
                , e = a._z
                , f = a._w
                , g = b._x
                , h = b._y
                , k = b._z
                , n = b._w;
            this._x = c *
                n + f * g +
                d * k - e *
                h;
            this._y = d *
                n + f * h +
                e * g - c *
                k;
            this._z = e *
                n + f * k +
                c * h - d *
                g;
            this._w = f *
                n - c * g -
                d * h - e *
                k;
            this
                .onChangeCallback();
            return this
        }
        , slerp: function (a
            , b) {
            if (0 === b)
                return this;
            if (1 === b)
                return this
                    .copy(
                        a);
            var c = this._x
                , d = this
                ._y
                , e = this
                ._z
                , f = this
                ._w
                , g = f * a
                ._w + c * a
                ._x + d * a
                ._y + e * a
                ._z;
            0 > g ? (this
                    ._w = -a
                    ._w
                    , this
                    ._x = -a
                    ._x
                    , this
                    ._y = -a
                    ._y
                    , this
                    ._z = -a
                    ._z
                    , g = -g
                ) : this
                .copy(a);
            if (1 <= g)
                return this
                    ._w = f
                    , this
                    ._x = c
                    , this
                    ._y = d
                    , this
                    ._z = e
                    , this;
            var h = Math
                .sqrt(1 -
                    g * g);
            if (.001 > Math
                .abs(h))
                return this
                    ._w =
                    .5 * (
                        f +
                        this
                        ._w
                    )
                    , this
                    ._x =
                    .5 * (
                        c +
                        this
                        ._x
                    )
                    , this
                    ._y =
                    .5 * (
                        d +
                        this
                        ._y
                    )
                    , this
                    ._z =
                    .5 * (
                        e +
                        this
                        ._z
                    )
                    , this;
            var k = Math
                .atan2(h
                    , g)
                , g = Math
                .sin((1 -
                        b) *
                    k
                ) / h
                , h = Math
                .sin(b *
                    k) / h;
            this._w = f *
                g + this
                ._w * h;
            this._x = c *
                g + this
                ._x * h;
            this._y = d *
                g + this
                ._y * h;
            this._z = e *
                g + this
                ._z * h;
            this
                .onChangeCallback();
            return this
        }
        , equals: function (a) {
            return a._x ===
                this._x && a
                ._y === this
                ._y && a
                ._z === this
                ._z && a
                ._w === this
                ._w
        }
        , fromArray: function (
            a
            , b) {
            void 0 === b &&
                (b = 0);
            this._x = a[b];
            this._y = a[b +
                1];
            this._z = a[b +
                2];
            this._w = a[b +
                3];
            this
                .onChangeCallback();
            return this
        }
        , toArray: function (a
            , b) {
            void 0 === a &&
                (a = []);
            void 0 === b &&
                (b = 0);
            a[b] = this._x;
            a[b + 1] = this
                ._y;
            a[b + 2] = this
                ._z;
            a[b + 3] = this
                ._w;
            return a
        }
        , onChange: function (
            a) {
            this.onChangeCallback =
                a;
            return this
        }
        , onChangeCallback: function () {}
    };
    Object.assign(aa, {
        slerp: function (a
            , b, c, d) {
            return c
                .copy(a)
                .slerp(
                    b, d
                )
        }
        , slerpFlat: function (
            a, b, c, d
            , e, f, g) {
            var h = c[
                    d +
                    0]
                , k = c[
                    d +
                    1]
                , n = c[
                    d +
                    2];
            c = c[d +
                3];
            d = e[f +
                0];
            var l = e[
                    f +
                    1]
                , r = e[
                    f +
                    2];
            e = e[f +
                3];
            if (c !==
                e ||
                h !==
                d ||
                k !==
                l ||
                n !== r
            ) {
                f = 1 -
                    g;
                var p =
                    h *
                    d +
                    k *
                    l +
                    n *
                    r +
                    c *
                    e
                    , m =
                    0 <=
                    p ?
                    1 :
                    -1
                    , x =
                    1 -
                    p *
                    p;
                x > Number
                    .EPSILON &&
                    (x = Math
                        .sqrt(
                            x
                        )
                        , p =
                        Math
                        .atan2(
                            x
                            , p *
                            m
                        )
                        , f =
                        Math
                        .sin(
                            f *
                            p
                        ) /
                        x
                        , g =
                        Math
                        .sin(
                            g *
                            p
                        ) /
                        x
                    );
                m *= g;
                h = h *
                    f +
                    d *
                    m;
                k = k *
                    f +
                    l *
                    m;
                n = n *
                    f +
                    r *
                    m;
                c = c *
                    f +
                    e *
                    m;
                f ===
                    1 -
                    g &&
                    (g = 1 /
                        Math
                        .sqrt(
                            h *
                            h +
                            k *
                            k +
                            n *
                            n +
                            c *
                            c
                        )
                        , h *=
                        g
                        , k *=
                        g
                        , n *=
                        g
                        , c *=
                        g
                    )
            }
            a[b] = h;
            a[b + 1] =
                k;
            a[b + 2] =
                n;
            a[b + 3] = c
        }
    });
    m.prototype = {
        constructor: m
        , isVector3: !0
        , set: function (a, b
            , c) {
            this.x = a;
            this.y = b;
            this.z = c;
            return this
        }
        , setScalar: function (
            a) {
            this.z = this
                .y = this
                .x = a;
            return this
        }
        , setX: function (a) {
            this.x = a;
            return this
        }
        , setY: function (a) {
            this.y = a;
            return this
        }
        , setZ: function (a) {
            this.z =
                a;
            return this
        }
        , setComponent: function (
            a, b) {
            switch (a) {
            case 0:
                this.x =
                    b;
                break;
            case 1:
                this.y =
                    b;
                break;
            case 2:
                this.z =
                    b;
                break;
            default:
                throw Error(
                    "index is out of range: " +
                    a
                );
            }
            return this
        }
        , getComponent: function (
            a) {
            switch (a) {
            case 0:
                return this
                    .x;
            case 1:
                return this
                    .y;
            case 2:
                return this
                    .z;
            default:
                throw Error(
                    "index is out of range: " +
                    a
                );
            }
        }
        , clone: function () {
            return new this
                .constructor(
                    this.x
                    , this
                    .y
                    , this.z
                    )
        }
        , copy: function (a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            return this
        }
        , add: function (a, b) {
            if (void 0 !==
                b) return console
                .warn(
                    "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
                )
                , this
                .addVectors(
                    a, b
                );
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            return this
        }
        , addScalar: function (
            a) {
            this.x += a;
            this.y += a;
            this.z += a;
            return this
        }
        , addVectors: function (
            a, b) {
            this.x = a.x + b
                .x;
            this.y = a.y + b
                .y;
            this.z = a.z + b
                .z;
            return this
        }
        , addScaledVector: function (
            a, b) {
            this.x += a.x *
                b;
            this.y += a.y *
                b;
            this.z += a.z *
                b;
            return this
        }
        , sub: function (a, b) {
            if (void 0 !==
                b) return console
                .warn(
                    "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
                )
                , this
                .subVectors(
                    a, b
                );
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            return this
        }
        , subScalar: function (
            a) {
            this.x -= a;
            this.y -= a;
            this.z -= a;
            return this
        }
        , subVectors: function (
            a, b) {
            this.x = a.x - b
                .x;
            this.y = a.y - b
                .y;
            this.z = a.z - b
                .z;
            return this
        }
        , multiply: function (a
            , b) {
            if (void 0 !==
                b) return console
                .warn(
                    "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
                )
                , this
                .multiplyVectors(
                    a, b
                );
            this.x *= a.x;
            this.y *= a.y;
            this.z *= a.z;
            return this
        }
        , multiplyScalar: function (
            a) {
            isFinite(a) ? (
                    this
                    .x *= a
                    , this
                    .y *= a
                    , this
                    .z *= a
                ) : this
                .z = this
                .y = this
                .x = 0;
            return this
        }
        , multiplyVectors: function (
            a
            , b) {
            this.x = a.x * b
                .x;
            this.y = a.y * b
                .y;
            this.z = a.z * b
                .z;
            return this
        }
        , applyEuler: function () {
            var a;
            return function (
                b) {
                !1 === (b &&
                        b
                        .isEuler
                    ) &&
                    console
                    .error(
                        "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
                    );
                void 0
                    ===
                    a &&
                    (a =
                        new aa
                        );
                return this
                    .applyQuaternion(
                        a
                        .setFromEuler(
                            b
                        )
                    )
            }
        }()
        , applyAxisAngle: function () {
            var a;
            return function (
                b, c) {
                void 0
                    ===
                    a &&
                    (a =
                        new aa
                        );
                return this
                    .applyQuaternion(
                        a
                        .setFromAxisAngle(
                            b
                            , c
                        )
                    )
            }
        }()
        , applyMatrix3: function (
            a) {
            var b = this.x
                , c = this
                .y
                , d = this
                .z;
            a = a.elements;
            this.x = a[0] *
                b + a[3] *
                c + a[6] *
                d;
            this.y = a[1] *
                b + a[4] *
                c + a[7] *
                d;
            this.z = a[2] *
                b + a[5] *
                c + a[8] *
                d;
            return this
        }
        , applyMatrix4: function (
            a) {
            var b = this.x
                , c = this
                .y
                , d = this
                .z;
            a = a.elements;
            this.x = a[0] *
                b + a[4] *
                c + a[8] *
                d + a[12];
            this.y = a[1] *
                b + a[5] *
                c + a[9] *
                d + a[13];
            this.z = a[2] *
                b + a[6] *
                c + a[10] *
                d + a[14];
            return this
                .divideScalar(
                    a[3] *
                    b + a[
                        7] *
                    c +
                    a[11] *
                    d + a[
                        15])
        }
        , applyQuaternion: function (
            a) {
            var b = this.x
                , c = this
                .y
                , d = this
                .z
                , e = a.x
                , f = a.y
                , g = a.z;
            a = a.w;
            var h = a * b +
                f * d - g *
                c
                , k = a *
                c + g * b -
                e * d
                , n = a *
                d + e * c -
                f * b
                , b = -e *
                b - f * c -
                g * d;
            this.x = h * a +
                b * -e + k *
                -g -
                n * -f;
            this.y = k * a +
                b * -f + n *
                -e - h * -g;
            this.z = n * a +
                b * -g + h *
                -f - k * -e;
            return this
        }
        , project: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.multiplyMatrices(
                    b
                    .projectionMatrix
                    , a
                    .getInverse(
                        b
                        .matrixWorld
                    )
                );
                return this
                    .applyMatrix4(
                        a
                    )
            }
        }()
        , unproject: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.multiplyMatrices(
                    b
                    .matrixWorld
                    , a
                    .getInverse(
                        b
                        .projectionMatrix
                    )
                );
                return this
                    .applyMatrix4(
                        a
                    )
            }
        }()
        , transformDirection: function (
            a) {
            var b = this.x
                , c = this
                .y
                , d = this
                .z;
            a = a.elements;
            this.x = a[0] *
                b + a[4] *
                c + a[8] *
                d;
            this.y = a[1] *
                b + a[5] *
                c + a[9] *
                d;
            this.z = a[2] *
                b + a[6] *
                c + a[10] *
                d;
            return this
                .normalize()
        }
        , divide: function (a) {
            this.x /= a.x;
            this.y /= a.y;
            this.z /= a.z;
            return this
        }
        , divideScalar: function (
            a) {
            return this
                .multiplyScalar(
                    1 / a)
        }
        , min: function (a) {
            this.x = Math
                .min(this.x
                    , a.x);
            this.y = Math
                .min(this.y
                    , a.y);
            this.z = Math
                .min(this.z
                    , a.z);
            return this
        }
        , max: function (a) {
            this.x = Math
                .max(this.x
                    , a.x);
            this.y = Math
                .max(this.y
                    , a.y);
            this.z = Math
                .max(this.z
                    , a.z);
            return this
        }
        , clamp: function (a
            , b) {
            this.x = Math
                .max(a.x
                    , Math
                    .min(b
                        .x
                        , this
                        .x)
                );
            this.y =
                Math.max(a
                    .y, Math
                    .min(b
                        .y
                        , this
                        .y)
                );
            this.z = Math
                .max(a.z
                    , Math
                    .min(b
                        .z
                        , this
                        .z)
                );
            return this
        }
        , clampScalar: function () {
            var a, b;
            return function (
                c, d) {
                void 0
                    ===
                    a &&
                    (a = new m
                        , b =
                        new m
                    );
                a.set(c, c
                    , c
                );
                b.set(d, d
                    , d
                );
                return this
                    .clamp(
                        a
                        , b
                    )
            }
        }()
        , clampLength: function (
            a, b) {
            var c = this
                .length();
            return this
                .multiplyScalar(
                    Math
                    .max(a
                        , Math
                        .min(
                            b
                            , c
                        )
                    ) /
                    c)
        }
        , floor: function () {
            this.x = Math
                .floor(this
                    .x);
            this.y = Math
                .floor(this
                    .y);
            this.z = Math
                .floor(this
                    .z);
            return this
        }
        , ceil: function () {
            this.x = Math
                .ceil(this
                    .x);
            this.y = Math
                .ceil(this
                    .y);
            this.z = Math
                .ceil(this
                    .z);
            return this
        }
        , round: function () {
            this.x = Math
                .round(this
                    .x);
            this.y = Math
                .round(this
                    .y);
            this.z = Math
                .round(this
                    .z);
            return this
        }
        , roundToZero: function () {
            this.x = 0 >
                this.x ?
                Math.ceil(
                    this.x
                ) : Math
                .floor(this
                    .x);
            this.y = 0 >
                this.y ?
                Math.ceil(
                    this.y
                ) : Math
                .floor(this
                    .y);
            this.z = 0 >
                this.z ?
                Math.ceil(
                    this.z
                ) : Math
                .floor(this
                    .z);
            return this
        }
        , negate: function () {
            this.x = -this
                .x;
            this.y = -this
                .y;
            this.z = -this
                .z;
            return this
        }
        , dot: function (a) {
            return this.x *
                a.x + this
                .y * a.y +
                this.z * a.z
        }
        , lengthSq: function () {
            return this.x *
                this.x +
                this.y *
                this.y +
                this.z *
                this.z
        }
        , length: function () {
            return Math
                .sqrt(this
                    .x *
                    this.x +
                    this.y *
                    this.y +
                    this.z *
                    this.z)
        }
        , lengthManhattan: function () {
            return Math.abs(
                    this.x
                ) + Math
                .abs(this
                    .y) +
                Math
                .abs(this.z)
        }
        , normalize: function () {
            return this
                .divideScalar(
                    this
                    .length()
                )
        }
        , setLength: function (
            a) {
            return this
                .multiplyScalar(
                    a / this
                    .length()
                )
        }
        , lerp: function (a,
        b) {
            this.x += (a.x -
                this.x
            ) * b;
            this.y += (a.y -
                this.y
            ) * b;
            this.z += (a.z -
                this.z
            ) * b;
            return this
        }
        , lerpVectors: function (
            a, b, c) {
            return this
                .subVectors(
                    b, a)
                .multiplyScalar(
                    c).add(
                    a)
        }
        , cross: function (a
            , b) {
            if (void 0 !==
                b) return console
                .warn(
                    "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
                )
                , this
                .crossVectors(
                    a, b
                );
            var c = this.x
                , d = this
                .y
                , e = this
                .z;
            this.x = d * a
                .z - e * a
                .y;
            this.y = e * a
                .x - c * a
                .z;
            this.z = c * a
                .y - d * a
                .x;
            return this
        }
        , crossVectors: function (
            a, b) {
            var c = a.x
                , d = a.y
                , e = a.z
                , f = b.x
                , g = b.y
                , h = b.z;
            this.x = d * h -
                e * g;
            this.y = e * f -
                c * h;
            this.z = c * g -
                d * f;
            return this
        }
        , projectOnVector: function (
            a) {
            var b = a.dot(
                    this) /
                a
                .lengthSq();
            return this
                .copy(a)
                .multiplyScalar(
                    b)
        }
        , projectOnPlane: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new m
                        );
                a.copy(
                        this
                        )
                    .projectOnVector(
                        b
                    );
                return this
                    .sub(
                        a
                    )
            }
        }()
        , reflect: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new m
                        );
                return this
                    .sub(
                        a
                        .copy(
                            b
                        )
                        .multiplyScalar(
                            2 *
                            this
                            .dot(
                                b
                            )
                        )
                    )
            }
        }()
        , angleTo: function (
        a) {
            a = this.dot(
                    a) /
                Math
                .sqrt(this
                    .lengthSq() *
                    a
                    .lengthSq()
                );
            return Math
                .acos(P
                    .clamp(
                        a, -
                        1, 1
                    ))
        }
        , distanceTo: function (
            a) {
            return Math
                .sqrt(this
                    .distanceToSquared(
                        a))
        }
        , distanceToSquared: function (
            a) {
            var b = this.x -
                a.x
                , c = this
                .y - a.y;
            a = this.z - a
                .z;
            return b * b +
                c * c + a *
                a
        }
        , distanceToManhattan: function (
            a) {
            return Math.abs(
                    this.x -
                    a.x) +
                Math.abs(
                    this.y -
                    a.y) +
                Math.abs(
                    this.z -
                    a.z)
        }
        , setFromSpherical: function (
            a) {
            var b = Math
                .sin(a
                    .phi) *
                a
                .radius;
            this.x = b *
                Math.sin(a
                    .theta);
            this.y = Math
                .cos(a
                    .phi) *
                a
                .radius;
            this.z = b *
                Math.cos(a
                    .theta);
            return this
        }
        , setFromCylindrical: function (
            a) {
            this.x = a
                .radius *
                Math.sin(a
                    .theta);
            this.y = a.y;
            this.z = a
                .radius *
                Math.cos(a
                    .theta);
            return this
        }
        , setFromMatrixPosition: function (
            a) {
            return this
                .setFromMatrixColumn(
                    a, 3)
        }
        , setFromMatrixScale: function (
            a) {
            var b = this
                .setFromMatrixColumn(
                    a, 0)
                .length()
                , c = this
                .setFromMatrixColumn(
                    a
                    , 1)
                .length();
            a = this
                .setFromMatrixColumn(
                    a, 2)
                .length();
            this.x = b;
            this.y = c;
            this.z = a;
            return this
        }
        , setFromMatrixColumn: function (
            a, b) {
            if ("number" ===
                typeof a) {
                console
                    .warn(
                        "THREE.Vector3: setFromMatrixColumn now expects ( matrix, index )."
                    );
                var c = a;
                a = b;
                b = c
            }
            return this
                .fromArray(a
                    .elements
                    , 4 * b)
        }
        , equals: function (a) {
            return a.x ===
                this.x && a
                .y === this
                .y && a
                .z === this
                .z
        }
        , fromArray: function (
            a
            , b) {
            void 0 === b &&
                (b = 0);
            this.x = a[b];
            this.y = a[b +
                1];
            this.z = a[b +
                2];
            return this
        }
        , toArray: function (a
            , b) {
            void 0 === a &&
                (a = []);
            void 0 ===
                b && (b =
                    0);
            a[b] = this.x;
            a[b + 1] = this
                .y;
            a[b + 2] = this
                .z;
            return a
        }
        , fromBufferAttribute: function (
            a, b, c) {
            void 0 !== c &&
                console
                .warn(
                    "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
                );
            this.x = a.getX(
                b);
            this.y = a.getY(
                b);
            this.z = a.getZ(
                b);
            return this
        }
    };
    I.prototype = {
        constructor: I
        , isMatrix4: !0
        , set: function (a, b,
            c
            , d, e, f, g, h
            , k, n, l, m, p
            , q, x, w) {
            var z = this
                .elements;
            z[0] = a;
            z[4] = b;
            z[8] = c;
            z[12] = d;
            z[1] = e;
            z[5] = f;
            z[9] = g;
            z[13] = h;
            z[2] = k;
            z[6] = n;
            z[10] = l;
            z[14] = m;
            z[3] = p;
            z[7] = q;
            z[11] = x;
            z[15] = w;
            return this
        }
        , identity: function () {
            this.set(1
                , 0, 0
                , 0, 0,
                1
                , 0, 0,
                0
                , 0, 1,
                0
                , 0, 0,
                0
                , 1);
            return this
        }
        , clone: function () {
            return (new I)
                .fromArray(
                    this
                    .elements
                )
        }
        , copy: function (a) {
            this.elements
                .set(a
                    .elements
                );
            return this
        }
        , copyPosition: function (
            a) {
            var b = this
                .elements;
            a = a.elements;
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            return this
        }
        , extractBasis: function (
            a, b, c) {
            a.setFromMatrixColumn(
                this, 0);
            b.setFromMatrixColumn(
                this, 1);
            c.setFromMatrixColumn(
                this, 2);
            return this
        }
        , makeBasis: function (
            a
            , b, c) {
            this.set(a.x, b
                .x, c.x
                , 0, a
                .y
                , b.y, c
                .y, 0, a
                .z, b.z
                , c.z,
                0
                , 0, 0,
                0
                , 1);
            return this
        }
        , extractRotation: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new m
                        );
                var c =
                    this
                    .elements
                    , d =
                    b
                    .elements
                    , e =
                    1 /
                    a
                    .setFromMatrixColumn(
                        b
                        , 0
                    )
                    .length()
                    , f =
                    1 /
                    a
                    .setFromMatrixColumn(
                        b
                        , 1
                    )
                    .length();
                b = 1 /
                    a
                    .setFromMatrixColumn(
                        b
                        , 2
                    )
                    .length();
                c[0] =
                    d[
                        0
                        ] *
                    e;
                c[1] =
                    d[
                        1
                        ] *
                    e;
                c[2] =
                    d[
                        2
                        ] *
                    e;
                c[4] =
                    d[
                        4
                        ] *
                    f;
                c[5] =
                    d[
                        5
                        ] *
                    f;
                c[6] =
                    d[
                        6
                        ] *
                    f;
                c[8] =
                    d[
                        8
                        ] *
                    b;
                c[9] =
                    d[
                        9
                        ] *
                    b;
                c[10] =
                    d[
                        10
                        ] *
                    b;
                return this
            }
        }()
        , makeRotationFromEuler: function (
            a) {
            !1 === (a && a
                    .isEuler
                ) &&
                console
                .error(
                    "THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
                );
            var b = this
                .elements
                , c = a.x
                , d = a.y
                , e = a.z
                , f = Math
                .cos(c)
                , c = Math
                .sin(c)
                , g = Math
                .cos(d)
                , d = Math
                .sin(d)
                , h = Math
                .cos(e)
                , e = Math
                .sin(e);
            if ("XYZ" === a
                .order) {
                a = f * h;
                var k = f *
                    e
                    , n =
                    c * h
                    , l =
                    c * e;
                b[0] = g *
                    h;
                b[4] = -g *
                    e;
                b[8] = d;
                b[1] = k +
                    n * d;
                b[5] = a -
                    l * d;
                b[9] = -c *
                    g;
                b[2] = l -
                    a * d;
                b[6] = n +
                    k * d;
                b[10] = f *
                    g
            } else "YXZ" ===
                a.order ? (
                    a = g *
                    h, k =
                    g * e
                    , n =
                    d *
                    h, l =
                    d * e
                    , b[0] =
                    a + l *
                    c, b[
                        4] =
                    n *
                    c - k
                    , b[8] =
                    f * d
                    , b[1] =
                    f * e
                    , b[5] =
                    f * h
                    , b[
                    9] = -
                    c, b[
                        2] =
                    k *
                    c - n
                    , b[6] =
                    l + a *
                    c, b[
                        10
                        ] =
                    f * g) :
                "ZXY" === a
                .order ? (
                    a = g *
                    h, k =
                    g * e
                    , n =
                    d *
                    h, l =
                    d * e
                    , b[0] =
                    a - l *
                    c, b[
                        4
                        ] = -
                    f * e
                    , b[8] =
                    n + k *
                    c, b[
                        1] =
                    k +
                    n * c
                    , b[5] =
                    f * h
                    , b[9] =
                    l - a *
                    c, b[
                        2
                        ] = -
                    f * d
                    , b[6] =
                    c, b[
                        10
                        ] =
                    f * g) :
                "ZYX" === a
                .order ? (
                    a = f *
                    h, k =
                    f * e
                    , n =
                    c *
                    h, l =
                    c * e
                    , b[0] =
                    g * h
                    , b[4] =
                    n * d -
                    k, b[
                        8] =
                    a *
                    d + l
                    , b[1] =
                    g * e
                    , b[5] =
                    l * d +
                    a, b[
                        9] =
                    k *
                    d - n
                    , b[
                    2] = -
                    d, b[
                        6] =
                    c *
                    g, b[
                        10
                        ] =
                    f * g) :
                "YZX" === a
                .order ? (
                    a = f *
                    g, k =
                    f * d
                    , n =
                    c *
                    g, l =
                    c * d
                    , b[0] =
                    g * h
                    , b[4] =
                    l - a *
                    e, b[
                        8] =
                    n *
                    e + k
                    , b[1] =
                    e, b[
                        5] =
                    f *
                    h, b[
                        9
                        ] = -
                    c * h
                    , b[
                    2] = -
                    d * h
                    , b[6] =
                    k * e +
                    n, b[
                        10
                        ] =
                    a - l *
                    e) :
                "XZY" === a
                .order && (
                    a = f *
                    g, k =
                    f * d
                    , n =
                    c *
                    g, l =
                    c * d
                    , b[0] =
                    g * h
                    , b[
                    4] = -
                    e, b[
                        8] =
                    d *
                    h, b[
                        1] =
                    a *
                    e + l
                    , b[5] =
                    f * h
                    , b[9] =
                    k * e -
                    n, b[
                        2] =
                    n *
                    e - k
                    , b[6] =
                    c * h
                    , b[
                    10] =
                    l * e +
                    a);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        }
        , makeRotationFromQuaternion: function (
            a) {
            var b =
                this
                .elements
                , c = a.x
                , d = a.y
                , e = a.z
                , f = a.w
                , g = c + c
                , h = d + d
                , k = e + e;
            a = c * g;
            var n = c * h
                , c = c * k
                , l = d * h
                , d = d * k
                , e = e * k
                , g = f * g
                , h = f * h
                , f = f * k;
            b[0] = 1 - (l +
                e);
            b[4] = n - f;
            b[8] = c + h;
            b[1] = n + f;
            b[5] = 1 - (a +
                e);
            b[9] = d - g;
            b[2] = c - h;
            b[6] = d + g;
            b[10] = 1 - (a +
                l);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        }
        , lookAt: function () {
            var a, b, c;
            return function (
                d, e, f
            ) {
                void 0
                    ===
                    a &&
                    (a = new m
                        , b =
                        new m
                        , c =
                        new m
                    );
                var g =
                    this
                    .elements;
                c.subVectors(
                        d
                        , e
                    )
                    .normalize();
                0 === c
                    .lengthSq() &&
                    (c.z =
                        1
                    );
                a.crossVectors(
                        f
                        , c
                    )
                    .normalize();
                0 === a
                    .lengthSq() &&
                    (c.z +=
                        1E-4
                        , a
                        .crossVectors(
                            f
                            , c
                        )
                        .normalize()
                    );
                b.crossVectors(
                    c
                    , a
                );
                g[0] = a
                    .x;
                g[4] = b
                    .x;
                g[8] = c
                    .x;
                g[1] = a
                    .y;
                g[5] = b
                    .y;
                g[9] = c
                    .y;
                g[2] = a
                    .z;
                g[6] = b
                    .z;
                g[10] =
                    c.z;
                return this
            }
        }()
        , multiply: function (a
            , b) {
            return void 0 !==
                b ? (console
                    .warn(
                        "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
                    )
                    , this
                    .multiplyMatrices(
                        a, b
                    )) :
                this
                .multiplyMatrices(
                    this, a)
        }
        , premultiply: function (
            a) {
            return this
                .multiplyMatrices(
                    a, this)
        }
        , multiplyMatrices: function (
            a, b) {
            var c = a
                .elements
                , d = b
                .elements
                , e = this
                .elements
                , f = c[0]
                , g = c[4]
                , h = c[8]
                , k = c[12]
                , n = c[1]
                , l = c[5]
                , m = c[9]
                , p = c[13]
                , q = c[2]
                , x = c[6]
                , w = c[10]
                , z = c[14]
                , v = c[3]
                , y = c[7]
                , S = c[11]
                , c = c[15]
                , t = d[0]
                , U = d[4]
                , G = d[8]
                , C = d[12]
                , E = d[1]
                , J = d[5]
                , F = d[9]
                , K = d[13]
                , M = d[2]
                , X = d[6]
                , V = d[10]
                , L = d[14]
                , O = d[3]
                , D = d[7]
                , H = d[11]
                , d = d[15];
            e[0] = f * t +
                g * E + h *
                M + k * O;
            e[4] = f * U +
                g * J + h *
                X + k * D;
            e[8] = f * G +
                g * F + h *
                V + k * H;
            e[12] = f * C +
                g * K + h *
                L + k * d;
            e[1] = n * t +
                l * E + m *
                M + p * O;
            e[5] = n * U +
                l * J + m *
                X + p * D;
            e[9] = n * G +
                l * F + m *
                V + p * H;
            e[13] = n * C +
                l * K + m *
                L + p * d;
            e[2] = q * t +
                x * E + w *
                M + z * O;
            e[6] = q * U +
                x * J + w *
                X + z * D;
            e[10] = q * G +
                x * F + w *
                V + z * H;
            e[14] = q * C +
                x * K + w *
                L + z * d;
            e[3] = v * t +
                y * E + S *
                M + c * O;
            e[7] = v * U +
                y * J + S *
                X + c * D;
            e[11] = v * G +
                y * F + S *
                V + c * H;
            e[15] = v * C +
                y * K + S *
                L + c * d;
            return this
        }
        , multiplyToArray: function (
            a, b, c) {
            var d = this
                .elements;
            this.multiplyMatrices(
                a, b);
            c[0] = d[0];
            c[1] = d[1];
            c[2] = d[2];
            c[3] = d[3];
            c[4] = d[4];
            c[5] = d[5];
            c[6] = d[6];
            c[7] = d[7];
            c[8] = d[8];
            c[9] = d[9];
            c[10] = d[10];
            c[11] = d[11];
            c[12] = d[12];
            c[13] = d[13];
            c[14] = d[14];
            c[15] = d[15];
            return this
        }
        , multiplyScalar: function (
            a) {
            var b = this
                .elements;
            b[0] *= a;
            b[4] *= a;
            b[8] *= a;
            b[12] *= a;
            b[1] *= a;
            b[5] *= a;
            b[9] *= a;
            b[13] *= a;
            b[2] *= a;
            b[6] *= a;
            b[10] *= a;
            b[14] *= a;
            b[3] *= a;
            b[7] *= a;
            b[11] *= a;
            b[15] *= a;
            return this
        }
        , applyToBufferAttribute: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new m
                        );
                for (var c =
                        0
                        , d =
                        b
                        .count; c <
                    d; c++
                ) a
                    .x =
                    b
                    .getX(
                        c
                    )
                    , a
                    .y =
                    b
                    .getY(
                        c
                    )
                    , a
                    .z =
                    b
                    .getZ(
                        c
                    )
                    , a
                    .applyMatrix4(
                        this
                    )
                    , b
                    .setXYZ(
                        c
                        , a
                        .x
                        , a
                        .y
                        , a
                        .z
                    );
                return b
            }
        }()
        , determinant: function () {
            var a = this
                .elements
                , b = a[0]
                , c = a[4]
                , d = a[8]
                , e = a[12]
                , f = a[1]
                , g = a[5]
                , h = a[9]
                , k = a[13]
                , n = a[2]
                , l = a[6]
                , m = a[10]
                , p = a[14];
            return a[3] * (+
                    e * h *
                    l - d *
                    k * l -
                    e * g *
                    m + c *
                    k * m +
                    d * g *
                    p - c *
                    h * p) +
                a[7] * (+b *
                    h * p -
                    b * k *
                    m + e *
                    f * m -
                    d * f *
                    p + d *
                    k * n -
                    e * h *
                    n) + a[
                    11] * (+
                    b * k *
                    l - b *
                    g *
                    p - e *
                    f * l +
                    c * f *
                    p + e *
                    g * n -
                    c * k *
                    n) + a[
                    15] * (-
                    d * g *
                    n - b *
                    h * l +
                    b * g *
                    m + d *
                    f * l -
                    c * f *
                    m + c *
                    h * n)
        }
        , transpose: function () {
            var a = this
                .elements
                , b;
            b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        }
        , setPosition: function (
            a) {
            var b = this
                .elements;
            b[12] = a.x;
            b[13] = a.y;
            b[14] = a.z;
            return this
        }
        , getInverse: function (
            a, b) {
            var c = this
                .elements
                , d = a
                .elements
                , e = d[0]
                , f = d[1]
                , g = d[2]
                , h = d[3]
                , k = d[4]
                , n = d[5]
                , l = d[6]
                , m = d[7]
                , p = d[8]
                , q = d[9]
                , x = d[10]
                , w = d[11]
                , z = d[12]
                , v = d[13]
                , y = d[14]
                , d = d[15]
                , S = q *
                y * m - v *
                x * m + v *
                l * w - n *
                y * w - q *
                l * d + n *
                x * d
                , t = z *
                x * m - p *
                y * m - z *
                l * w + k *
                y * w + p *
                l * d - k *
                x * d
                , U = p *
                v * m - z *
                q * m + z *
                n * w - k *
                v * w - p *
                n * d + k *
                q * d
                , G = z *
                q * l - p *
                v * l - z *
                n * x + k *
                v * x + p *
                n * y - k *
                q * y
                , C = e *
                S + f * t +
                g * U + h *
                G;
            if (0 === C) {
                if (!0 ===
                    b) throw Error(
                    "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"
                );
                console
                    .warn(
                        "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"
                    );
                return this
                    .identity()
            }
            C = 1 / C;
            c[0] = S * C;
            c[1] = (v * x *
                    h - q *
                    y * h -
                    v * g *
                    w + f *
                    y * w +
                    q * g *
                    d - f *
                    x * d) *
                C;
            c[2] = (n * y *
                    h - v *
                    l * h +
                    v * g *
                    m - f *
                    y * m -
                    n * g *
                    d + f *
                    l * d) *
                C;
            c[3] = (q * l *
                    h - n *
                    x * h -
                    q * g *
                    m + f *
                    x * m +
                    n * g *
                    w - f *
                    l * w) *
                C;
            c[4] = t * C;
            c[5] = (p * y *
                    h - z *
                    x * h +
                    z * g *
                    w - e *
                    y * w -
                    p * g *
                    d + e *
                    x * d) *
                C;
            c[6] = (z * l *
                    h - k *
                    y * h -
                    z * g *
                    m + e *
                    y * m +
                    k * g *
                    d - e *
                    l * d) *
                C;
            c[7] = (k * x *
                    h - p *
                    l * h +
                    p * g *
                    m - e *
                    x * m -
                    k * g *
                    w + e *
                    l * w) *
                C;
            c[8] = U * C;
            c[9] = (z * q *
                    h - p *
                    v * h -
                    z * f *
                    w + e *
                    v * w +
                    p * f *
                    d - e *
                    q * d) *
                C;
            c[10] = (k * v *
                    h - z *
                    n * h +
                    z * f *
                    m - e *
                    v * m -
                    k * f *
                    d + e *
                    n * d) *
                C;
            c[11] = (p * n *
                    h - k *
                    q * h -
                    p * f *
                    m + e *
                    q * m +
                    k * f *
                    w - e *
                    n * w) *
                C;
            c[12] = G * C;
            c[13] = (p * v *
                    g - z *
                    q * g +
                    z * f *
                    x - e *
                    v * x -
                    p * f *
                    y + e *
                    q * y) *
                C;
            c[14] = (z * n *
                    g - k *
                    v * g -
                    z * f *
                    l + e *
                    v * l +
                    k * f *
                    y - e *
                    n * y) *
                C;
            c[15] = (k * q *
                    g - p *
                    n * g +
                    p * f *
                    l - e *
                    q * l -
                    k * f *
                    x + e *
                    n * x) *
                C;
            return this
        }
        , scale: function (a) {
            var b = this
                .elements
                , c = a.x
                , d = a.y;
            a = a.z;
            b[0] *= c;
            b[4] *= d;
            b[8] *= a;
            b[1] *= c;
            b[5] *= d;
            b[9] *= a;
            b[2] *= c;
            b[6] *= d;
            b[10] *= a;
            b[3] *= c;
            b[7] *= d;
            b[11] *= a;
            return this
        }
        , getMaxScaleOnAxis: function () {
            var a = this
                .elements;
            return Math
                .sqrt(Math
                    .max(a[
                            0
                            ] *
                        a[
                            0
                            ] +
                        a[
                            1
                            ] *
                        a[
                            1
                            ] +
                        a[
                            2
                            ] *
                        a[
                            2
                            ]
                        , a[
                            4
                            ] *
                        a[
                            4
                            ] +
                        a[
                            5
                            ] *
                        a[
                            5
                            ] +
                        a[
                            6
                            ] *
                        a[
                            6
                            ]
                        , a[
                            8
                            ] *
                        a[
                            8
                            ] +
                        a[
                            9
                            ] *
                        a[
                            9
                            ] +
                        a[
                            10
                            ] *
                        a[
                            10
                            ]
                    ))
        }
        , makeTranslation: function (
            a, b, c) {
            this.set(1, 0
                , 0, a,
                0
                , 1, 0,
                b
                , 0, 0,
                1
                , c, 0,
                0
                , 0, 1);
            return this
        }
        , makeRotationX: function (
            a) {
            var b = Math
                .cos(a);
            a = Math.sin(a);
            this.set(1
                , 0, 0
                , 0, 0,
                b
                , -a, 0
                , 0, a,
                b
                , 0, 0,
                0
                , 0, 1);
            return this
        }
        , makeRotationY: function (
            a) {
            var b = Math
                .cos(a);
            a = Math.sin(a);
            this.set(b, 0
                , a, 0,
                0
                , 1, 0,
                0
                , -a, 0
                , b, 0,
                0
                , 0, 0,
                1);
            return this
        }
        , makeRotationZ: function (
            a) {
            var b = Math
                .cos(a);
            a = Math.sin(a);
            this.set(b, -a
                , 0, 0,
                a
                , b, 0,
                0
                , 0, 0,
                1
                , 0, 0,
                0
                , 0, 1);
            return this
        }
        , makeRotationAxis: function (
            a, b) {
            var c = Math
                .cos(b)
                , d = Math
                .sin(b)
                , e = 1 - c
                , f = a.x
                , g = a.y
                , h = a.z
                , k = e * f
                , n = e * g;
            this.set(k * f +
                c, k *
                g - d *
                h, k *
                h + d *
                g, 0
                , k *
                g +
                d * h
                , n *
                g +
                c, n *
                h - d *
                f, 0
                , k *
                h -
                d * g
                , n *
                h +
                d * f
                , e *
                h *
                h + c
                , 0, 0,
                0
                , 0, 1);
            return this
        }
        , makeScale: function (
            a
            , b, c) {
            this.set(a
                , 0, 0
                , 0, 0,
                b
                , 0, 0,
                0
                , 0, c,
                0
                , 0, 0,
                0
                , 1);
            return this
        }
        , makeShear: function (
            a
            , b, c) {
            this.set(1, b
                , c, 0,
                a
                , 1, c,
                0
                , a, b,
                1
                , 0, 0,
                0
                , 0, 1);
            return this
        }
        , compose: function (a
            , b, c) {
            this.makeRotationFromQuaternion(
                b);
            this.scale(c);
            this.setPosition(
                a);
            return this
        }
        , decompose: function () {
            var a, b;
            return function (
                c, d, e
            ) {
                void 0
                    ===
                    a &&
                    (a = new m
                        , b =
                        new I
                    );
                var f =
                    this
                    .elements
                    , g =
                    a
                    .set(
                        f[
                            0
                            ]
                        , f[
                            1
                            ]
                        , f[
                            2
                            ]
                    )
                    .length()
                    , h =
                    a
                    .set(
                        f[
                            4
                            ]
                        , f[
                            5
                            ]
                        , f[
                            6
                            ]
                    )
                    .length()
                    , k =
                    a
                    .set(
                        f[
                            8
                            ]
                        , f[
                            9
                            ]
                        , f[
                            10
                            ]
                    )
                    .length();
                0 > this
                    .determinant() &&
                    (g = -
                        g
                    );
                c.x = f[
                    12
                    ];
                c.y = f[
                    13
                    ];
                c.z = f[
                    14
                    ];
                b.elements
                    .set(
                        this
                        .elements
                    );
                c = 1 /
                    g;
                var f =
                    1 /
                    h
                    , n =
                    1 /
                    k;
                b.elements[
                        0
                    ] *=
                    c;
                b.elements[
                        1
                    ] *=
                    c;
                b.elements[
                        2
                    ] *=
                    c;
                b.elements[
                        4
                    ] *=
                    f;
                b.elements[
                        5
                    ] *=
                    f;
                b.elements[
                        6
                    ] *=
                    f;
                b.elements[
                        8
                    ] *=
                    n;
                b.elements[
                        9
                    ] *=
                    n;
                b.elements[
                        10
                    ] *=
                    n;
                d.setFromRotationMatrix(
                    b
                );
                e.x = g;
                e.y = h;
                e.z = k;
                return this
            }
        }()
        , makePerspective: function (
            a, b, c, d, e, f
        ) {
            void 0 === f &&
                console
                .warn(
                    "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
                );
            var g = this
                .elements;
            g[0] = 2 * e / (
                b - a);
            g[4] = 0;
            g[8] = (b + a) /
                (b - a);
            g[12] = 0;
            g[1] = 0;
            g[5] = 2 * e / (
                c - d);
            g[9] = (c +
                d) / (
                c - d);
            g[13] = 0;
            g[2] = 0;
            g[6] = 0;
            g[10] = -(f +
                e) / (
                f -
                e);
            g[14] = -2 * f *
                e / (f - e);
            g[3] = 0;
            g[7] = 0;
            g[11] = -1;
            g[15] = 0;
            return this
        }
        , makeOrthographic: function (
            a, b, c, d, e, f
        ) {
            var g = this
                .elements
                , h = 1 / (
                    b - a)
                , k = 1 / (
                    c - d)
                , n = 1 / (
                    f - e);
            g[0] = 2 * h;
            g[4] = 0;
            g[8] = 0;
            g[12] = -((b +
                    a) *
                h);
            g[1] = 0;
            g[5] = 2 * k;
            g[9] = 0;
            g[13] = -((c +
                    d) *
                k);
            g[2] = 0;
            g[6] = 0;
            g[10] = -2 * n;
            g[14] = -((f +
                    e) *
                n);
            g[3] = 0;
            g[7] = 0;
            g[11] = 0;
            g[15] = 1;
            return this
        }
        , equals: function (a) {
            var b = this
                .elements;
            a = a.elements;
            for (var c =
                    0; 16 >
                c; c++)
                if (b[c] !==
                    a[c])
                    return !
                        1;
            return !0
        }
        , fromArray: function (
            a
            , b) {
            void 0 ===
                b && (b =
                    0);
            for (var c =
                    0; 16 >
                c; c++) this
                .elements[
                    c] = a[
                    c +
                    b];
            return this
        }
        , toArray: function (a
            , b) {
            void 0 === a &&
                (a = []);
            void 0 === b &&
                (b = 0);
            var c = this
                .elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            a[b + 9] = c[9];
            a[b + 10] = c[
                10];
            a[b + 11] = c[
                11];
            a[b + 12] = c[
                12];
            a[b + 13] = c[
                13];
            a[b + 14] = c[
                14];
            a[b + 15] = c[
                15];
            return a
        }
    };
    Ba.prototype = {
        addEventListener: function (
            a, b) {
            void 0 === this
                ._listeners &&
                (this
                    ._listeners = {}
                );
            var c = this
                ._listeners;
            void 0 === c[
                a] && (
                c[
                    a
                    ] = []
            ); - 1
                ===
                c[a]
                .indexOf(
                    b) && c[
                    a]
                .push(b)
        }
        , hasEventListener: function (
            a, b) {
            if (void 0 ===
                this
                ._listeners)
                return !1;
            var c = this
                ._listeners;
            return void 0 !==
                c[a] && -
                1 !== c[a]
                .indexOf(b)
        }
        , removeEventListener: function (
            a, b) {
            if (void 0 !==
                this
                ._listeners
            ) {
                var c = this
                    ._listeners[
                        a];
                if (void 0 !==
                    c) {
                    var d =
                        c
                        .indexOf(
                            b
                        ); -
                    1 !==
                        d &&
                        c
                        .splice(
                            d
                            , 1
                        )
                }
            }
        }
        , dispatchEvent: function (
            a) {
            if (void 0 !==
                this
                ._listeners
            ) {
                var b = this
                    ._listeners[
                        a
                        .type
                    ];
                if (void 0 !==
                    b) {
                    a.target =
                        this;
                    var c = []
                        , d
                        , e =
                        b
                        .length;
                    for (d =
                        0; d <
                        e; d++
                    ) c[
                            d
                            ] =
                        b[
                            d
                            ];
                    for (d =
                        0; d <
                        e; d++
                    ) c[
                            d
                            ]
                        .call(
                            this
                            , a
                        )
                }
            }
        }
    };
    A.prototype = {
        constructor: A
        , isVector2: !0
        , get width() {
            return this.x
        }
        , set width(a) {
            this.x = a
        }
        , get height() {
            return this.y
        }
        , set height(a) {
            this.y = a
        }
        , set: function (a, b) {
            this.x = a;
            this.y = b;
            return this
        }
        , setScalar: function (
            a) {
            this.y = this
                .x = a;
            return this
        }
        , setX: function (a) {
            this.x = a;
            return this
        }
        , setY: function (a) {
            this.y = a;
            return this
        }
        , setComponent: function (
            a, b) {
            switch (a) {
            case 0:
                this.x =
                    b;
                break;
            case 1:
                this.y =
                    b;
                break;
            default:
                throw Error(
                    "index is out of range: " +
                    a
                );
            }
            return this
        }
        , getComponent: function (
            a) {
            switch (a) {
            case 0:
                return this
                    .x;
            case 1:
                return this
                    .y;
            default:
                throw Error(
                    "index is out of range: " +
                    a
                );
            }
        }
        , clone: function () {
            return new this
                .constructor(

                    this.x
                    , this.y
                    )
        }
        , copy: function (a) {
            this.x = a.x;
            this.y = a.y;
            return this
        }
        , add: function (a, b) {
            if (void 0 !==
                b) return console
                .warn(
                    "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
                )
                , this
                .addVectors(
                    a, b
                );
            this.x += a.x;
            this.y += a.y;
            return this
        }
        , addScalar: function (
            a) {
            this.x += a;
            this.y += a;
            return this
        }
        , addVectors: function (
            a, b) {
            this.x = a.x + b
                .x;
            this.y = a.y + b
                .y;
            return this
        }
        , addScaledVector: function (
            a, b) {
            this.x += a.x *
                b;
            this.y += a.y *
                b;
            return this
        }
        , sub: function (a, b) {
            if (void 0 !==
                b) return console
                .warn(
                    "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
                )
                , this
                .subVectors(
                    a, b
                );
            this.x -= a.x;
            this.y -= a.y;
            return this
        }
        , subScalar: function (
            a) {
            this.x -= a;
            this.y -= a;
            return this
        }
        , subVectors: function (
            a, b) {
            this.x = a.x - b
                .x;
            this.y = a.y - b
                .y;
            return this
        }
        , multiply: function (
            a) {
            this.x *= a.x;
            this.y *= a.y;
            return this
        }
        , multiplyScalar: function (
            a) {
            isFinite(a) ? (
                    this
                    .x *= a
                    , this
                    .y *= a
                ) : this
                .y = this
                .x = 0;
            return this
        }
        , divide: function (a) {
            this.x /= a.x;
            this.y /= a.y;
            return this
        }
        , divideScalar: function (
            a) {
            return this
                .multiplyScalar(
                    1 / a)
        }
        , min: function (a) {
            this.x = Math
                .min(this.x
                    , a.x);
            this.y = Math
                .min(this.y
                    , a.y);
            return this
        }
        , max: function (a) {
            this.x = Math
                .max(this.x
                    , a.x);
            this.y = Math
                .max(this.y
                    , a.y);
            return this
        }
        , clamp: function (a
            , b) {
            this.x = Math
                .max(a.x
                    , Math
                    .min(b
                        .x
                        , this
                        .x)
                );
            this.y = Math
                .max(a.y
                    , Math
                    .min(b
                        .y
                        , this
                        .y)
                );
            return this
        }
        , clampScalar: function () {
            var a, b;
            return function (
                c, d) {
                void 0
                    ===
                    a &&
                    (a = new A
                        , b =
                        new A
                    );
                a.set(c
                    , c
                    );
                b.set(d
                    , d
                    );
                return this
                    .clamp(
                        a
                        , b
                    )
            }
        }()
        , clampLength: function (
            a, b) {
            var c = this
                .length();
            return this
                .multiplyScalar(
                    Math
                    .max(a
                        , Math
                        .min(
                            b
                            , c
                        )
                    ) /
                    c)
        }
        , floor: function () {
            this.x = Math
                .floor(this
                    .x);
            this.y = Math
                .floor(this
                    .y);
            return this
        }
        , ceil: function () {
            this.x = Math
                .ceil(this
                    .x);
            this.y = Math
                .ceil(this
                    .y);
            return this
        }
        , round: function () {
            this.x = Math
                .round(this
                    .x);
            this.y = Math
                .round(this
                    .y);
            return this
        }
        , roundToZero: function () {
            this.x = 0 >
                this.x ?
                Math.ceil(
                    this.x
                ) : Math
                .floor(this
                    .x);
            this.y = 0 >
                this.y ?
                Math.ceil(
                    this.y
                ) : Math
                .floor(this
                    .y);
            return this
        }
        , negate: function () {
            this.x = -this
                .x;
            this.y = -this
                .y;
            return this
        }
        , dot: function (a) {
            return this.x *
                a.x + this
                .y * a.y
        }
        , lengthSq: function () {
            return this.x *
                this.x +
                this.y *
                this.y
        }
        , length: function () {
            return Math
                .sqrt(this
                    .x *
                    this.x +
                    this.y *
                    this.y)
        }
        , lengthManhattan: function () {
            return Math.abs(
                    this.x
                ) + Math
                .abs(this.y)
        }
        , normalize: function () {
            return this
                .divideScalar(
                    this
                    .length()
                )
        }
        , angle: function () {
            var a = Math
                .atan2(this
                    .y, this
                    .x);
            0 > a && (a +=
                2 * Math
                .PI);
            return a
        }
        , distanceTo: function (
            a) {
            return Math
                .sqrt(this
                    .distanceToSquared(
                        a))
        }
        , distanceToSquared: function (
            a) {
            var b = this.x -
                a.x;
            a = this.y - a
                .y;
            return b * b +
                a * a
        }
        , distanceToManhattan: function (
            a) {
            return Math.abs(
                    this.x -
                    a.x) +
                Math.abs(
                    this.y -
                    a.y)
        }
        , setLength: function (
            a) {
            return this
                .multiplyScalar(
                    a / this
                    .length()
                )
        }
        , lerp: function (a,
        b) {
            this.x += (a.x -
                this.x
            ) * b;
            this.y += (a.y -
                this.y
            ) * b;
            return this
        }
        , lerpVectors: function (
            a, b, c) {
            return this
                .subVectors(
                    b, a)
                .multiplyScalar(
                    c).add(
                    a)
        }
        , equals: function (a) {
            return a.x ===
                this.x && a
                .y === this
                .y
        }
        , fromArray: function (
            a
            , b) {
            void 0 === b &&
                (b = 0);
            this.x = a[b];
            this.y = a[b +
                1];
            return this
        }
        , toArray: function (a
            , b) {
            void 0 === a &&
                (a = []);
            void 0 === b &&
                (b = 0);
            a[b] = this.x;
            a[b + 1] = this
                .y;
            return a
        }
        , fromBufferAttribute: function (
            a, b, c) {
            void 0 !== c &&
                console
                .warn(
                    "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
                );
            this.x = a.getX(
                b);
            this.y = a.getY(
                b);
            return this
        }
        , rotateAround: function (
            a, b) {
            var c = Math
                .cos(b)
                , d = Math
                .sin(b)
                , e = this
                .x - a.x
                , f = this
                .y - a.y;
            this.x = e * c -
                f * d + a.x;
            this.y = e * d +
                f * c + a.y;
            return this
        }
    };
    var Wb = 0;
    ga.DEFAULT_IMAGE = void 0;
    ga.DEFAULT_MAPPING = 300;
    ga.prototype = {
        constructor: ga
        , isTexture: !0
        , set needsUpdate(a) {
            !0 === a && this
                .version++
        }
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.image = a
                .image;
            this.mipmaps = a
                .mipmaps
                .slice(0);
            this.mapping = a
                .mapping;
            this.wrapS = a
                .wrapS;
            this.wrapT = a
                .wrapT;
            this.magFilter =
                a.magFilter;
            this.minFilter =
                a.minFilter;
            this.anisotropy =
                a
                .anisotropy;
            this.format = a
                .format;
            this.type = a
                .type;
            this.offset
                .copy(a
                    .offset
                );
            this.repeat
                .copy(a
                    .repeat
                );
            this.generateMipmaps =
                a
                .generateMipmaps;
            this.premultiplyAlpha =
                a
                .premultiplyAlpha;
            this.flipY =
                a.flipY;
            this.unpackAlignment =
                a
                .unpackAlignment;
            this.encoding =
                a.encoding;
            return this
        }
        , toJSON: function (a) {
            if (void 0 !== a
                .textures[
                    this
                    .uuid])
                return a
                    .textures[
                        this
                        .uuid
                    ];
            var b = {
                metadata: {
                    version: 4.4
                    , type: "Texture"
                    , generator: "Texture.toJSON"
                }
                , uuid: this
                    .uuid
                , name: this
                    .name
                , mapping: this
                    .mapping
                , repeat: [
                    this
                    .repeat
                    .x
                    , this
                    .repeat
                    .y
                    ]
                , offset: [
                    this
                    .offset
                    .x
                    , this
                    .offset
                    .y
                    ]
                , wrap: [
                    this
                    .wrapS
                    , this
                    .wrapT
                    ]
                , minFilter: this
                    .minFilter
                , magFilter: this
                    .magFilter
                , anisotropy: this
                    .anisotropy
                , flipY: this
                    .flipY
            };
            if (void 0 !==
                this.image
            ) {
                var c =
                    this
                    .image;
                void 0 === c
                    .uuid &&
                    (c.uuid =
                        P
                        .generateUUID()
                    );
                if (void 0 ===
                    a
                    .images[
                        c
                        .uuid
                    ]) {
                    var d =
                        a
                        .images
                        , e =
                        c
                        .uuid
                        , f =
                        c
                        .uuid
                        , g;
                    void 0
                        !==
                        c
                        .toDataURL ?
                        g =
                        c :
                        (g = document
                            .createElementNS(
                                "http://www.w3.org/1999/xhtml"
                                , "canvas"
                            )
                            , g
                            .width =
                            c
                            .width
                            , g
                            .height =
                            c
                            .height
                            , g
                            .getContext(
                                "2d"
                            )
                            .drawImage(
                                c
                                , 0
                                , 0
                                , c
                                .width
                                , c
                                .height
                            )
                        );
                    g = 2048 <
                        g
                        .width ||
                        2048 <
                        g
                        .height ?
                        g
                        .toDataURL(
                            "image/jpeg"
                            , .6
                        ) :
                        g
                        .toDataURL(
                            "image/png"
                        );
                    d[e] = {
                        uuid: f
                        , url: g
                    }
                }
                b.image = c
                    .uuid
            }
            return a
                .textures[
                    this
                    .uuid] =
                b
        }
        , dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        , transformUv: function (
            a) {
            if (300 === this
                .mapping) {
                a.multiply(
                    this
                    .repeat
                );
                a.add(this
                    .offset
                );
                if (0 > a
                    .x ||
                    1 < a.x)
                    switch (
                        this
                        .wrapS
                    ) {
                    case 1E3:
                        a.x -=
                            Math
                            .floor(
                                a
                                .x
                            );
                        break;
                    case 1001:
                        a.x =
                            0 >
                            a
                            .x ?
                            0 :
                            1;
                        break;
                    case 1002:
                        a.x =
                            1 ===
                            Math
                            .abs(
                                Math
                                .floor(
                                    a
                                    .x
                                ) %
                                2
                            ) ?
                            Math
                            .ceil(
                                a
                                .x
                            ) -
                            a
                            .x :
                            a
                            .x -
                            Math
                            .floor(
                                a
                                .x
                            )
                    }
                if (0 > a
                    .y ||
                    1 < a.y)
                    switch (
                        this
                        .wrapT
                    ) {
                    case 1E3:
                        a.y -=
                            Math
                            .floor(
                                a
                                .y
                            );
                        break;
                    case 1001:
                        a.y =
                            0 >
                            a
                            .y ?
                            0 :
                            1;
                        break;
                    case 1002:
                        a.y =
                            1 ===
                            Math
                            .abs(
                                Math
                                .floor(
                                    a
                                    .y
                                ) %
                                2
                            ) ?
                            Math
                            .ceil(
                                a
                                .y
                            ) -
                            a
                            .y :
                            a
                            .y -
                            Math
                            .floor(
                                a
                                .y
                            )
                    }
                this.flipY &&
                    (a.y =
                        1 -
                        a.y)
            }
        }
    };
    Object.assign(ga.prototype
        , Ba.prototype);
    wa.prototype = Object.create(ga
        .prototype);
    wa.prototype.constructor = wa;
    wa.prototype.isCubeTexture = !0;
    Object.defineProperty(wa
        .prototype, "images", {
            get: function () {
                return this
                    .image
            }
            , set: function (
            a) {
                this.image =
                    a
            }
        });
    var Eb = new ga
        , Fb = new wa
        , Bb = []
        , Db = [];
    Jb.prototype.setValue =
        function (a, b) {
            for (var c = this.seq
                    , d = 0, e = c
                    .length; d !==
                e; ++d) {
                var f = c[d];
                f.setValue(a, b[f
                    .id])
            }
        };
    var nb =
        /([\w\d_]+)(\])?(\[|\.)?/g;
    Ja.prototype.setValue =
        function (a, b, c) {
            b = this.map[b];
            void 0 !== b && b
                .setValue(a, c, this
                    .renderer)
        };
    Ja.prototype.set = function (a
        , b, c) {
        var d = this.map[c];
        void 0 !== d && d
            .setValue(a, b[c]
                , this.renderer)
    };
    Ja.prototype.setOptional =
        function (a, b, c) {
            b = b[c];
            void 0 !== b && this
                .setValue(a, c, b)
        };
    Ja.upload = function (a, b, c
        , d) {
        for (var e = 0, f = b
                .length; e !==
            f; ++e) {
            var g = b[e]
                , h = c[g.id];
            !1 !== h
                .needsUpdate &&
                g.setValue(a, h
                    .value, d)
        }
    };
    Ja.seqWithValue = function (a
        , b) {
        for (var c = [], d = 0
                , e = a
                .length; d !==
            e; ++d) {
            var f = a[d];
            f.id in b && c.push(
                f)
        }
        return c
    };
    var ta = {
            merge: function (a) {
                for (var b = {}
                        , c =
                        0; c < a
                    .length; c++
                ) {
                    var d = this
                        .clone(
                            a[c]
                        )
                        , e;
                    for (e in d)
                        b[e] =
                        d[e]
                }
                return b
            }
            , clone: function (a) {
                var b = {}
                    , c;
                for (c in a) {
                    b[c] = {};
                    for (var d in
                            a[
                                c
                                ]) {
                        var e =
                            a[c]
                            [d];
                        e && (e.isColor ||
                                e
                                .isMatrix3 ||
                                e
                                .isMatrix4 ||
                                e
                                .isVector2 ||
                                e
                                .isVector3 ||
                                e
                                .isVector4 ||
                                e
                                .isTexture
                            ) ?
                            b[c]
                            [
                            d] =
                            e
                            .clone() :
                            Array
                            .isArray(
                                e
                            ) ?
                            b[c]
                            [
                            d] =
                            e
                            .slice() :
                            b[c]
                            [
                            d] =
                            e
                    }
                }
                return b
            }
        }
        , W = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n"
            , alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n"
            , alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n"
            , aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n"
            , aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif"
            , begin_vertex: "\nvec3 transformed = vec3( position );\n"
            , beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n"
            , bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5/LUT_SIZE;\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n\tint config = 0;\n\tif ( L[0].z > 0.0 ) config += 1;\n\tif ( L[1].z > 0.0 ) config += 2;\n\tif ( L[2].z > 0.0 ) config += 4;\n\tif ( L[3].z > 0.0 ) config += 8;\n\tn = 0;\n\tif ( config == 0 ) {\n\t} else if ( config == 1 ) {\n\t\tn = 3;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 2 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 3 ) {\n\t\tn = 4;\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t\tL[3] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 4 ) {\n\t\tn = 3;\n\t\tL[0] = -L[3].z * L[2] + L[2].z * L[3];\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t} else if ( config == 5 ) {\n\t\tn = 0;\n\t} else if ( config == 6 ) {\n\t\tn = 4;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 7 ) {\n\t\tn = 5;\n\t\tL[4] = -L[3].z * L[0] + L[0].z * L[3];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 8 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[1] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] =  L[3];\n\t} else if ( config == 9 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[2].z * L[3] + L[3].z * L[2];\n\t} else if ( config == 10 ) {\n\t\tn = 0;\n\t} else if ( config == 11 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 12 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t} else if ( config == 13 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = L[2];\n\t\tL[2] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t} else if ( config == 14 ) {\n\t\tn = 5;\n\t\tL[4] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t} else if ( config == 15 ) {\n\t\tn = 4;\n\t}\n\tif ( n == 3 )\n\t\tL[3] = L[0];\n\tif ( n == 4 )\n\t\tL[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n\tfloat cosTheta = dot( v1, v2 );\n\tfloat theta = acos( cosTheta );\n\tfloat res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n\treturn res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n\trectPoints[0] = pos - halfWidth - halfHeight;\n\trectPoints[1] = pos + halfWidth - halfHeight;\n\trectPoints[2] = pos + halfWidth + halfHeight;\n\trectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tvec3 T1, T2;\n\tT1 = normalize(V - N * dot( V, N ));\n\tT2 = - cross( N, T1 );\n\tmat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n\tvec3 clippedRect[5];\n\tclippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n\tclippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n\tclippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n\tclippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n\tint n;\n\tclipQuadToHorizon(clippedRect, n);\n\tif ( n == 0 )\n\t\treturn vec3( 0, 0, 0 );\n\tclippedRect[0] = normalize( clippedRect[0] );\n\tclippedRect[1] = normalize( clippedRect[1] );\n\tclippedRect[2] = normalize( clippedRect[2] );\n\tclippedRect[3] = normalize( clippedRect[3] );\n\tclippedRect[4] = normalize( clippedRect[4] );\n\tfloat sum = 0.0;\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n\tif (n >= 4)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n\tif (n == 5)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n\tsum = max( 0.0, sum );\n\tvec3 Lo_i = vec3( sum, sum, sum );\n\treturn Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n\t\tconst in float roughness,\n\t\tconst in sampler2D ltcMat, const in sampler2D ltcMag ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tvec2 uv = ltcTextureCoords( geometry, roughness );\n\tvec4 brdfLtcApproxParams, t;\n\tbrdfLtcApproxParams = texture2D( ltcMat, uv );\n\tt = texture2D( ltcMat, uv );\n\tfloat brdfLtcScalar = texture2D( ltcMag, uv ).a;\n\tmat3 brdfLtcApproxMat = mat3(\n\t\tvec3(   1,   0, t.y ),\n\t\tvec3(   0, t.z,   0 ),\n\t\tvec3( t.w,   0, t.x )\n\t);\n\tvec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );\n\tspecularReflectance *= brdfLtcScalar;\n\treturn specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tmat3 diffuseBrdfMat = mat3(1);\n\tvec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );\n\treturn diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n"
            , bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n"
            , clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n"
            , clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n"
            , clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n"
            , clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n"
            , color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif"
            , color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n"
            , color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif"
            , color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif"
            , common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n"
            , cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n"
            , defaultnormal_vertex: "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n"
            , displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n"
            , displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n"
            , emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n"
            , emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n"
            , encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n"
            , encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n"
            , envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n"
            , envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n"
            , envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n"
            , envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n"
            , fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif"
            , fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n"
            , fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n"
            , fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n"
            , gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n"
            , lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n"
            , lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif"
            , lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n"
            , lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n"
            , lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n"
            , lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;\n\t}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n"
            , lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n"
            , lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n"
            , lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n"
            , logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif"
            , logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n"
            , logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif"
            , logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n"
            , map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n"
            , map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n"
            , map_particle_fragment: "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n"
            , map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n"
            , metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n"
            , metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif"
            , morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n"
            , morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif"
            , morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n"
            , normal_flip: "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n"
            , normal_fragment: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n"
            , normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n"
            , packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n"
            , premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n"
            , project_vertex: "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n"
            , roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n"
            , roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif"
            , shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n"
            , shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n"
            , shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n"
            , shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n"
            , skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif"
            , skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n"
            , skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n"
            , skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n"
            , specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif"
            , specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif"
            , tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n"
            , tonemapping_pars_fragment: "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n"
            , uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif"
            , uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n"
            , uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif"
            , uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif"
            , uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif"
            , uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif"
            , worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n"
            , cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n"
            , cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n"
            , depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n"
            , depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n"
            , distanceRGBA_frag: "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n"
            , distanceRGBA_vert: "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n"
            , equirect_frag: "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n"
            , equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n"
            , linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
            , linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
            , meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
            , meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n"
            , meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
            , meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
            , meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
            , meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
            , meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
            , meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
            , normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n"
            , normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n"
            , points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n"
            , points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"
            , shadow_frag: "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n"
            , shadow_vert: "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"
        };
    da.prototype = {
        constructor: da
        , isVector4: !0
        , set: function (a, b,
            c
            , d) {
            this.x = a;
            this.y = b;
            this.z = c;
            this.w = d;
            return this
        }
        , setScalar: function (
            a) {
            this.w = this
                .z = this
                .y = this
                .x = a;
            return this
        }
        , setX: function (a) {
            this.x = a;
            return this
        }
        , setY: function (a) {
            this.y = a;
            return this
        }
        , setZ: function (a) {
            this.z = a;
            return this
        }
        , setW: function (a) {
            this.w = a;
            return this
        }
        , setComponent: function (
            a, b) {
            switch (a) {
            case 0:
                this.x =
                    b;
                break;
            case 1:
                this.y =
                    b;
                break;
            case 2:
                this.z =
                    b;
                break;
            case 3:
                this.w =
                    b;
                break;
            default:
                throw Error(
                    "index is out of range: " +
                    a
                );
            }
            return this
        }
        , getComponent: function (
            a) {
            switch (a) {
            case 0:
                return this
                    .x;
            case 1:
                return this
                    .y;
            case 2:
                return this
                    .z;
            case 3:
                return this
                    .w;
            default:
                throw Error(
                    "index is out of range: " +
                    a
                );
            }
        }
        , clone: function () {
            return new this
                .constructor(
                    this.x
                    , this
                    .y
                    , this
                    .z
                    , this.w
                    )
        }
        , copy: function (a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.w =
                void 0 !== a
                .w ? a.w :
                1;
            return this
        }
        , add: function (a, b) {
            if (void 0 !==
                b) return console
                .warn(
                    "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
                )
                , this
                .addVectors(
                    a, b
                );
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            this.w += a.w;
            return this
        }
        , addScalar: function (
            a) {
            this.x += a;
            this.y += a;
            this.z += a;
            this.w += a;
            return this
        }
        , addVectors: function (
            a, b) {
            this.x = a.x + b
                .x;
            this.y = a.y + b
                .y;
            this.z = a.z + b
                .z;
            this.w = a.w + b
                .w;
            return this
        }
        , addScaledVector: function (
            a, b) {
            this.x += a.x *
                b;
            this.y += a.y *
                b;
            this.z += a.z *
                b;
            this.w += a.w *
                b;
            return this
        }
        , sub: function (a, b) {
            if (void 0 !==
                b) return console
                .warn(
                    "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
                )
                , this
                .subVectors(
                    a, b
                );
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            this.w -= a.w;
            return this
        }
        , subScalar: function (
            a) {
            this.x -=
                a;
            this.y -= a;
            this.z -= a;
            this.w -= a;
            return this
        }
        , subVectors: function (
            a, b) {
            this.x = a.x - b
                .x;
            this.y = a.y - b
                .y;
            this.z = a.z - b
                .z;
            this.w = a.w - b
                .w;
            return this
        }
        , multiplyScalar: function (
            a) {
            isFinite(a) ? (
                    this
                    .x *= a
                    , this
                    .y *= a
                    , this
                    .z *= a
                    , this
                    .w *= a
                ) : this
                .w = this
                .z = this
                .y = this
                .x = 0;
            return this
        }
        , applyMatrix4: function (
            a) {
            var b = this.x
                , c = this
                .y
                , d = this
                .z
                , e = this
                .w;
            a = a.elements;
            this.x = a[0] *
                b + a[4] *
                c + a[8] *
                d + a[12] *
                e;
            this.y = a[1] *
                b + a[5] *
                c + a[9] *
                d + a[13] *
                e;
            this.z = a[2] *
                b + a[6] *
                c + a[10] *
                d + a[14] *
                e;
            this.w = a[3] *
                b + a[7] *
                c + a[11] *
                d + a[15] *
                e;
            return this
        }
        , divideScalar: function (
            a) {
            return this
                .multiplyScalar(
                    1 / a)
        }
        , setAxisAngleFromQuaternion: function (
            a) {
            this.w = 2 *
                Math.acos(a
                    .w);
            var b = Math
                .sqrt(1 - a
                    .w * a.w
                );
            1E-4 > b ? (this
                .x = 1
                , this
                .z =
                this.y =
                0) : (
                this.x =
                a.x / b
                , this
                .y =
                a.y / b
                , this
                .z =
                a.z / b);
            return this
        }
        , setAxisAngleFromRotationMatrix: function (
            a) {
            var b, c, d;
            a = a.elements;
            var e = a[0];
            d = a[4];
            var f = a[8]
                , g = a[1]
                , h = a[5]
                , k = a[9];
            c = a[2];
            b = a[6];
            var n = a[10];
            if (.01 > Math
                .abs(d -
                    g) &&
                .01 >
                Math.abs(f -
                    c) &&
                .01 > Math
                .abs(k - b)
            ) {
                if (.1 >
                    Math
                    .abs(d +
                        g
                    ) &&
                    .1 >
                    Math
                    .abs(f +
                        c
                    ) &&
                    .1 >
                    Math
                    .abs(k +
                        b
                    ) &&
                    .1 >
                    Math
                    .abs(e +
                        h +
                        n -
                        3))
                    return this
                        .set(
                            1
                            , 0
                            , 0
                            , 0
                        )
                        , this;
                a = Math.PI;
                e = (e +
                        1) /
                    2;
                h = (h +
                        1) /
                    2;
                n = (n +
                        1) /
                    2;
                d = (d +
                        g) /
                    4;
                f = (f +
                        c) /
                    4;
                k = (k +
                        b) /
                    4;
                e > h && e >
                    n ?
                    .01 >
                    e ? (b =
                        0
                        , d =
                        c =
                        .707106781
                    ) :
                    (b = Math
                        .sqrt(
                            e
                        )
                        , c =
                        d /
                        b
                        , d =
                        f /
                        b) :
                    h > n ?
                    .01 >
                    h ? (b =
                        .707106781
                        , c =
                        0
                        , d =
                        .707106781
                    ) :
                    (c = Math
                        .sqrt(
                            h
                        )
                        , b =
                        d /
                        c
                        , d =
                        k /
                        c) :
                    .01 >
                    n ? (c =
                        b =
                        .707106781
                        , d =
                        0) :
                    (d = Math
                        .sqrt(
                            n
                        )
                        , b =
                        f /
                        d
                        , c =
                        k /
                        d);
                this.set(b
                    , c
                    , d,
                    a
                );
                return this
            }
            a = Math.sqrt((
                    b -
                    k) *
                (b -
                    k) +
                (
                    f -
                    c) *
                (f -
                    c) +
                (
                    g -
                    d) *
                (g - d));
            .001 > Math.abs(
                a) && (
                a = 1);
            this.x = (b -
                k) / a;
            this.y = (f -
                c) / a;
            this.z = (g -
                d) / a;
            this.w = Math
                .acos((e +
                        h +
                        n -
                        1) /
                    2);
            return this
        }
        , min: function (a) {
            this.x =
                Math.min(
                    this.x
                    , a.x);
            this.y = Math
                .min(this.y
                    , a.y);
            this.z = Math
                .min(this.z
                    , a.z);
            this.w = Math
                .min(this.w
                    , a.w);
            return this
        }
        , max: function (a) {
            this.x = Math
                .max(this.x
                    , a.x);
            this.y = Math
                .max(this.y
                    , a.y);
            this.z = Math
                .max(this.z
                    , a.z);
            this.w = Math
                .max(this.w
                    , a.w);
            return this
        }
        , clamp: function (a
            , b) {
            this.x = Math
                .max(a.x
                    , Math
                    .min(b
                        .x
                        , this
                        .x)
                );
            this.y = Math
                .max(a.y
                    , Math
                    .min(b
                        .y
                        , this
                        .y)
                );
            this.z = Math
                .max(a.z
                    , Math
                    .min(b
                        .z
                        , this
                        .z)
                );
            this.w = Math
                .max(a.w
                    , Math
                    .min(b
                        .w
                        , this
                        .w)
                );
            return this
        }
        , clampScalar: function () {
            var a, b;
            return function (
                c
                , d) {
                void 0
                    ===
                    a &&
                    (a = new da
                        , b =
                        new da
                    );
                a.set(c, c
                    , c
                    , c
                );
                b.set(d, d
                    , d
                    , d
                );
                return this
                    .clamp(
                        a
                        , b
                    )
            }
        }()
        , floor: function () {
            this.x = Math
                .floor(this
                    .x);
            this.y = Math
                .floor(this
                    .y);
            this.z = Math
                .floor(this
                    .z);
            this.w = Math
                .floor(this
                    .w);
            return this
        }
        , ceil: function () {
            this.x = Math
                .ceil(this
                    .x);
            this.y = Math
                .ceil(this
                    .y);
            this.z = Math
                .ceil(this
                    .z);
            this.w = Math
                .ceil(this
                    .w);
            return this
        }
        , round: function () {
            this.x = Math
                .round(this
                    .x);
            this.y = Math
                .round(this
                    .y);
            this.z = Math
                .round(this
                    .z);
            this.w = Math
                .round(this
                    .w);
            return this
        }
        , roundToZero: function () {
            this.x =
                0 > this.x ?
                Math.ceil(
                    this.x
                ) : Math
                .floor(this
                    .x);
            this.y = 0 >
                this.y ?
                Math.ceil(
                    this.y
                ) : Math
                .floor(this
                    .y);
            this.z = 0 >
                this.z ?
                Math.ceil(
                    this.z
                ) : Math
                .floor(this
                    .z);
            this.w = 0 >
                this.w ?
                Math.ceil(
                    this.w
                ) : Math
                .floor(this
                    .w);
            return this
        }
        , negate: function () {
            this.x = -this
                .x;
            this.y = -this
                .y;
            this.z = -this
                .z;
            this.w = -this
                .w;
            return this
        }
        , dot: function (a) {
            return this.x *
                a.x + this
                .y * a.y +
                this.z * a
                .z + this
                .w * a.w
        }
        , lengthSq: function () {
            return this.x *
                this.x +
                this.y *
                this.y +
                this.z *
                this.z +
                this.w *
                this.w
        }
        , length: function () {
            return Math
                .sqrt(this
                    .x *
                    this.x +
                    this.y *
                    this.y +
                    this.z *
                    this.z +
                    this.w *
                    this.w)
        }
        , lengthManhattan: function () {
            return Math.abs(
                    this.x
                ) + Math
                .abs(this
                    .y) +
                Math
                .abs(this
                    .z) +
                Math
                .abs(this.w)
        }
        , normalize: function () {
            return this
                .divideScalar(
                    this
                    .length()
                )
        }
        , setLength: function (
            a) {
            return this
                .multiplyScalar(
                    a / this
                    .length()
                )
        }
        , lerp: function (a,
        b) {
            this.x += (a.x -
                this.x
            ) * b;
            this.y += (a.y -
                this.y
            ) * b;
            this.z += (a.z -
                this.z
            ) * b;
            this.w += (a.w -
                this.w
            ) * b;
            return this
        }
        , lerpVectors: function (
            a, b, c) {
            return this
                .subVectors(
                    b, a)
                .multiplyScalar(
                    c).add(
                    a)
        }
        , equals: function (a) {
            return a.x ===
                this.x && a
                .y === this
                .y && a
                .z === this
                .z && a
                .w === this
                .w
        }
        , fromArray: function (
            a
            , b) {
            void 0 === b &&
                (b = 0);
            this.x = a[b];
            this.y = a[b +
                1];
            this.z = a[b +
                2];
            this.w = a[b +
                3];
            return this
        }
        , toArray: function (a
            , b) {
            void 0 === a &&
                (a = []);
            void 0 === b &&
                (b = 0);
            a[b] = this.x;
            a[b + 1] = this
                .y;
            a[b + 2] = this
                .z;
            a[b + 3] = this
                .w;
            return a
        }
        , fromBufferAttribute: function (
            a, b, c) {
            void 0 !== c &&
                console
                .warn(
                    "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
                );
            this.x = a.getX(
                b);
            this.y = a.getY(
                b);
            this.z = a.getZ(
                b);
            this.w = a.getW(
                b);
            return this
        }
    };
    ea.prototype = {
        constructor: ea
        , isColor: !0
        , r: 1
        , g: 1
        , b: 1
        , set: function (a) {
            a && a.isColor ?
                this.copy(
                    a) :
                "number" ===
                typeof a ?
                this.setHex(
                    a) :
                "string" ===
                typeof a &&
                this
                .setStyle(
                    a);
            return this
        }
        , setScalar: function (
            a) {
            this.b = this
                .g = this
                .r = a;
            return this
        }
        , setHex: function (a) {
            a = Math.floor(
                a);
            this.r = (a >>
                16 & 255
            ) / 255;
            this.g = (a >>
                8 & 255
            ) / 255;
            this.b = (a &
                    255) /
                255;
            return this
        }
        , setRGB: function (a,
            b
            , c) {
            this.r = a;
            this.g = b;
            this.b = c;
            return this
        }
        , setHSL: function () {
            function a(a, c
                , d) {
                0 > d && (
                    d +=
                    1);
                1 < d && --
                d;
                return d <
                    1 / 6 ?
                    a + 6 *
                    (c -
                        a) *
                    d :
                    .5 > d ?
                    c : d <
                    2 / 3 ?
                    a + 6 *
                    (c -
                        a) *
                    (2 / 3 -
                        d) :
                    a
            }
            return function (
                b, c, d
            ) {
                b = P
                    .euclideanModulo(
                        b
                        , 1
                    );
                c = P
                    .clamp(
                        c
                        , 0
                        , 1
                    );
                d = P
                    .clamp(
                        d
                        , 0
                        , 1
                    );
                0 ===
                    c ?
                    this
                    .r =
                    this
                    .g =
                    this
                    .b =
                    d :
                    (c = .5 >=
                        d ?
                        d *
                        (1 +
                            c
                            ) :
                        d +
                        c -
                        d *
                        c
                        , d =
                        2 *
                        d -
                        c
                        , this
                        .r =
                        a(d, c
                            , b +
                            1 /
                            3
                        )
                        , this
                        .g =
                        a(d, c
                            , b
                        )
                        , this
                        .b =
                        a(d, c
                            , b -
                            1 /
                            3
                        )
                    );
                return this
            }
        }()
        , setStyle: function (
            a) {
            function b(b) {
                void 0 !==
                    b && 1 >
                    parseFloat(
                        b
                    ) &&
                    console
                    .warn(
                        "THREE.Color: Alpha component of " +
                        a +
                        " will be ignored."
                    )
            }
            var c;
            if (c =
                /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/
                .exec(a)) {
                var d = c[
                    2];
                switch (c[
                        1
                        ]) {
                case "rgb":
                case "rgba":
                    if (c =
                        /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/
                        .exec(
                            d
                        )
                    )
                        return this
                            .r =
                            Math
                            .min(
                                255
                                , parseInt(
                                    c[
                                        1
                                        ]
                                    , 10
                                )
                            ) /
                            255
                            , this
                            .g =
                            Math
                            .min(
                                255
                                , parseInt(
                                    c[
                                        2
                                        ]
                                    , 10
                                )
                            ) /
                            255
                            , this
                            .b =
                            Math
                            .min(
                                255
                                , parseInt(
                                    c[
                                        3
                                        ]
                                    , 10
                                )
                            ) /
                            255
                            , b(c[
                                5
                                ])
                            , this;
                    if (c =
                        /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/
                        .exec(
                            d
                        )
                    )
                        return this
                            .r =
                            Math
                            .min(
                                100
                                , parseInt(
                                    c[
                                        1
                                        ]
                                    , 10
                                )
                            ) /
                            100
                            , this
                            .g =
                            Math
                            .min(
                                100
                                , parseInt(
                                    c[
                                        2
                                        ]
                                    , 10
                                )
                            ) /
                            100
                            , this
                            .b =
                            Math
                            .min(
                                100
                                , parseInt(
                                    c[
                                        3
                                        ]
                                    , 10
                                )
                            ) /
                            100
                            , b(c[
                                5
                                ])
                            , this;
                    break;
                case "hsl":
                case "hsla":
                    if (c =
                        /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/
                        .exec(
                            d
                        )
                    ) {
                        var d =
                            parseFloat(
                                c[
                                    1
                                    ]
                            ) /
                            360
                            , e =
                            parseInt(
                                c[
                                    2
                                    ]
                                , 10
                            ) /
                            100
                            , f =
                            parseInt(
                                c[
                                    3
                                    ]
                                , 10
                            ) /
                            100;
                        b(c[
                            5
                            ]);
                        return this
                            .setHSL(
                                d
                                , e
                                , f
                            )
                    }
                }
            } else if (c =
                /^\#([A-Fa-f0-9]+)$/
                .exec(a)) {
                c = c[1];
                d = c
                    .length;
                if (3 === d)
                    return this
                        .r =
                        parseInt(
                            c
                            .charAt(
                                0
                            ) +
                            c
                            .charAt(
                                0
                            )
                            , 16
                        ) /
                        255
                        , this
                        .g =
                        parseInt(
                            c
                            .charAt(
                                1
                            ) +
                            c
                            .charAt(
                                1
                            )
                            , 16
                        ) /
                        255
                        , this
                        .b =
                        parseInt(
                            c
                            .charAt(
                                2
                            ) +
                            c
                            .charAt(
                                2
                            )
                            , 16
                        ) /
                        255
                        , this;
                if (6 === d)
                    return this
                        .r =
                        parseInt(
                            c
                            .charAt(
                                0
                            ) +
                            c
                            .charAt(
                                1
                            )
                            , 16
                        ) /
                        255
                        , this
                        .g =
                        parseInt(
                            c
                            .charAt(
                                2
                            ) +
                            c
                            .charAt(
                                3
                            )
                            , 16
                        ) /
                        255
                        , this
                        .b =
                        parseInt(
                            c
                            .charAt(
                                4
                            ) +
                            c
                            .charAt(
                                5
                            )
                            , 16
                        ) /
                        255
                        , this
            }
            a && 0 < a
                .length && (
                    c = Sc[
                        a]
                    , void 0 !==
                    c ? this
                    .setHex(
                        c) :
                    console
                    .warn(
                        "THREE.Color: Unknown color " +
                        a));
            return this
        }
        , clone: function () {
            return new this
                .constructor(
                    this.r
                    , this
                    .g
                    , this.b
                    )
        }
        , copy: function (a) {
            this.r = a.r;
            this.g = a.g;
            this.b = a.b;
            return this
        }
        , copyGammaToLinear: function (
            a, b) {
            void 0 === b &&
                (b = 2);
            this.r = Math
                .pow(a.r
                    , b);
            this.g = Math
                .pow(a.g
                    , b);
            this.b = Math
                .pow(a.b
                    , b);
            return this
        }
        , copyLinearToGamma: function (
            a, b) {
            void 0 === b &&
                (b = 2);
            var c = 0 < b ?
                1 / b : 1;
            this.r = Math
                .pow(a.r
                    , c);
            this.g = Math
                .pow(a.g
                    , c);
            this.b = Math
                .pow(a.b
                    , c);
            return this
        }
        , convertGammaToLinear: function () {
            var a =
                this.r
                , b = this
                .g
                , c = this
                .b;
            this.r = a * a;
            this.g = b * b;
            this.b = c * c;
            return this
        }
        , convertLinearToGamma: function () {
            this.r = Math
                .sqrt(this
                    .r);
            this.g = Math
                .sqrt(this
                    .g);
            this.b = Math
                .sqrt(this
                    .b);
            return this
        }
        , getHex: function () {
            return 255 *
                this.r <<
                16 ^ 255 *
                this.g <<
                8 ^ 255 *
                this.b << 0
        }
        , getHexString: function () {
            return ("000000" +
                    this
                    .getHex()
                    .toString(
                        16))
                .slice(-6)
        }
        , getHSL: function (a) {
            a = a || {
                h: 0
                , s: 0
                , l: 0
            };
            var b = this.r
                , c = this
                .g
                , d = this
                .b
                , e = Math
                .max(b, c
                    , d)
                , f = Math
                .min(b, c
                    , d)
                , g, h = (
                    f + e) /
                2;
            if (f === e) f =
                g = 0;
            else {
                var k = e -
                    f
                    , f =
                    .5 >=
                    h ? k /
                    (e +
                        f) :
                    k / (2 -
                        e -
                        f);
                switch (e) {
                case b:
                    g = (c -
                            d
                            ) /
                        k +
                        (c < d ?
                            6 :
                            0
                        );
                    break;
                case c:
                    g = (d -
                            b
                            ) /
                        k +
                        2;
                    break;
                case d:
                    g = (b -
                            c
                            ) /
                        k +
                        4
                }
                g /= 6
            }
            a.h = g;
            a.s = f;
            a.l = h;
            return a
        }
        , getStyle: function () {
            return "rgb(" +
                (255 * this
                    .r | 0
                ) +
                "," + (255 *
                    this.g |
                    0) +
                "," + (255 *
                    this.b |
                    0) + ")"
        }
        , offsetHSL: function (
            a
            , b, c) {
            var d = this
                .getHSL();
            d.h += a;
            d.s += b;
            d.l += c;
            this.setHSL(d.h
                , d.s, d
                .l
            );
            return this
        }
        , add: function (a) {
            this.r += a.r;
            this.g += a.g;
            this.b += a.b;
            return this
        }
        , addColors: function (
            a
            , b) {
            this.r = a.r + b
                .r;
            this.g = a.g + b
                .g;
            this.b = a.b + b
                .b;
            return this
        }
        , addScalar: function (
            a) {
            this.r +=
                a;
            this.g += a;
            this.b += a;
            return this
        }
        , sub: function (a) {
            this.r = Math
                .max(0, this
                    .r - a.r
                );
            this.g = Math
                .max(0, this
                    .g - a.g
                );
            this.b = Math
                .max(0, this
                    .b - a.b
                );
            return this
        }
        , multiply: function (
            a) {
            this.r *= a.r;
            this.g *= a.g;
            this.b *= a.b;
            return this
        }
        , multiplyScalar: function (
            a) {
            this.r *= a;
            this.g *= a;
            this.b *= a;
            return this
        }
        , lerp: function (a,
        b) {
            this.r += (a.r -
                this.r
            ) * b;
            this.g += (a.g -
                this.g
            ) * b;
            this.b += (a.b -
                this.b
            ) * b;
            return this
        }
        , equals: function (a) {
            return a.r ===
                this.r && a
                .g === this
                .g && a
                .b === this
                .b
        }
        , fromArray: function (
            a
            , b) {
            void 0 === b &&
                (b =
                    0);
            this.r = a[b];
            this.g = a[b +
                1];
            this.b = a[b +
                2];
            return this
        }
        , toArray: function (a
            , b) {
            void 0 === a &&
                (a = []);
            void 0 === b &&
                (b = 0);
            a[b] = this.r;
            a[b + 1] = this
                .g;
            a[b + 2] = this
                .b;
            return a
        }
        , toJSON: function () {
            return this
                .getHex()
        }
    };
    var Sc = {
            aliceblue: 15792383
            , antiquewhite: 16444375
            , aqua: 65535
            , aquamarine: 8388564
            , azure: 15794175
            , beige: 16119260
            , bisque: 16770244
            , black: 0
            , blanchedalmond: 16772045
            , blue: 255
            , blueviolet: 9055202
            , brown: 10824234
            , burlywood: 14596231
            , cadetblue: 6266528
            , chartreuse: 8388352
            , chocolate: 13789470
            , coral: 16744272
            , cornflowerblue: 6591981
            , cornsilk: 16775388
            , crimson: 14423100
            , cyan: 65535
            , darkblue: 139
            , darkcyan: 35723
            , darkgoldenrod: 12092939
            , darkgray: 11119017
            , darkgreen: 25600
            , darkgrey: 11119017
            , darkkhaki: 12433259
            , darkmagenta: 9109643
            , darkolivegreen: 5597999
            , darkorange: 16747520
            , darkorchid: 10040012
            , darkred: 9109504
            , darksalmon: 15308410
            , darkseagreen: 9419919
            , darkslateblue: 4734347
            , darkslategray: 3100495
            , darkslategrey: 3100495
            , darkturquoise: 52945
            , darkviolet: 9699539
            , deeppink: 16716947
            , deepskyblue: 49151
            , dimgray: 6908265
            , dimgrey: 6908265
            , dodgerblue: 2003199
            , firebrick: 11674146
            , floralwhite: 16775920
            , forestgreen: 2263842
            , fuchsia: 16711935
            , gainsboro: 14474460
            , ghostwhite: 16316671
            , gold: 16766720
            , goldenrod: 14329120
            , gray: 8421504
            , green: 32768
            , greenyellow: 11403055
            , grey: 8421504
            , honeydew: 15794160
            , hotpink: 16738740
            , indianred: 13458524
            , indigo: 4915330
            , ivory: 16777200
            , khaki: 15787660
            , lavender: 15132410
            , lavenderblush: 16773365
            , lawngreen: 8190976
            , lemonchiffon: 16775885
            , lightblue: 11393254
            , lightcoral: 15761536
            , lightcyan: 14745599
            , lightgoldenrodyellow: 16448210
            , lightgray: 13882323
            , lightgreen: 9498256
            , lightgrey: 13882323
            , lightpink: 16758465
            , lightsalmon: 16752762
            , lightseagreen: 2142890
            , lightskyblue: 8900346
            , lightslategray: 7833753
            , lightslategrey: 7833753
            , lightsteelblue: 11584734
            , lightyellow: 16777184
            , lime: 65280
            , limegreen: 3329330
            , linen: 16445670
            , magenta: 16711935
            , maroon: 8388608
            , mediumaquamarine: 6737322
            , mediumblue: 205
            , mediumorchid: 12211667
            , mediumpurple: 9662683
            , mediumseagreen: 3978097
            , mediumslateblue: 8087790
            , mediumspringgreen: 64154
            , mediumturquoise: 4772300
            , mediumvioletred: 13047173
            , midnightblue: 1644912
            , mintcream: 16121850
            , mistyrose: 16770273
            , moccasin: 16770229
            , navajowhite: 16768685
            , navy: 128
            , oldlace: 16643558
            , olive: 8421376
            , olivedrab: 7048739
            , orange: 16753920
            , orangered: 16729344
            , orchid: 14315734
            , palegoldenrod: 15657130
            , palegreen: 10025880
            , paleturquoise: 11529966
            , palevioletred: 14381203
            , papayawhip: 16773077
            , peachpuff: 16767673
            , peru: 13468991
            , pink: 16761035
            , plum: 14524637
            , powderblue: 11591910
            , purple: 8388736
            , red: 16711680
            , rosybrown: 12357519
            , royalblue: 4286945
            , saddlebrown: 9127187
            , salmon: 16416882
            , sandybrown: 16032864
            , seagreen: 3050327
            , seashell: 16774638
            , sienna: 10506797
            , silver: 12632256
            , skyblue: 8900331
            , slateblue: 6970061
            , slategray: 7372944
            , slategrey: 7372944
            , snow: 16775930
            , springgreen: 65407
            , steelblue: 4620980
            , tan: 13808780
            , teal: 32896
            , thistle: 14204888
            , tomato: 16737095
            , turquoise: 4251856
            , violet: 15631086
            , wheat: 16113331
            , white: 16777215
            , whitesmoke: 16119285
            , yellow: 16776960
            , yellowgreen: 10145074
        }
        , Ea = {
            diffuse: {
                value: new ea(
                    15658734)
            }
            , opacity: {
                value: 1
            }
            , map: {
                value: null
            }
            , offsetRepeat: {
                value: new da(0, 0
                    , 1, 1)
            }
            , specularMap: {
                value: null
            }
            , alphaMap: {
                value: null
            }
            , envMap: {
                value: null
            }
            , flipEnvMap: {
                value: -1
            }
            , reflectivity: {
                value: 1
            }
            , refractionRatio: {
                value: .98
            }
        }
        , kb = {
            aoMap: {
                value: null
            }
            , aoMapIntensity: {
                value: 1
            }
        }
        , lb = {
            lightMap: {
                value: null
            }
            , lightMapIntensity: {
                value: 1
            }
        }
        , xb = {
            emissiveMap: {
                value: null
            }
        }
        , yb = {
            bumpMap: {
                value: null
            }
            , bumpScale: {
                value: 1
            }
        }
        , zb = {
            normalMap: {
                value: null
            }
            , normalScale: {
                value: new A(1, 1)
            }
        }
        , mb = {
            displacementMap: {
                value: null
            }
            , displacementScale: {
                value: 1
            }
            , displacementBias: {
                value: 0
            }
        }
        , Fa = {
            fogDensity: {
                value: 2.5E-4
            }
            , fogNear: {
                value: 1
            }
            , fogFar: {
                value: 2E3
            }
            , fogColor: {
                value: new ea(
                    16777215)
            }
        }
        , Ab = {
            ambientLightColor: {
                value: []
            }
            , directionalLights: {
                value: []
                , properties: {
                    direction: {}
                    , color: {}
                    , shadow: {}
                    , shadowBias: {}
                    , shadowRadius: {}
                    , shadowMapSize: {}
                }
            }
            , directionalShadowMap: {
                value: []
            }
            , directionalShadowMatrix: {
                value: []
            }
            , spotLights: {
                value: []
                , properties: {
                    color: {}
                    , position: {}
                    , direction: {}
                    , distance: {}
                    , coneCos: {}
                    , penumbraCos: {}
                    , decay: {}
                    , shadow: {}
                    , shadowBias: {}
                    , shadowRadius: {}
                    , shadowMapSize: {}
                }
            }
            , spotShadowMap: {
                value: []
            }
            , spotShadowMatrix: {
                value: []
            }
            , pointLights: {
                value: []
                , properties: {
                    color: {}
                    , position: {}
                    , decay: {}
                    , distance: {}
                    , shadow: {}
                    , shadowBias: {}
                    , shadowRadius: {}
                    , shadowMapSize: {}
                }
            }
            , pointShadowMap: {
                value: []
            }
            , pointShadowMatrix: {
                value: []
            }
            , hemisphereLights: {
                value: []
                , properties: {
                    direction: {}
                    , skyColor: {}
                    , groundColor: {}
                }
            }
            , rectAreaLights: {
                value: []
                , properties: {
                    color: {}
                    , position: {}
                    , width: {}
                    , height: {}
                }
            }
        }
        , Tc = {
            diffuse: {
                value: new ea(
                    15658734)
            }
            , opacity: {
                value: 1
            }
            , size: {
                value: 1
            }
            , scale: {
                value: 1
            }
            , map: {
                value: null
            }
            , offsetRepeat: {
                value: new da(0, 0
                    , 1, 1)
            }
        }
        , Oa = {
            basic: {
                uniforms: ta.merge([
                    Ea, kb
                    , lb, Fa])
                , vertexShader: W
                    .meshbasic_vert
                , fragmentShader: W
                    .meshbasic_frag
            }
            , lambert: {
                uniforms: ta.merge([
                    Ea




                    
                    , kb
                    , lb, xb
                    , Fa, Ab
                    , {
                        emissive: {
                            value: new ea(
                                0
                            )
                        }
                    }
                ])
                , vertexShader: W
                    .meshlambert_vert
                , fragmentShader: W
                    .meshlambert_frag
            }
            , phong: {
                uniforms: ta.merge([
                    Ea, kb
                    , lb, xb
                    , yb, zb
                    , mb, {
                        gradientMap: {
                            value: null
                        }
                }
                    
                    , Fa
                    , Ab, {
                        emissive: {
                            value: new ea(
                                0
                            )
                        }
                        , specular: {
                            value: new ea(
                                1118481
                            )
                        }
                        , shininess: {
                            value: 30
                        }
                }])
                , vertexShader: W
                    .meshphong_vert
                , fragmentShader: W
                    .meshphong_frag
            }
            , standard: {
                uniforms: ta.merge([
                    Ea, kb
                    , lb, xb
                    , yb, zb
                    , mb, {
                        roughnessMap: {
                            value: null
                        }
                }, {
                        metalnessMap: {
                            value: null
                        }
                }
                    
                    , Fa
                    , Ab, {
                        emissive: {
                            value: new ea(
                                0
                            )
                        }
                        , roughness: {
                            value: .5
                        }
                        , metalness: {
                            value: 0
                        }
                        , envMapIntensity: {
                            value: 1
                        }
                }])
                , vertexShader: W
                    .meshphysical_vert
                , fragmentShader: W
                    .meshphysical_frag
            }
            , points: {
                uniforms: ta.merge([
                    Tc, Fa])
                , vertexShader: W
                    .points_vert
                , fragmentShader: W
                    .points_frag
            }
            , dashed: {
                uniforms: ta.merge([
                    Ea, Fa
                    , {
                        scale: {
                            value: 1
                        }
                        , dashSize: {
                            value: 1
                        }
                        , totalSize: {
                            value: 2
                        }
                }])
                , vertexShader: W
                    .linedashed_vert
                , fragmentShader: W
                    .linedashed_frag
            }
            , depth: {
                uniforms: ta.merge([
                    Ea, mb])
                , vertexShader: W
                    .depth_vert
                , fragmentShader: W
                    .depth_frag
            }
            , normal: {
                uniforms: ta.merge([
                    Ea, yb
                    , zb, mb
                    , {
                        opacity: {
                            value: 1
                        }
                }])
                , vertexShader: W
                    .normal_vert
                , fragmentShader: W
                    .normal_frag
            }
            , cube: {
                uniforms: {
                    tCube: {
                        value: null
                    }
                    , tFlip: {
                        value: -1
                    }
                    , opacity: {
                        value: 1
                    }
                }
                , vertexShader: W
                    .cube_vert
                , fragmentShader: W
                    .cube_frag
            }
            , equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                    , tFlip: {
                        value: -1
                    }
                }
                , vertexShader: W
                    .equirect_vert
                , fragmentShader: W
                    .equirect_frag
            }
            , distanceRGBA: {
                uniforms: {
                    lightPos: {
                        value: new m
                    }
                }
                , vertexShader: W
                    .distanceRGBA_vert
                , fragmentShader: W
                    .distanceRGBA_frag
            }
        };
    Oa.physical = {
        uniforms: ta.merge([Oa
            .standard
            .uniforms, {
                clearCoat: {
                    value: 0
                }
                , clearCoatRoughness: {
                    value: 0
                }
        }])
        , vertexShader: W
            .meshphysical_vert
        , fragmentShader: W
            .meshphysical_frag
    };
    ob.prototype = {
        constructor: ob
        , set: function (a, b) {
            this.min.copy(
                a);
            this.max.copy(
                b);
            return this
        }
        , setFromPoints: function (
            a) {
            this
                .makeEmpty();
            for (var b = 0
                    , c = a
                    .length; b <
                c; b++) this
                .expandByPoint(
                    a[b]);
            return this
        }
        , setFromCenterAndSize: function () {
            var a = new A;
            return function (
                b, c) {
                var d =
                    a
                    .copy(
                        c
                    )
                    .multiplyScalar(
                        .5
                    );
                this.min
                    .copy(
                        b
                    )
                    .sub(
                        d
                    );
                this.max
                    .copy(
                        b
                    )
                    .add(
                        d
                    );
                return this
            }
        }()
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.min.copy(a
                .min);
            this.max.copy(a
                .max);
            return this
        }
        , makeEmpty: function () {
            this.min.x =
                this.min.y =
                Infinity;
            this.max.x =
                this.max
                .y = -
                Infinity;
            return this
        }
        , isEmpty: function () {
            return this.max
                .x < this
                .min.x ||
                this.max.y <
                this.min.y
        }
        , getCenter: function (
            a) {
            a = a || new A;
            return this
                .isEmpty() ?
                a.set(0
                    , 0) : a
                .addVectors(
                    this
                    .min
                    , this
                    .max
                )
                .multiplyScalar(
                    .5)
        }
        , getSize: function (
        a) {
            a = a || new A;
            return this
                .isEmpty() ?
                a.set(0
                    , 0) : a
                .subVectors(
                    this
                    .max
                    , this
                    .min
                )
        }
        , expandByPoint: function (
            a) {
            this.min.min(a);
            this.max.max(a);
            return this
        }
        , expandByVector: function (
            a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        }
        , expandByScalar: function (
            a) {
            this.min
                .addScalar(-
                    a);
            this.max
                .addScalar(
                    a);
            return this
        }
        , containsPoint: function (
            a) {
            return a.x <
                this.min
                .x || a.x >
                this.max
                .x || a.y <
                this.min
                .y || a.y >
                this.max.y ?
                !1 : !0
        }
        , containsBox: function (
            a) {
            return this.min
                .x <= a.min
                .x && a.max
                .x <= this
                .max.x &&
                this.min
                .y <= a.min
                .y && a.max
                .y <= this
                .max.y
        }
        , getParameter: function (
            a, b) {
            return (b ||
                    new A)
                .set((a.x -
                        this
                        .min
                        .x
                    ) /
                    (this
                        .max
                        .x -
                        this
                        .min
                        .x)
                    , (a.y -
                        this
                        .min
                        .y
                    ) /
                    (this
                        .max
                        .y -
                        this
                        .min
                        .y))
        }
        , intersectsBox: function (
            a) {
            return a.max.x <
                this.min
                .x || a.min
                .x > this
                .max.x || a
                .max.y <
                this.min
                .y || a.min
                .y > this
                .max.y ? !
                1 : !0
        }
        , clampPoint: function (
            a, b) {
            return (b ||
                    new A)
                .copy(a)
                .clamp(this
                    .min
                    , this
                    .max
                )
        }
        , distanceToPoint: function () {
            var a = new A;
            return function (
                b) {
                return a
                    .copy(
                        b
                    )
                    .clamp(
                        this
                        .min
                        , this
                        .max
                    )
                    .sub(
                        b
                    )
                    .length()
            }
        }()
        , intersect: function (
            a) {
            this.min.max(a
                .min);
            this.max.min(a
                .max);
            return this
        }
        , union: function (a) {
            this.min.min(a
                .min);
            this.max.max(a
                .max);
            return this
        }
        , translate: function (
            a) {
            this.min.add(a);
            this.max.add(a);
            return this
        }
        , equals: function (a) {
            return a.min
                .equals(this
                    .min) &&
                a.max
                .equals(this
                    .max)
        }
    };
    Ka.prototype = {
        constructor: Ka
        , isWebGLRenderTarget: !
            0
        , setSize: function (a
            , b) {
            if (this
                .width !==
                a || this
                .height !==
                b) this
                .width = a
                , this
                .height = b
                , this
                .dispose();
            this.viewport
                .set(0, 0
                    , a, b);
            this.scissor
                .set(0, 0
                    , a, b)
        }
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.width = a
                .width;
            this.height = a
                .height;
            this.viewport
                .copy(a
                    .viewport
                );
            this.texture = a
                .texture
                .clone();
            this.depthBuffer =
                a
                .depthBuffer;
            this.stencilBuffer =
                a
                .stencilBuffer;
            this.depthTexture =
                a
                .depthTexture;
            return this
        }
        , dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    };
    Object.assign(Ka.prototype, Ba
        .prototype);
    var wc = 0;
    ia.prototype = {
        constructor: ia
        , isMaterial: !0
        , get needsUpdate() {
            return this
                ._needsUpdate
        }
        , set needsUpdate(a) {
            !0 === a && this
                .update();
            this._needsUpdate =
                a
        }
        , setValues: function (
            a) {
            if (void 0 !==
                a)
                for (var b in
                        a) {
                    var c =
                        a[
                            b
                            ];
                    if (void 0 ===
                        c)
                        console
                        .warn(
                            "THREE.Material: '" +
                            b +
                            "' parameter is undefined."
                        );
                    else {
                        var d =
                            this[
                                b
                            ];
                        void 0
                            ===
                            d ?
                            console
                            .warn(
                                "THREE." +
                                this
                                .type +
                                ": '" +
                                b +
                                "' is not a property of this material."
                            ) :
                            d &&
                            d
                            .isColor ?
                            d
                            .set(
                                c
                            ) :
                            d &&
                            d
                            .isVector3 &&
                            c &&
                            c
                            .isVector3 ?
                            d
                            .copy(
                                c
                            ) :
                            this[
                                b
                            ] =
                            "overdraw" ===
                            b ?
                            Number(
                                c
                            ) :
                            c
                    }
                }
        }
        , toJSON: function (a) {
            function b(a) {
                var b = []
                    , c;
                for (c in
                    a) {
                    var d =
                        a[
                            c
                            ];
                    delete d
                        .metadata;
                    b.push(
                        d
                        )
                }
                return b
            }
            var c =
                void 0 ===
                a;
            c && (a = {
                textures: {}
                , images: {}
            });
            var d = {
                metadata: {
                    version: 4.4
                    , type: "Material"
                    , generator: "Material.toJSON"
                }
            };
            d.uuid = this
                .uuid;
            d.type = this
                .type;
            "" !== this
                .name && (d
                    .name =
                    this
                    .name);
            this.color &&
                this.color
                .isColor &&
                (d.color =
                    this
                    .color
                    .getHex()
                );
            void 0 !== this
                .roughness &&
                (d.roughness =
                    this
                    .roughness
                );
            void 0 !== this
                .metalness &&
                (d.metalness =
                    this
                    .metalness
                );
            this.emissive &&
                this
                .emissive
                .isColor &&
                (d.emissive =
                    this
                    .emissive
                    .getHex()
                );
            this.specular &&
                this
                .specular
                .isColor &&
                (d.specular =
                    this
                    .specular
                    .getHex()
                );
            void 0 !== this
                .shininess &&
                (d.shininess =
                    this
                    .shininess
                );
            void 0 !== this
                .clearCoat &&
                (d.clearCoat =
                    this
                    .clearCoat
                );
            void 0 !== this
                .clearCoatRoughness &&
                (d.clearCoatRoughness =
                    this
                    .clearCoatRoughness
                );
            this.map && this
                .map
                .isTexture &&
                (d.map =
                    this.map
                    .toJSON(
                        a)
                    .uuid);
            this.alphaMap &&
                this
                .alphaMap
                .isTexture &&
                (d.alphaMap =
                    this
                    .alphaMap
                    .toJSON(
                        a)
                    .uuid);
            this.lightMap &&
                this
                .lightMap
                .isTexture &&
                (d.lightMap =
                    this
                    .lightMap
                    .toJSON(
                        a)
                    .uuid);
            this.bumpMap &&
                this.bumpMap
                .isTexture &&
                (d.bumpMap =
                    this
                    .bumpMap
                    .toJSON(
                        a)
                    .uuid, d
                    .bumpScale =
                    this
                    .bumpScale
                );
            this.normalMap &&
                this
                .normalMap
                .isTexture &&
                (d.normalMap =
                    this
                    .normalMap
                    .toJSON(
                        a)
                    .uuid, d
                    .normalScale =
                    this
                    .normalScale
                    .toArray()
                );
            this.displacementMap &&
                this
                .displacementMap
                .isTexture &&
                (d.displacementMap =
                    this
                    .displacementMap
                    .toJSON(
                        a)
                    .uuid, d
                    .displacementScale =
                    this
                    .displacementScale
                    , d
                    .displacementBias =
                    this
                    .displacementBias
                );
            this.roughnessMap &&
                this
                .roughnessMap
                .isTexture &&
                (d.roughnessMap =
                    this
                    .roughnessMap
                    .toJSON(
                        a)
                    .uuid);
            this.metalnessMap &&
                this
                .metalnessMap
                .isTexture &&
                (d.metalnessMap =
                    this
                    .metalnessMap
                    .toJSON(
                        a)
                    .uuid);
            this.emissiveMap &&
                this
                .emissiveMap
                .isTexture &&
                (d.emissiveMap =
                    this
                    .emissiveMap
                    .toJSON(
                        a)
                    .uuid);
            this.specularMap &&
                this
                .specularMap
                .isTexture &&
                (d.specularMap =
                    this
                    .specularMap
                    .toJSON(
                        a)
                    .uuid);
            this.envMap &&
                this.envMap
                .isTexture &&
                (d.envMap =
                    this
                    .envMap
                    .toJSON(
                        a)
                    .uuid, d
                    .reflectivity =
                    this
                    .reflectivity
                );
            this.gradientMap &&
                this
                .gradientMap
                .isTexture &&
                (d.gradientMap =
                    this
                    .gradientMap
                    .toJSON(
                        a)
                    .uuid);
            void 0 !== this
                .size && (d
                    .size =
                    this
                    .size);
            void 0 !== this
                .sizeAttenuation &&
                (d.sizeAttenuation =
                    this
                    .sizeAttenuation

                );
            1 !== this
                .blending &&
                (d.blending =
                    this
                    .blending
                );
            2 !== this
                .shading &&
                (d.shading =
                    this
                    .shading
                );
            0 !== this
                .side && (d
                    .side =
                    this
                    .side);
            0 !== this
                .vertexColors &&
                (d.vertexColors =
                    this
                    .vertexColors
                );
            1 > this
                .opacity &&
                (d.opacity =
                    this
                    .opacity
                );
            !0 === this
                .transparent &&
                (d.transparent =
                    this
                    .transparent
                );
            d.depthFunc =
                this
                .depthFunc;
            d.depthTest =
                this
                .depthTest;
            d.depthWrite =
                this
                .depthWrite;
            0 < this
                .alphaTest &&
                (d.alphaTest =
                    this
                    .alphaTest
                );
            !0 === this
                .premultipliedAlpha &&
                (d.premultipliedAlpha =
                    this
                    .premultipliedAlpha
                );
            !0 === this
                .wireframe &&
                (d.wireframe =
                    this
                    .wireframe
                );
            1 < this
                .wireframeLinewidth &&
                (d.wireframeLinewidth =
                    this
                    .wireframeLinewidth
                );
            "round" !== this
                .wireframeLinecap &&
                (d.wireframeLinecap =
                    this
                    .wireframeLinecap
                );
            "round" !== this
                .wireframeLinejoin &&
                (d.wireframeLinejoin =
                    this
                    .wireframeLinejoin
                );
            d.skinning =
                this
                .skinning;
            d.morphTargets =
                this
                .morphTargets;
            c && (c = b(a
                    .textures
                )
                , a = b(
                    a
                    .images
                )
                , 0 < c
                .length &&
                (d.textures =
                    c)
                , 0 < a
                .length &&
                (d.images =
                    a));
            return d
        }
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.name = a
                .name;
            this.fog = a
                .fog;
            this.lights = a
                .lights;
            this.blending =
                a.blending;
            this.side = a
                .side;
            this.shading = a
                .shading;
            this.vertexColors =
                a
                .vertexColors;
            this.opacity = a
                .opacity;
            this.transparent =
                a
                .transparent;
            this.blendSrc =
                a.blendSrc;
            this.blendDst =
                a.blendDst;
            this.blendEquation =
                a
                .blendEquation;
            this.blendSrcAlpha =
                a
                .blendSrcAlpha;
            this.blendDstAlpha =
                a
                .blendDstAlpha;
            this.blendEquationAlpha =
                a
                .blendEquationAlpha;
            this.depthFunc =
                a.depthFunc;
            this.depthTest =
                a.depthTest;
            this.depthWrite =
                a
                .depthWrite;
            this.colorWrite =
                a
                .colorWrite;
            this.precision =
                a.precision;
            this.polygonOffset =
                a
                .polygonOffset;
            this.polygonOffsetFactor =
                a
                .polygonOffsetFactor;
            this.polygonOffsetUnits =
                a
                .polygonOffsetUnits;
            this.alphaTest =
                a.alphaTest;
            this.premultipliedAlpha =
                a
                .premultipliedAlpha;
            this.overdraw =
                a.overdraw;
            this.visible = a
                .visible;
            this.clipShadows =
                a
                .clipShadows;
            this.clipIntersection =
                a
                .clipIntersection;
            a = a
                .clippingPlanes;
            var b = null;
            if (null !== a)
                for (var c =
                        a
                        .length
                        , b =
                        Array(
                            c
                        )
                        , d =
                        0; d !==
                    c; ++d)
                    b[d] =
                    a[d]
                    .clone();
            this.clippingPlanes =
                b;
            return this
        }
        , update: function () {
            this.dispatchEvent({
                type: "update"
            })
        }
        , dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    };
    Object.assign(ia.prototype, Ba
        .prototype);
    Ha.prototype = Object.create(ia
        .prototype);
    Ha.prototype.constructor = Ha;
    Ha.prototype
        .isShaderMaterial = !0;
    Ha.prototype.copy = function (
        a) {
        ia.prototype.copy.call(
            this, a);
        this.fragmentShader = a
            .fragmentShader;
        this.vertexShader =
            a.vertexShader;
        this.uniforms = ta
            .clone(a.uniforms);
        this.defines = a
            .defines;
        this.wireframe = a
            .wireframe;
        this.wireframeLinewidth =
            a
            .wireframeLinewidth;
        this.lights = a.lights;
        this.clipping = a
            .clipping;
        this.skinning = a
            .skinning;
        this.morphTargets = a
            .morphTargets;
        this.morphNormals = a
            .morphNormals;
        this.extensions = a
            .extensions;
        return this
    };
    Ha.prototype.toJSON = function (
        a) {
        a = ia.prototype.toJSON
            .call(this, a);
        a.uniforms = this
            .uniforms;
        a.vertexShader = this
            .vertexShader;
        a.fragmentShader = this
            .fragmentShader;
        return a
    };
    qa.prototype =
        Object.create(ia.prototype);
    qa.prototype.constructor = qa;
    qa.prototype
        .isMeshDepthMaterial = !0;
    qa.prototype.copy = function (
        a) {
        ia.prototype.copy.call(
            this, a);
        this.depthPacking = a
            .depthPacking;
        this.skinning = a
            .skinning;
        this.morphTargets = a
            .morphTargets;
        this.map = a.map;
        this.alphaMap = a
            .alphaMap;
        this.displacementMap = a
            .displacementMap;
        this.displacementScale =
            a.displacementScale;
        this.displacementBias =
            a.displacementBias;
        this.wireframe = a
            .wireframe;
        this.wireframeLinewidth =
            a
            .wireframeLinewidth;
        return this
    };
    ra.prototype = {
        constructor: ra
        , isBox3: !0
        , set: function (a, b) {
            this.min.copy(
                a);
            this.max.copy(
                b);
            return this
        }
        , setFromArray: function (
            a) {
            for (var b =
                    Infinity
                    , c =
                    Infinity
                    , d =
                    Infinity
                    , e = -
                    Infinity
                    , f = -
                    Infinity
                    , g = -
                    Infinity
                    , h = 0
                    , k = a
                    .length; h <
                k; h += 3) {
                var n = a[
                        h]
                    , l = a[
                        h +
                        1]
                    , m = a[
                        h +
                        2];
                n < b && (
                    b =
                    n);
                l < c && (
                    c =
                    l);
                m < d && (
                    d =
                    m);
                n > e && (
                    e =
                    n);
                l > f && (
                    f =
                    l);
                m > g && (
                    g =
                    m)
            }
            this.min.set(b
                , c, d);
            this.max.set(e
                , f, g);
            return this
        }
        , setFromBufferAttribute: function (
            a) {
            for (var b =
                    Infinity
                    , c =
                    Infinity
                    , d =
                    Infinity
                    , e = -
                    Infinity
                    , f = -
                    Infinity
                    , g = -
                    Infinity
                    , h = 0
                    , k = a
                    .count; h <
                k; h++) {
                var n =
                    a.getX(
                        h)
                    , l = a
                    .getY(
                        h)
                    , m = a
                    .getZ(
                        h);
                n < b && (
                    b =
                    n);
                l < c && (
                    c =
                    l);
                m < d && (
                    d =
                    m);
                n > e && (
                    e =
                    n);
                l > f && (
                    f =
                    l);
                m > g && (
                    g =
                    m)
            }
            this.min.set(b
                , c, d);
            this.max.set(e
                , f, g);
            return this
        }
        , setFromPoints: function (
            a) {
            this
                .makeEmpty();
            for (var b = 0
                    , c = a
                    .length; b <
                c; b++) this
                .expandByPoint(
                    a[b]);
            return this
        }
        , setFromCenterAndSize: function () {
            var a = new m;
            return function (
                b, c) {
                var d =
                    a
                    .copy(
                        c
                    )
                    .multiplyScalar(
                        .5
                    );
                this.min
                    .copy(
                        b
                    )
                    .sub(
                        d
                    );
                this.max
                    .copy(
                        b
                    )
                    .add(
                        d
                    );
                return this
            }
        }()
        , setFromObject: function (
            a) {
            this
                .makeEmpty();
            return this
                .expandByObject(
                    a)
        }
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.min.copy(a
                .min);
            this.max.copy(a
                .max);
            return this
        }
        , makeEmpty: function () {
            this.min.x =
                this.min.y =
                this.min.z =
                Infinity;
            this.max.x =
                this.max.y =
                this.max
                .z = -
                Infinity;
            return this
        }
        , isEmpty: function () {
            return this.max
                .x < this
                .min.x ||
                this.max.y <
                this.min
                .y || this
                .max.z <
                this.min.z
        }
        , getCenter: function (
            a) {
            a = a || new m;
            return this
                .isEmpty() ?
                a.set(0, 0
                    , 0) : a
                .addVectors(
                    this
                    .min
                    , this
                    .max
                )
                .multiplyScalar(
                    .5)
        }
        , getSize: function (
        a) {
            a = a || new m;
            return this
                .isEmpty() ?
                a.set(0, 0
                    , 0) : a
                .subVectors(
                    this
                    .max
                    , this
                    .min
                )
        }
        , expandByPoint: function (
            a) {
            this.min.min(a);
            this.max.max(a);
            return this
        }
        , expandByVector: function (
            a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        }
        , expandByScalar: function (
            a) {
            this.min
                .addScalar(-
                    a);
            this.max
                .addScalar(
                    a);
            return this
        }
        , expandByObject: function () {
            var a = new m;
            return function (
                b) {
                var c =
                    this;
                b.updateMatrixWorld(
                    !
                    0
                );
                b.traverse(
                    function (
                        b
                    ) {
                        var e
                            , f;
                        e = b
                            .geometry;
                        if (void 0 !==
                            e
                        )
                            if (e
                                .isGeometry
                            ) {
                                var g =
                                    e
                                    .vertices;
                                e =
                                    0;
                                for (
                                    f =
                                    g
                                    .length; e <
                                    f; e++
                                )
                                    a
                                    .copy(
                                        g[
                                            e
                                            ]
                                    )
                                    , a
                                    .applyMatrix4(
                                        b
                                        .matrixWorld
                                    )
                                    , c
                                    .expandByPoint(
                                        a
                                    )
                            } else if (
                            e
                            .isBufferGeometry &&
                            (g = e
                                .attributes
                                .position
                                , void 0 !==
                                g
                            )
                        )
                            for (
                                e =
                                0
                                , f =
                                g
                                .count; e <
                                f; e++
                            )
                                a
                                .fromBufferAttribute(
                                    g
                                    , e
                                )
                                .applyMatrix4(
                                    b
                                    .matrixWorld
                                )
                                , c
                                .expandByPoint(
                                    a
                                )
                    }
                );
                return this
            }
        }()
        , containsPoint: function (
            a) {
            return a.x <
                this.min
                .x || a.x >
                this.max
                .x || a.y <
                this.min
                .y || a.y >
                this.max
                .y || a.z <
                this.min
                .z || a.z >
                this.max.z ?
                !1 : !0
        }
        , containsBox: function (
            a) {
            return this.min
                .x <= a.min
                .x && a.max
                .x <= this
                .max.x &&
                this.min
                .y <= a.min
                .y && a.max
                .y <= this
                .max.y &&
                this.min
                .z <= a.min
                .z && a.max
                .z <= this
                .max.z
        }
        , getParameter: function (
            a
            , b) {
            return (b ||
                    new m)
                .set((a.x -
                        this
                        .min
                        .x
                    ) /
                    (this
                        .max
                        .x -
                        this
                        .min
                        .x)
                    , (a.y -
                        this
                        .min
                        .y
                    ) /
                    (this
                        .max
                        .y -
                        this
                        .min
                        .y)
                    , (a.z -
                        this
                        .min
                        .z
                    ) /
                    (this
                        .max
                        .z -
                        this
                        .min
                        .z))
        }
        , intersectsBox: function (
            a) {
            return a.max.x <
                this.min
                .x || a.min
                .x > this
                .max.x || a
                .max.y <
                this.min
                .y || a.min
                .y > this
                .max.y || a
                .max.z <
                this.min
                .z || a.min
                .z > this
                .max.z ? !
                1 : !0
        }
        , intersectsSphere: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new m
                        );
                this.clampPoint(
                    b
                    .center
                    , a
                );
                return a
                    .distanceToSquared(
                        b
                        .center
                    ) <=
                    b
                    .radius *
                    b
                    .radius
            }
        }()
        , intersectsPlane: function (
            a) {
            var b
                , c;
            0 < a.normal.x ?
                (b = a
                    .normal
                    .x *
                    this.min
                    .x, c =
                    a.normal
                    .x *
                    this.max
                    .x) : (
                    b = a
                    .normal
                    .x *
                    this.max
                    .x, c =
                    a.normal
                    .x *
                    this.min
                    .x);
            0 < a.normal.y ?
                (b += a
                    .normal
                    .y *
                    this.min
                    .y, c +=
                    a.normal
                    .y *
                    this.max
                    .y) : (
                    b += a
                    .normal
                    .y *
                    this.max
                    .y, c +=
                    a.normal
                    .y *
                    this.min
                    .y);
            0 < a.normal.z ?
                (b += a
                    .normal
                    .z *
                    this.min
                    .z, c +=
                    a.normal
                    .z *
                    this.max
                    .z) : (
                    b += a
                    .normal
                    .z *
                    this.max
                    .z, c +=
                    a.normal
                    .z *
                    this.min
                    .z);
            return b <= a
                .constant &&
                c >= a
                .constant
        }
        , clampPoint: function (
            a, b) {
            return (b ||
                    new m)
                .copy(a)
                .clamp(this
                    .min
                    , this
                    .max
                )
        }
        , distanceToPoint: function () {
            var a = new m;
            return function (
                b) {
                return a
                    .copy(
                        b
                    )
                    .clamp(
                        this
                        .min
                        , this
                        .max
                    )
                    .sub(
                        b
                    )
                    .length()
            }
        }()
        , getBoundingSphere: function () {
            var a = new m;
            return function (
                b) {
                b = b ||
                    new Ia;
                this.getCenter(
                    b
                    .center
                );
                b.radius =
                    .5 *
                    this
                    .getSize(
                        a
                    )
                    .length();
                return b
            }
        }()
        , intersect: function (
            a) {
            this.min.max(a
                .min);
            this.max.min(a
                .max);
            this.isEmpty() &&
                this
                .makeEmpty();
            return this
        }
        , union: function (a) {
            this.min.min(a
                .min);
            this.max.max(a
                .max);
            return this
        }
        , applyMatrix4: function () {
            var a = [new m
                , new m
                , new m
                , new m
                , new m
                , new m
                , new m
                , new m];
            return function (
                b) {
                if (this
                    .isEmpty()
                )
                    return this;
                a[0].set(
                        this
                        .min
                        .x
                        , this
                        .min
                        .y
                        , this
                        .min
                        .z
                    )
                    .applyMatrix4(
                        b
                    );
                a[1].set(
                        this
                        .min
                        .x
                        , this
                        .min
                        .y
                        , this
                        .max
                        .z
                    )
                    .applyMatrix4(
                        b
                    );
                a[2].set(
                        this
                        .min
                        .x
                        , this
                        .max
                        .y
                        , this
                        .min
                        .z
                    )
                    .applyMatrix4(
                        b
                    );
                a[3].set(
                        this
                        .min
                        .x
                        , this
                        .max
                        .y
                        , this
                        .max
                        .z
                    )
                    .applyMatrix4(
                        b
                    );
                a[4].set(
                        this
                        .max
                        .x
                        , this
                        .min
                        .y
                        , this
                        .min
                        .z
                    )
                    .applyMatrix4(
                        b
                    );
                a[5].set(
                        this
                        .max
                        .x
                        , this
                        .min
                        .y
                        , this
                        .max
                        .z
                    )
                    .applyMatrix4(
                        b
                    );
                a[6].set(
                        this
                        .max
                        .x
                        , this
                        .max
                        .y
                        , this
                        .min
                        .z
                    )
                    .applyMatrix4(
                        b
                    );
                a[7].set(
                        this
                        .max
                        .x
                        , this
                        .max
                        .y
                        , this
                        .max
                        .z
                    )
                    .applyMatrix4(
                        b
                    );
                this.setFromPoints(
                    a
                );
                return this
            }
        }()
        , translate: function (
            a) {
            this.min.add(a);
            this.max.add(a);
            return this
        }
        , equals: function (a) {
            return a.min
                .equals(this
                    .min) &&
                a.max
                .equals(this
                    .max)
        }
    };
    Ia.prototype = {
        constructor: Ia
        , set: function (a, b) {
            this.center
                .copy(a);
            this.radius = b;
            return this
        }
        , setFromPoints: function () {
            var a;
            return function (
                b, c) {
                void 0
                    ===
                    a &&
                    (a =
                        new ra
                        );
                var d =
                    this
                    .center;
                void 0
                    !==
                    c ?
                    d
                    .copy(
                        c
                    ) :
                    a
                    .setFromPoints(
                        b
                    )
                    .getCenter(
                        d
                    );
                for (var e =
                        0
                        , f =
                        0
                        , g =
                        b
                        .length; f <
                    g; f++
                )
                    e =
                    Math
                    .max(
                        e
                        , d
                        .distanceToSquared(
                            b[
                                f
                                ]
                        )
                    );
                this.radius =
                    Math
                    .sqrt(
                        e
                    );
                return this
            }
        }()
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.center
                .copy(a
                    .center
                );
            this.radius = a
                .radius;
            return this
        }
        , empty: function () {
            return 0 >= this
                .radius
        }
        , containsPoint: function (
            a) {
            return a
                .distanceToSquared(
                    this
                    .center
                ) <=
                this
                .radius *
                this.radius
        }
        , distanceToPoint: function (
            a) {
            return a
                .distanceTo(
                    this
                    .center
                ) - this
                .radius
        }
        , intersectsSphere: function (
            a) {
            var b = this
                .radius + a
                .radius;
            return a.center
                .distanceToSquared(
                    this
                    .center
                ) <= b *
                b
        }
        , intersectsBox: function (
            a) {
            return a
                .intersectsSphere(
                    this)
        }
        , intersectsPlane: function (
            a) {
            return Math.abs(
                    this
                    .center
                    .dot(a
                        .normal
                    ) -
                    a
                    .constant
                ) <=
                this.radius
        }
        , clampPoint: function (
            a, b) {
            var c = this
                .center
                .distanceToSquared(
                    a)
                , d = b ||
                new m;
            d.copy(a);
            c > this
                .radius *
                this
                .radius && (
                    d.sub(
                        this
                        .center
                    )
                    .normalize()
                    , d
                    .multiplyScalar(
                        this
                        .radius
                    )
                    .add(
                        this
                        .center
                    ));
            return d
        }
        , getBoundingBox: function (
            a) {
            a = a || new ra;
            a.set(this
                .center
                , this
                .center);
            a.expandByScalar(
                this
                .radius);
            return a
        }
        , applyMatrix4: function (
            a) {
            this.center
                .applyMatrix4(
                    a);
            this.radius *= a
                .getMaxScaleOnAxis();
            return this
        }
        , translate: function (
            a) {
            this.center.add(
                a);
            return this
        }
        , equals: function (a) {
            return a.center
                .equals(this
                    .center
                ) &&
                a.radius ===
                this.radius
        }
    };
    pa.prototype = {
        constructor: pa
        , isMatrix3: !0
        , set: function (a, b,
            c
            , d, e, f, g, h,
            k
        ) {
            var n = this
                .elements;
            n[0] = a;
            n[1] = d;
            n[2] = g;
            n[3] = b;
            n[4] = e;
            n[5] = h;
            n[6] = c;
            n[7] = f;
            n[8] = k;
            return this
        }
        , identity: function () {
            this.set(1, 0
                , 0, 0,
                1
                , 0, 0,
                0
                , 1);
            return this
        }
        , clone: function () {
            return (new this
                    .constructor
                )
                .fromArray(
                    this
                    .elements
                )
        }
        , copy: function (a) {
            a = a.elements;
            this.set(a[0]
                , a[3],
                a[
                    6]
                , a[1],
                a[
                    4]
                , a[7],
                a[
                    2]
                , a[5],
                a[
                    8]);
            return this
        }
        , setFromMatrix4: function (
            a) {
            a = a.elements;
            this.set(a[0]
                , a[4],
                a[
                    8]
                , a[1],
                a[
                    5]
                , a[9]
                , a[2]
                , a[6],
                a[
                    10]);
            return this
        }
        , applyToBufferAttribute: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new m
                        );
                for (var c =
                        0
                        , d =
                        b
                        .count; c <
                    d; c++
                ) a
                    .x =
                    b
                    .getX(
                        c
                    )
                    , a
                    .y =
                    b
                    .getY(
                        c
                    )
                    , a
                    .z =
                    b
                    .getZ(
                        c
                    )
                    , a
                    .applyMatrix3(
                        this
                    )
                    , b
                    .setXYZ(
                        c
                        , a
                        .x
                        , a
                        .y
                        , a
                        .z
                    );
                return b
            }
        }()
        , multiplyScalar: function (
            a) {
            var b = this
                .elements;
            b[0] *= a;
            b[3] *= a;
            b[6] *= a;
            b[1] *= a;
            b[4] *= a;
            b[7] *= a;
            b[2] *= a;
            b[5] *= a;
            b[8] *= a;
            return this
        }
        , determinant: function () {
            var a = this
                .elements
                , b = a[0]
                , c = a[1]
                , d = a[2]
                , e = a[3]
                , f = a[4]
                , g = a[5]
                , h = a[6]
                , k = a[7]
                , a = a[8];
            return b * f *
                a - b * g *
                k - c * e *
                a + c * g *
                h + d * e *
                k - d * f *
                h
        }
        , getInverse: function (
            a, b) {
            a && a
                .isMatrix4 &&
                console
                .error(
                    "THREE.Matrix3.getInverse no longer takes a Matrix4 argument."
                );
            var c = a
                .elements
                , d = this
                .elements
                , e = c[0]
                , f = c[1]
                , g = c[2]
                , h = c[3]
                , k = c[4]
                , n = c[5]
                , l = c[6]
                , m = c[7]
                , c = c[8]
                , p = c *
                k - n * m
                , q = n *
                l - c * h
                , x = m *
                h - k * l
                , w = e *
                p + f * q +
                g * x;
            if (0 === w) {
                if (!0 ===
                    b) throw Error(
                    "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0"
                );
                console
                    .warn(
                        "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0"
                    );
                return this
                    .identity()
            }
            w = 1 / w;
            d[0] = p * w;
            d[1] = (g * m -
                    c * f) *
                w;
            d[2] = (n * f -
                    g * k) *
                w;
            d[3] = q * w;
            d[4] = (c * e -
                    g * l) *
                w;
            d[5] = (g * h -
                    n * e) *
                w;
            d[6] = x * w;
            d[7] = (f * l -
                    m * e) *
                w;
            d[8] = (k * e -
                    f * h) *
                w;
            return this
        }
        , transpose: function () {
            var a, b = this
                .elements;
            a = b[1];
            b[1] = b[3];
            b[3] = a;
            a = b[2];
            b[2] = b[6];
            b[6] = a;
            a = b[5];
            b[5] = b[7];
            b[7] = a;
            return this
        }
        , getNormalMatrix: function (
            a) {
            return this
                .setFromMatrix4(
                    a)
                .getInverse(
                    this)
                .transpose()
        }
        , transposeIntoArray: function (
            a) {
            var b = this
                .elements;
            a[0] = b[0];
            a[1] = b[3];
            a[2] = b[6];
            a[3] = b[1];
            a[4] = b[4];
            a[5] = b[7];
            a[6] = b[2];
            a[7] = b[5];
            a[8] = b[8];
            return this
        }
        , fromArray: function (
            a
            , b) {
            void 0 === b &&
                (b = 0);
            for (var c =
                    0; 9 >
                c; c++) this
                .elements[
                    c] = a[
                    c +
                    b];
            return this
        }
        , toArray: function (a
            , b) {
            void 0 === a &&
                (a = []);
            void 0 === b &&
                (b = 0);
            var c = this
                .elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            return a
        }
    };
    ja.prototype = {
        constructor: ja
        , set: function (a, b) {
            this.normal
                .copy(a);
            this.constant =
                b;
            return this
        }
        , setComponents: function (
            a, b, c, d) {
            this.normal.set(
                a, b, c);
            this.constant =
                d;
            return this
        }
        , setFromNormalAndCoplanarPoint: function (
            a
            , b) {
            this.normal
                .copy(a);
            this.constant = -
                b.dot(this
                    .normal
                );
            return this
        }
        , setFromCoplanarPoints: function () {
            var a = new m
                , b = new m;
            return function (
                c, d, e
            ) {
                d = a
                    .subVectors(
                        e
                        , d
                    )
                    .cross(
                        b
                        .subVectors(
                            c
                            , d
                        )
                    )
                    .normalize();
                this.setFromNormalAndCoplanarPoint(
                    d
                    , c
                );
                return this
            }
        }()
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.normal
                .copy(a
                    .normal
                );
            this.constant =
                a.constant;
            return this
        }
        , normalize: function () {
            var a = 1 / this
                .normal
                .length();
            this.normal
                .multiplyScalar(
                    a);
            this.constant *=
                a;
            return this
        }
        , negate: function () {
            this.constant *=
                -1;
            this.normal
                .negate();
            return this
        }
        , distanceToPoint: function (
            a) {
            return this
                .normal.dot(
                    a) +
                this
                .constant
        }
        , distanceToSphere: function (
            a) {
            return this
                .distanceToPoint(
                    a.center
                ) - a
                .radius
        }
        , projectPoint: function (
            a, b) {
            return this
                .orthoPoint(
                    a, b)
                .sub(a)
                .negate()
        }
        , orthoPoint: function (
            a, b) {
            var c = this
                .distanceToPoint(
                    a);
            return (b ||
                    new m)
                .copy(this
                    .normal)
                .multiplyScalar(
                    c)
        }
        , intersectLine: function () {
            var a = new m;
            return function (
                b, c) {
                var d =
                    c ||
                    new m
                    , e =
                    b
                    .delta(
                        a
                    )
                    , f =
                    this
                    .normal
                    .dot(
                        e
                    );
                if (0 ===
                    f) {
                    if (0 ===
                        this
                        .distanceToPoint(
                            b
                            .start
                        )
                    )
                        return d
                            .copy(
                                b
                                .start
                            )
                } else
                    return f = -
                        (b.start
                            .dot(
                                this
                                .normal
                            ) +
                            this
                            .constant
                        ) /
                        f
                        , 0 >
                        f ||
                        1 <
                        f ?
                        void 0 :
                        d
                        .copy(
                            e
                        )
                        .multiplyScalar(
                            f
                        )
                        .add(
                            b
                            .start
                        )
            }
        }()
        , intersectsLine: function (
            a) {
            var b = this
                .distanceToPoint(
                    a.start
                );
            a = this
                .distanceToPoint(
                    a.end);
            return 0 > b &&
                0 < a || 0 >
                a && 0 < b
        }
        , intersectsBox: function (
            a) {
            return a
                .intersectsPlane(
                    this)
        }
        , intersectsSphere: function (
            a) {
            return a
                .intersectsPlane(
                    this)
        }
        , coplanarPoint: function (
            a) {
            return (a ||
                    new m)
                .copy(this
                    .normal)
                .multiplyScalar(
                    -this
                    .constant
                )
        }
        , applyMatrix4: function () {
            var a = new m
                , b =
                new pa;
            return function (
                c, d) {
                var e =
                    this
                    .coplanarPoint(
                        a
                    )
                    .applyMatrix4(
                        c
                    )
                    , f =
                    d ||
                    b
                    .getNormalMatrix(
                        c
                    )
                    , f =
                    this
                    .normal
                    .applyMatrix3(
                        f
                    )
                    .normalize();
                this.constant = -
                    e
                    .dot(
                        f
                    );
                return this
            }
        }()
        , translate: function (
            a) {
            this.constant -=
                a.dot(this
                    .normal
                );
            return this
        }
        , equals: function (a) {
            return a.normal
                .equals(this
                    .normal
                ) && a
                .constant ===
                this
                .constant
        }
    };
    $a.prototype = {
        constructor: $a
        , set: function (a, b,
            c
            , d, e, f) {
            var g = this
                .planes;
            g[0].copy(a);
            g[1].copy(b);
            g[2].copy(c);
            g[3].copy(d);
            g[4].copy(e);
            g[5].copy(f);
            return this
        }
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            for (var b =
                    this
                    .planes
                    , c =
                    0; 6 >
                c; c++) b[c]
                .copy(a
                    .planes[
                        c]);
            return this
        }
        , setFromMatrix: function (
            a) {
            var b = this
                .planes
                , c = a
                .elements;
            a = c[0];
            var d = c[1]
                , e = c[2]
                , f = c[3]
                , g = c[4]
                , h = c[5]
                , k = c[6]
                , n = c[7]
                , l = c[8]
                , m = c[9]
                , p = c[10]
                , q = c[11]
                , x = c[12]
                , w = c[13]
                , z = c[14]
                , c = c[15];
            b[0].setComponents(
                    f - a
                    , n - g
                    , q - l
                    , c - x)
                .normalize();
            b[1].setComponents(
                    f + a
                    , n + g
                    , q + l
                    , c + x)
                .normalize();
            b[2].setComponents(
                    f + d
                    , n + h
                    , q + m
                    , c + w)
                .normalize();
            b[3].setComponents(
                    f -
                    d, n -
                    h, q -
                    m, c - w
                )
                .normalize();
            b[4].setComponents(
                    f - e
                    , n - k
                    , q - p
                    , c - z)
                .normalize();
            b[5].setComponents(
                    f + e
                    , n + k
                    , q + p
                    , c + z)
                .normalize();
            return this
        }
        , intersectsObject: function () {
            var a = new Ia;
            return function (
                b) {
                var c =
                    b
                    .geometry;
                null ===
                    c
                    .boundingSphere &&
                    c
                    .computeBoundingSphere();
                a.copy(c
                        .boundingSphere
                        )
                    .applyMatrix4(
                        b
                        .matrixWorld
                    );
                return this
                    .intersectsSphere(
                        a
                    )
            }
        }()
        , intersectsSprite: function () {
            var a = new Ia;
            return function (
                b) {
                a.center
                    .set(
                        0
                        , 0
                        , 0
                    );
                a.radius =
                    .7071067811865476;
                a.applyMatrix4(
                    b
                    .matrixWorld
                );
                return this
                    .intersectsSphere(
                        a
                    )
            }
        }()
        , intersectsSphere: function (
            a) {
            var b = this
                .planes
                , c = a
                .center;
            a = -a.radius;
            for (var d =
                    0; 6 >
                d; d++)
                if (b[d]
                    .distanceToPoint(
                        c) <
                    a)
                    return !
                        1;
            return !0
        }
        , intersectsBox: function () {
            var a = new m
                , b = new m;
            return function (
                c) {
                for (var d =
                        this
                        .planes
                        , e =
                        0; 6 >
                    e; e++
                ) {
                    var f =
                        d[
                            e
                            ];
                    a.x =
                        0 <
                        f
                        .normal
                        .x ?
                        c
                        .min
                        .x :
                        c
                        .max
                        .x;
                    b.x =
                        0 <
                        f
                        .normal
                        .x ?
                        c
                        .max
                        .x :
                        c
                        .min
                        .x;
                    a.y =
                        0 <
                        f
                        .normal
                        .y ?
                        c
                        .min
                        .y :
                        c
                        .max
                        .y;
                    b.y =
                        0 <
                        f
                        .normal
                        .y ?
                        c
                        .max
                        .y :
                        c
                        .min
                        .y;
                    a.z =
                        0 <
                        f
                        .normal
                        .z ?
                        c
                        .min
                        .z :
                        c
                        .max
                        .z;
                    b.z =
                        0 <
                        f
                        .normal
                        .z ?
                        c
                        .max
                        .z :
                        c
                        .min
                        .z;
                    var g =
                        f
                        .distanceToPoint(
                            a
                        )
                        , f =
                        f
                        .distanceToPoint(
                            b
                        );
                    if (0 >
                        g &&
                        0 >
                        f
                    )
                        return !
                            1
                }
                return !
                    0
            }
        }()
        , containsPoint: function (
            a) {
            for (var b =
                    this
                    .planes
                    , c =
                    0; 6 >
                c; c++)
                if (0 > b[c]
                    .distanceToPoint(
                        a))
                    return !
                        1;
            return !0
        }
    };
    Pa.prototype = {
        constructor: Pa
        , set: function (a, b) {
            this.origin
                .copy(a);
            this.direction
                .copy(b);
            return this
        }
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.origin
                .copy(a
                    .origin
                );
            this.direction
                .copy(a
                    .direction
                );
            return this
        }
        , at: function (a, b) {
            return (b ||
                    new m)
                .copy(this
                    .direction
                )
                .multiplyScalar(
                    a).add(
                    this
                    .origin)
        }
        , lookAt: function (a) {
            this.direction
                .copy(a)
                .sub(this
                    .origin)
                .normalize();
            return this
        }
        , recast: function () {
            var a = new m;
            return function (
                b) {
                this.origin
                    .copy(
                        this
                        .at(b
                            , a
                        )
                    );
                return this
            }
        }()
        , closestPointToPoint: function (
            a, b) {
            var c = b ||
                new m;
            c.subVectors(a
                , this
                .origin);
            var d = c.dot(
                this
                .direction
            );
            return 0 > d ? c
                .copy(this
                    .origin
                ) : c
                .copy(this
                    .direction
                )
                .multiplyScalar(
                    d).add(
                    this
                    .origin)
        }
        , distanceToPoint: function (
            a) {
            return Math
                .sqrt(this
                    .distanceSqToPoint(
                        a))
        }
        , distanceSqToPoint: function () {
            var a = new m;
            return function (
                b) {
                var c =
                    a
                    .subVectors(
                        b
                        , this
                        .origin
                    )
                    .dot(
                        this
                        .direction
                    );
                if (0 >
                    c)
                    return this
                        .origin
                        .distanceToSquared(
                            b
                        );
                a.copy(this
                        .direction
                    )
                    .multiplyScalar(
                        c
                    )
                    .add(
                        this
                        .origin
                    );
                return a
                    .distanceToSquared(
                        b
                    )
            }
        }()
        , distanceSqToSegment: function () {
            var a = new m
                , b = new m
                , c = new m;
            return function (
                d, e, f
                , g) {
                a.copy(
                        d
                        )
                    .add(
                        e
                    )
                    .multiplyScalar(
                        .5
                    );
                b.copy(
                        e
                        )
                    .sub(
                        d
                    )
                    .normalize();
                c.copy(this
                        .origin
                    )
                    .sub(
                        a
                    );
                var h =
                    .5 *
                    d
                    .distanceTo(
                        e
                    )
                    , k = -
                    this
                    .direction
                    .dot(
                        b
                    )
                    , n =
                    c
                    .dot(
                        this
                        .direction
                    )
                    , l = -
                    c
                    .dot(
                        b
                    )
                    , m =
                    c
                    .lengthSq()
                    , p =
                    Math
                    .abs(
                        1 -
                        k *
                        k
                    )
                    , q;
                0 < p ?
                    (d = k *
                        l -
                        n
                        , e =
                        k *
                        n -
                        l
                        , q =
                        h *
                        p
                        , 0 <=
                        d ?
                        e >=
                        -
                        q ?
                        e <=
                        q ?
                        (h = 1 /
                            p
                            , d *=
                            h
                            , e *=
                            h
                            , k =
                            d *
                            (d + k *
                                e +
                                2 *
                                n
                            ) +
                            e *
                            (k * d +
                                e +
                                2 *
                                l
                            ) +
                            m
                        ) :
                        (e = h
                            , d =
                            Math
                            .max(
                                0
                                , -
                                (k *
                                    e +
                                    n
                                )
                            )
                            , k = -
                            d *
                            d +
                            e *
                            (e + 2 *
                                l
                            ) +
                            m
                        ) :
                        (e = -
                            h
                            , d =
                            Math
                            .max(
                                0
                                , -
                                (k * e +
                                    n
                                )
                            )
                            , k = -
                            d *
                            d +
                            e *
                            (e + 2 *
                                l
                            ) +
                            m
                        ) :
                        e <=
                        -
                        q ?
                        (d = Math
                            .max(
                                0
                                , -
                                (-k *
                                    h +
                                    n
                                )
                            )
                            , e =
                            0 <
                            d ?
                            -
                            h :
                            Math
                            .min(
                                Math
                                .max(
                                    -
                                    h
                                    , -
                                    l
                                )
                                , h
                            )
                            , k = -
                            d *
                            d +
                            e *
                            (e + 2 *
                                l
                            ) +
                            m
                        ) :
                        e <=
                        q ?
                        (d = 0
                            , e =
                            Math
                            .min(
                                Math
                                .max(
                                    -
                                    h
                                    , -
                                    l
                                )
                                , h
                            )
                            , k =
                            e *
                            (e + 2 *
                                l
                            ) +
                            m
                        ) :
                        (d = Math
                            .max(
                                0
                                , -
                                (k * h +
                                    n
                                )
                            )
                            , e =
                            0 <
                            d ?
                            h :
                            Math
                            .min(
                                Math
                                .max(
                                    -
                                    h
                                    , -
                                    l
                                )
                                , h
                            )
                            , k = -
                            d *
                            d +
                            e *
                            (e + 2 *
                                l
                            ) +
                            m
                        )
                    ) :
                    (e = 0 <
                        k ?
                        -
                        h :
                        h
                        , d =
                        Math
                        .max(
                            0
                            , -
                            (k * e +
                                n
                            )
                        )
                        , k = -
                        d *
                        d +
                        e *
                        (e + 2 *
                            l
                        ) +
                        m
                    );
                f && f
                    .copy(
                        this
                        .direction
                    )
                    .multiplyScalar(
                        d
                    )
                    .add(
                        this
                        .origin
                    );
                g && g
                    .copy(
                        b
                    )
                    .multiplyScalar(
                        e
                    )
                    .add(
                        a
                    );
                return k
            }
        }()
        , intersectSphere: function () {
            var a = new m;
            return function (
                b, c) {
                a.subVectors(
                    b
                    .center
                    , this
                    .origin
                );
                var d =
                    a
                    .dot(
                        this
                        .direction
                    )
                    , e =
                    a
                    .dot(
                        a
                    ) -
                    d *
                    d
                    , f =
                    b
                    .radius *
                    b
                    .radius;
                if (e >
                    f)
                    return null;
                f = Math
                    .sqrt(
                        f -
                        e
                    );
                e = d -
                    f;
                d += f;
                return 0 >
                    e &&
                    0 >
                    d ?
                    null :
                    0 >
                    e ?
                    this
                    .at(d
                        , c
                    ) :
                    this
                    .at(e
                        , c
                    )
            }
        }()
        , intersectsSphere: function (
            a) {
            return this
                .distanceToPoint(
                    a.center
                ) <= a
                .radius
        }
        , distanceToPlane: function (
            a) {
            var b = a.normal
                .dot(this
                    .direction
                );
            if (0 === b)
                return 0 ===
                    a
                    .distanceToPoint(
                        this
                        .origin
                    ) ?
                    0 :
                    null;
            a = -(this
                .origin
                .dot(a
                    .normal
                ) +
                a
                .constant
            ) / b;
            return 0 <= a ?
                a : null
        }
        , intersectPlane: function (
            a
            , b) {
            var c = this
                .distanceToPlane(
                    a);
            return null ===
                c ? null :
                this.at(c
                    , b)
        }
        , intersectsPlane: function (
            a) {
            var b = a
                .distanceToPoint(
                    this
                    .origin
                );
            return 0 ===
                b || 0 > a
                .normal.dot(
                    this
                    .direction
                ) * b ?
                !0 : !1
        }
        , intersectBox: function (
            a, b) {
            var c, d, e, f
                , g;
            d = 1 / this
                .direction
                .x;
            f = 1 / this
                .direction
                .y;
            g = 1 / this
                .direction
                .z;
            var h = this
                .origin;
            0 <= d ? (c = (a
                    .min
                    .x -
                    h.x
                ) *
                d, d *=
                a.max
                .x - h.x
            ) : (c =
                (a.max
                    .x -
                    h.x
                ) *
                d, d *=
                a.min
                .x - h.x
            );
            0 <= f ? (e = (a
                    .min
                    .y -
                    h.y
                ) *
                f, f *=
                a.max
                .y - h.y
            ) : (e =
                (a.max
                    .y -
                    h.y
                ) *
                f, f *=
                a.min
                .y - h.y
            );
            if (c > f || e >
                d)
                return null;
            if (e > c ||
                c !== c) c =
                e;
            if (f < d ||
                d !== d) d =
                f;
            0 <= g ? (e = (a
                    .min
                    .z -
                    h.z
                ) *
                g, g *=
                a.max
                .z - h.z
            ) : (e =
                (a.max
                    .z -
                    h.z
                ) *
                g, g *=
                a.min
                .z - h.z
            );
            if (c > g || e >
                d)
                return null;
            if (e > c ||
                c !== c) c =
                e;
            if (g < d ||
                d !== d) d =
                g;
            return 0 > d ?
                null : this
                .at(0 <= c ?
                    c : d, b
                )
        }
        , intersectsBox: function () {
            var a = new m;
            return function (
                b) {
                return null !==
                    this
                    .intersectBox(
                        b
                        , a
                    )
            }
        }()
        , intersectTriangle: function () {
            var a = new m
                , b = new m
                , c = new m
                , d = new m;
            return function (
                e, f, g
                , h, k
                ) {
                b.subVectors(
                    f
                    , e
                );
                c.subVectors(
                    g
                    , e
                );
                d.crossVectors(
                    b
                    , c
                );
                f = this
                    .direction
                    .dot(
                        d
                    );
                if (0 <
                    f) {
                    if (
                        h
                        )
                        return null;
                    h = 1
                } else if (
                    0 >
                    f)
                    h = -
                    1
                    , f = -
                    f;
                else
                    return null;
                a.subVectors(
                    this
                    .origin
                    , e
                );
                e = h *
                    this
                    .direction
                    .dot(
                        c
                        .crossVectors(
                            a
                            , c
                        )
                    );
                if (0 >
                    e)
                    return null;
                g = h *
                    this
                    .direction
                    .dot(
                        b
                        .cross(
                            a
                        )
                    );
                if (0 >
                    g ||
                    e +
                    g >
                    f)
                    return null;
                e = -h *
                    a
                    .dot(
                        d
                    );
                return 0 >
                    e ?
                    null :
                    this
                    .at(e /
                        f
                        , k
                    )
            }
        }()
        , applyMatrix4: function (
            a) {
            this.direction
                .add(this
                    .origin)
                .applyMatrix4(
                    a);
            this.origin
                .applyMatrix4(
                    a);
            this.direction
                .sub(this
                    .origin
                );
            this.direction
                .normalize();
            return this
        }
        , equals: function (a) {
            return a.origin
                .equals(this
                    .origin
                ) && a
                .direction
                .equals(this
                    .direction
                )
        }
    };
    ua.RotationOrders =
        "XYZ YZX ZXY XZY YXZ ZYX"
        .split(" ");
    ua.DefaultOrder = "XYZ";
    ua.prototype = {
        constructor: ua
        , isEuler: !0
        , get x() {
            return this._x
        }
        , set x(a) {
            this._x = a;
            this.onChangeCallback()
        }
        , get y() {
            return this._y
        }
        , set y(a) {
            this._y = a;
            this.onChangeCallback()
        }
        , get z() {
            return this._z
        }
        , set z(a) {
            this._z = a;
            this.onChangeCallback()
        }
        , get order() {
            return this
                ._order
        }
        , set order(a) {
            this._order = a;
            this.onChangeCallback()
        }
        , set: function (a, b,
            c
            , d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._order =
                d || this
                ._order;
            this
                .onChangeCallback();
            return this
        }
        , clone: function () {
            return new this
                .constructor(
                    this._x
                    , this
                    ._y
                    , this
                    ._z
                    , this
                    ._order)
        }
        , copy: function (a) {
            this._x = a._x;
            this._y = a._y;
            this._z = a._z;
            this._order = a
                ._order;
            this
                .onChangeCallback();
            return this
        }
        , setFromRotationMatrix: function (
            a, b, c) {
            var d = P.clamp
                , e = a
                .elements;
            a = e[0];
            var f = e[4]
                , g = e[8]
                , h = e[1]
                , k = e[5]
                , n = e[9]
                , l = e[2]
                , m = e[6]
                , e = e[10];
            b = b || this
                ._order;
            "XYZ" === b ? (
                    this
                    ._y =
                    Math
                    .asin(d(g
                        , -
                        1
                        , 1
                    ))
                    , .99999 >
                    Math
                    .abs(
                        g) ?
                    (
                        this
                        ._x =
                        Math
                        .atan2(
                            -
                            n
                            , e
                        )
                        , this
                        ._z =
                        Math
                        .atan2(
                            -
                            f
                            , a
                        )
                    ) :
                    (this
                        ._x =
                        Math
                        .atan2(
                            m
                            , k
                        )
                        , this
                        ._z =
                        0)
                ) :
                "YXZ" ===
                b ? (this
                    ._x =
                    Math
                    .asin(-
                        d(n, -
                            1
                            , 1
                        )
                    )
                    , .99999 >
                    Math
                    .abs(
                        n) ?
                    (
                        this
                        ._y =
                        Math
                        .atan2(
                            g
                            , e
                        )
                        , this
                        ._z =
                        Math
                        .atan2(
                            h
                            , k
                        )
                    ) :
                    (this
                        ._y =
                        Math
                        .atan2(
                            -
                            l
                            , a
                        )
                        , this
                        ._z =
                        0)
                ) :
                "ZXY" ===
                b ? (this
                    ._x =
                    Math
                    .asin(d(m
                        , -
                        1
                        , 1
                    ))
                    , .99999 >
                    Math
                    .abs(
                        m) ?
                    (
                        this
                        ._y =
                        Math
                        .atan2(
                            -
                            l
                            , e
                        )
                        , this
                        ._z =
                        Math
                        .atan2(
                            -
                            f
                            , k
                        )
                    ) :
                    (this
                        ._y =
                        0
                        , this
                        ._z =
                        Math
                        .atan2(
                            h
                            , a
                        )
                    )) :
                "ZYX" ===
                b ? (this
                    ._y =
                    Math
                    .asin(-
                        d(l, -
                            1
                            , 1
                        )
                    )
                    , .99999 >
                    Math
                    .abs(
                        l) ?
                    (
                        this
                        ._x =
                        Math
                        .atan2(
                            m
                            , e
                        )
                        , this
                        ._z =
                        Math
                        .atan2(
                            h
                            , a
                        )
                    ) :
                    (this
                        ._x =
                        0
                        , this
                        ._z =
                        Math
                        .atan2(
                            -
                            f
                            , k
                        )
                    )) :
                "YZX" ===
                b ? (this
                    ._z =
                    Math
                    .asin(d(h
                        , -
                        1
                        , 1
                    ))
                    , .99999 >
                    Math
                    .abs(
                        h) ?
                    (
                        this
                        ._x =
                        Math
                        .atan2(
                            -
                            n
                            , k
                        )
                        , this
                        ._y =
                        Math
                        .atan2(
                            -
                            l
                            , a
                        )
                    ) :
                    (this
                        ._x =
                        0
                        , this
                        ._y =
                        Math
                        .atan2(
                            g
                            , e
                        )
                    )) :
                "XZY" ===
                b ? (this
                    ._z =
                    Math
                    .asin(-
                        d(f, -
                            1
                            , 1
                        )
                    )
                    , .99999 >
                    Math
                    .abs(
                        f) ?
                    (
                        this
                        ._x =
                        Math
                        .atan2(
                            m
                            , k
                        )
                        , this
                        ._y =
                        Math
                        .atan2(
                            g
                            , a
                        )
                    ) :
                    (this
                        ._x =
                        Math
                        .atan2(
                            -
                            n
                            , e
                        )
                        , this
                        ._y =
                        0)
                ) :
                console
                .warn(
                    "THREE.Euler: .setFromRotationMatrix() given unsupported order: " +
                    b);
            this._order = b;
            if (!1 !== c)
                this
                .onChangeCallback();
            return this
        }
        , setFromQuaternion: function () {
            var a;
            return function (
                b, c, d
            ) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeRotationFromQuaternion(
                    b
                );
                return this
                    .setFromRotationMatrix(
                        a
                        , c
                        , d
                    )
            }
        }()
        , setFromVector3: function (
            a, b) {
            return this.set(
                a.x, a
                .y, a.z
                , b ||
                this
                ._order)
        }
        , reorder: function () {
            var a = new aa;
            return function (
                b) {
                a.setFromEuler(
                    this
                );
                return this
                    .setFromQuaternion(
                        a
                        , b
                    )
            }
        }()
        , equals: function (a) {
            return a._x ===
                this._x && a
                ._y === this
                ._y && a
                ._z === this
                ._z && a
                ._order ===
                this._order
        }
        , fromArray: function (
            a) {
            this._x = a[0];
            this._y = a[1];
            this._z = a[2];
            void 0 !== a[
                3] && (
                this
                ._order =
                a[3]);
            this
                .onChangeCallback();
            return this
        }
        , toArray: function (a
            , b) {
            void 0 === a &&
                (a = []);
            void 0 === b &&
                (b = 0);
            a[b] = this._x;
            a[b + 1] =
                this._y;
            a[b + 2] = this
                ._z;
            a[b + 3] = this
                ._order;
            return a
        }
        , toVector3: function (
            a) {
            return a ? a
                .set(this
                    ._x
                    , this
                    ._y
                    , this
                    ._z
                ) :
                new m(this
                    ._x
                    , this
                    ._y
                    , this
                    ._z)
        }
        , onChange: function (
            a) {
            this.onChangeCallback =
                a;
            return this
        }
        , onChangeCallback: function () {}
    };
    qb.prototype = {
        constructor: qb
        , set: function (a) {
            this.mask = 1 <<
                a
        }
        , enable: function (a) {
            this.mask |=
                1 << a
        }
        , toggle: function (a) {
            this.mask ^=
                1 << a
        }
        , disable: function (
        a) {
            this.mask &= ~(
                1 << a)
        }
        , test: function (a) {
            return 0 !== (
                this
                .mask &
                a.mask)
        }
    };
    var yc = 0;
    Y.DefaultUp = new m(0, 1, 0);
    Y.DefaultMatrixAutoUpdate = !0;
    Y.prototype = {
        constructor: Y
        , isObject3D: !0
        , applyMatrix: function (
            a) {
            this.matrix
                .multiplyMatrices(
                    a, this
                    .matrix
                );
            this.matrix
                .decompose(
                    this
                    .position
                    , this
                    .quaternion
                    , this
                    .scale)
        }
        , setRotationFromAxisAngle: function (
            a, b) {
            this.quaternion
                .setFromAxisAngle(
                    a, b)
        }
        , setRotationFromEuler: function (
            a) {
            this.quaternion
                .setFromEuler(
                    a, !0)
        }
        , setRotationFromMatrix: function (
            a) {
            this.quaternion
                .setFromRotationMatrix(
                    a)
        }
        , setRotationFromQuaternion: function (
            a) {
            this.quaternion
                .copy(a)
        }
        , rotateOnAxis: function () {
            var a = new aa;
            return function (
                b
                , c) {
                a.setFromAxisAngle(
                    b
                    , c
                );
                this.quaternion
                    .multiply(
                        a
                    );
                return this
            }
        }()
        , rotateX: function () {
            var a = new m(1
                , 0, 0);
            return function (
                b) {
                return this
                    .rotateOnAxis(
                        a
                        , b
                    )
            }
        }()
        , rotateY: function () {
            var a = new m(0
                , 1, 0);
            return function (
                b) {
                return this
                    .rotateOnAxis(
                        a
                        , b
                    )
            }
        }()
        , rotateZ: function () {
            var a = new m(0
                , 0, 1);
            return function (
                b) {
                return this
                    .rotateOnAxis(
                        a
                        , b
                    )
            }
        }()
        , translateOnAxis: function () {
            var a = new m;
            return function (
                b, c) {
                a.copy(
                        b
                        )
                    .applyQuaternion(
                        this
                        .quaternion
                    );
                this.position
                    .add(
                        a
                        .multiplyScalar(
                            c
                        )
                    );
                return this
            }
        }()
        , translateX: function () {
            var a = new m(1
                , 0, 0);
            return function (
                b) {
                return this
                    .translateOnAxis(
                        a
                        , b
                    )
            }
        }()
        , translateY: function () {
            var a = new m(0
                , 1, 0);
            return function (
                b) {
                return this
                    .translateOnAxis(
                        a
                        , b
                    )
            }
        }()
        , translateZ: function () {
            var a = new m(0
                , 0, 1);
            return function (
                b) {
                return this
                    .translateOnAxis(
                        a
                        , b
                    )
            }
        }()
        , localToWorld: function (
            a) {
            return a
                .applyMatrix4(
                    this
                    .matrixWorld
                )
        }
        , worldToLocal: function () {
            var a = new I;
            return function (
                b) {
                return b
                    .applyMatrix4(
                        a
                        .getInverse(
                            this
                            .matrixWorld
                        )
                    )
            }
        }()
        , lookAt: function () {
            var a = new I;
            return function (
                b) {
                a.lookAt(
                    b
                    , this
                    .position
                    , this
                    .up
                );
                this.quaternion
                    .setFromRotationMatrix(
                        a
                    )
            }
        }()
        , add: function (a) {
            if (1 <
                arguments
                .length) {
                for (var b =
                        0; b <
                    arguments
                    .length; b++
                ) this
                    .add(
                        arguments[
                            b
                        ]
                    );
                return this
            }
            if (a === this)
                return console
                    .error(
                        "THREE.Object3D.add: object can't be added as a child of itself."
                        , a
                        )
                    , this;
            a && a
                .isObject3D ?
                (null !== a
                    .parent &&
                    a.parent
                    .remove(
                        a)
                    , a
                    .parent =
                    this, a
                    .dispatchEvent({
                        type: "added"
                    }), this
                    .children
                    .push(a)
                ) :
                console
                .error(
                    "THREE.Object3D.add: object not an instance of THREE.Object3D."
                    , a);
            return this
        }
        , remove: function (a) {
            if (1 <
                arguments
                .length)
                for (var b =
                        0; b <
                    arguments
                    .length; b++
                ) this
                    .remove(
                        arguments[
                            b
                        ]
                    );
            b = this
                .children
                .indexOf(
                    a); - 1
                !==
                b && (a
                    .parent =
                    null, a
                    .dispatchEvent({
                        type: "removed"
                    }), this
                    .children
                    .splice(
                        b, 1
                    ))
        }
        , getObjectById: function (
            a) {
            return this
                .getObjectByProperty(
                    "id", a)
        }
        , getObjectByName: function (
            a) {
            return this
                .getObjectByProperty(
                    "name"
                    , a)
        }
        , getObjectByProperty: function (
            a, b) {
            if (this[a] ===
                b)
                return this;
            for (var c = 0
                    , d =
                    this
                    .children
                    .length; c <
                d; c++) {
                var e = this
                    .children[
                        c]
                    .getObjectByProperty(
                        a, b
                    );
                if (void 0 !==
                    e)
                    return e
            }
        }
        , getWorldPosition: function (
            a) {
            a = a || new m;
            this.updateMatrixWorld(
                !0);
            return a
                .setFromMatrixPosition(
                    this
                    .matrixWorld
                )
        }
        , getWorldQuaternion: function () {
            var a = new m
                , b = new m;
            return function (
                c) {
                c = c ||
                    new aa;
                this.updateMatrixWorld(
                    !
                    0
                );
                this.matrixWorld
                    .decompose(
                        a
                        , c
                        , b
                    );
                return c
            }
        }()
        , getWorldRotation: function () {
            var a = new aa;
            return function (
                b) {
                b = b ||
                    new ua;
                this.getWorldQuaternion(
                    a
                );
                return b
                    .setFromQuaternion(
                        a
                        , this
                        .rotation
                        .order
                        , !
                        1
                    )
            }
        }()
        , getWorldScale: function () {
            var a = new m
                , b =
                new aa;
            return function (
                c) {
                c = c ||
                    new m;
                this.updateMatrixWorld(
                    !
                    0
                );
                this.matrixWorld
                    .decompose(
                        a
                        , b
                        , c
                    );
                return c
            }
        }()
        , getWorldDirection: function () {
            var a = new aa;
            return function (
                b) {
                b = b ||
                    new m;
                this.getWorldQuaternion(
                    a
                );
                return b
                    .set(
                        0
                        , 0
                        , 1
                    )
                    .applyQuaternion(
                        a
                    )
            }
        }()
        , raycast: function () {}
        , traverse: function (
            a) {
            a(this);
            for (var b =
                    this
                    .children
                    , c = 0
                    , d = b
                    .length; c <
                d; c++) b[c]
                .traverse(a)
        }
        , traverseVisible: function (
            a) {
            if (!1 !== this
                .visible) {
                a(this);
                for (var b =
                        this
                        .children
                        , c =
                        0
                        , d =
                        b
                        .length; c <
                    d; c++)
                    b[c]
                    .traverseVisible(
                        a)
            }
        }
        , traverseAncestors: function (
            a) {
            var b = this
                .parent;
            null !== b && (
                a(b), b
                .traverseAncestors(
                    a))
        }
        , updateMatrix: function () {
            this.matrix
                .compose(
                    this
                    .position
                    , this
                    .quaternion
                    , this
                    .scale);
            this.matrixWorldNeedsUpdate = !
                0
        }
        , updateMatrixWorld: function (
            a) {
            !0 === this
                .matrixAutoUpdate &&
                this
                .updateMatrix();
            if (!0 === this
                .matrixWorldNeedsUpdate ||
                !0 === a)
                null ===
                this
                .parent ?
                this
                .matrixWorld
                .copy(this
                    .matrix
                ) : this
                .matrixWorld
                .multiplyMatrices(
                    this
                    .parent
                    .matrixWorld
                    , this
                    .matrix
                ), this
                .matrixWorldNeedsUpdate = !
                1, a = !0;
            for (var b =
                    this
                    .children
                    , c = 0
                    , d = b
                    .length; c <
                d; c++) b[c]
                .updateMatrixWorld(
                    a)
        }
        , toJSON: function (a) {
            function b(a) {
                var b = []
                    , c;
                for (c in
                    a) {
                    var d =
                        a[
                            c
                            ];
                    delete d
                        .metadata;
                    b.push(
                        d
                        )
                }
                return b
            }
            var c =
                void 0 ===
                a || "" ===
                a
                , d = {};
            c && (a = {
                    geometries: {}
                    , materials: {}
                    , textures: {}
                    , images: {}
                }, d
                .metadata = {
                    version: 4.4
                    , type: "Object"
                    , generator: "Object3D.toJSON"
                });
            var e = {};
            e.uuid = this
                .uuid;
            e.type = this
                .type;
            "" !== this
                .name && (e
                    .name =
                    this
                    .name);
            "{}" !== JSON
                .stringify(
                    this
                    .userData
                ) && (e
                    .userData =
                    this
                    .userData
                );
            !0 === this
                .castShadow &&
                (e.castShadow = !
                    0);
            !0 === this
                .receiveShadow &&
                (e.receiveShadow = !
                    0);
            !1 === this
                .visible &&
                (e.visible = !
                    1);
            e.matrix = this
                .matrix
                .toArray();
            void 0 !== this
                .geometry &&
                (void 0 ===
                    a
                    .geometries[
                        this
                        .geometry
                        .uuid
                    ] &&
                    (a.geometries[
                            this
                            .geometry
                            .uuid
                        ] =
                        this
                        .geometry
                        .toJSON(
                            a
                        )
                    ), e
                    .geometry =
                    this
                    .geometry
                    .uuid);
            void 0 !== this
                .material &&
                (void 0 ===
                    a
                    .materials[
                        this
                        .material
                        .uuid
                    ] &&
                    (a.materials[
                            this
                            .material
                            .uuid
                        ] =
                        this
                        .material
                        .toJSON(
                            a
                        )
                    ), e
                    .material =
                    this
                    .material
                    .uuid);
            if (0 < this
                .children
                .length) {
                e
                    .children = [];
                for (var f =
                        0; f <
                    this
                    .children
                    .length; f++
                ) e
                    .children
                    .push(
                        this
                        .children[
                            f
                        ]
                        .toJSON(
                            a
                        )
                        .object
                    )
            }
            if (c) {
                var c =
                    b(a
                        .geometries
                        )
                    , f = b(
                        a
                        .materials
                    )
                    , g = b(
                        a
                        .textures
                    );
                a = b(a
                    .images
                    );
                0 < c
                    .length &&
                    (d.geometries =
                        c);
                0 < f
                    .length &&
                    (d.materials =
                        f);
                0 < g
                    .length &&
                    (d.textures =
                        g);
                0 < a
                    .length &&
                    (d.images =
                        a)
            }
            d.object = e;
            return d
        }
        , clone: function (a) {
            return (new this
                .constructor
            ).copy(
                this, a)
        }
        , copy: function (a,
        b) {
            void 0 === b &&
                (b = !0);
            this.name = a
                .name;
            this.up.copy(a
                .up);
            this.position
                .copy(a
                    .position
                );
            this.quaternion
                .copy(a
                    .quaternion
                );
            this.scale.copy(
                a.scale);
            this.matrix
                .copy(a
                    .matrix
                );
            this.matrixWorld
                .copy(a
                    .matrixWorld
                );
            this.matrixAutoUpdate =
                a
                .matrixAutoUpdate;
            this.matrixWorldNeedsUpdate =
                a
                .matrixWorldNeedsUpdate;
            this.layers
                .mask = a
                .layers
                .mask;
            this.visible = a
                .visible;
            this.castShadow =
                a
                .castShadow;
            this.receiveShadow =
                a
                .receiveShadow;
            this.frustumCulled =
                a
                .frustumCulled;
            this.renderOrder =
                a
                .renderOrder;
            this.userData =
                JSON.parse(
                    JSON
                    .stringify(
                        a
                        .userData
                    ));
            if (!0 === b)
                for (var c =
                        0; c <
                    a
                    .children
                    .length; c++
                ) this
                    .add(a
                        .children[
                            c
                        ]
                        .clone()
                    );
            return this
        }
    };
    Object.assign(Y.prototype, Ba
        .prototype);
    Da.prototype = {
        constructor: Da
        , set: function (a, b) {
            this.start.copy(
                a);
            this.end.copy(
                b);
            return this
        }
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.start.copy(
                a.start);
            this.end.copy(a
                .end);
            return this
        }
        , getCenter: function (
            a) {
            return (a ||
                    new m)
                .addVectors(
                    this
                    .start
                    , this
                    .end
                )
                .multiplyScalar(
                    .5)
        }
        , delta: function (a) {
            return (a ||
                    new m)
                .subVectors(
                    this
                    .end
                    , this
                    .start)
        }
        , distanceSq: function () {
            return this
                .start
                .distanceToSquared(
                    this.end
                )
        }
        , distance: function () {
            return this
                .start
                .distanceTo(
                    this.end
                )
        }
        , at: function (a, b) {
            var c = b ||
                new m;
            return this
                .delta(c)
                .multiplyScalar(
                    a).add(
                    this
                    .start)
        }
        , closestPointToPointParameter: function () {
            var a = new m
                , b = new m;
            return function (
                c, d) {
                a.subVectors(
                    c
                    , this
                    .start
                );
                b.subVectors(
                    this
                    .end
                    , this
                    .start
                );
                var e =
                    b
                    .dot(
                        b
                    )
                    , e =
                    b
                    .dot(
                        a
                    ) /
                    e;
                d && (e =
                    P
                    .clamp(
                        e
                        , 0
                        , 1
                    )
                );
                return e
            }
        }()
        , closestPointToPoint: function (
            a, b, c) {
            a = this
                .closestPointToPointParameter(
                    a, b);
            c = c || new m;
            return this
                .delta(c)
                .multiplyScalar(
                    a).add(
                    this
                    .start)
        }
        , applyMatrix4: function (
            a) {
            this.start
                .applyMatrix4(
                    a);
            this.end
                .applyMatrix4(
                    a);
            return this
        }
        , equals: function (a) {
            return a.start
                .equals(this
                    .start
                ) && a
                .end.equals(
                    this.end
                )
        }
    };
    na.normal = function () {
        var a = new m;
        return function (b, c,
            d
            , e) {
            e = e || new m;
            e.subVectors(d
                , c);
            a.subVectors(b
                , c);
            e.cross(a);
            b = e
                .lengthSq();
            return 0 < b ? e
                .multiplyScalar(
                    1 / Math
                    .sqrt(b)
                ) : e
                .set(0, 0
                    , 0)
        }
    }();
    na.barycoordFromPoint =
        function () {
            var a = new m
                , b = new m
                , c = new m;
            return function (d, e,
                f
                , g, h) {
                a.subVectors(g
                    , e);
                b.subVectors(f
                    , e);
                c.subVectors(d
                    , e);
                d = a.dot(a);
                e = a.dot(b);
                f = a.dot(c);
                var k = b.dot(
                    b);
                g = b.dot(c);
                var n = d * k -
                    e * e;
                h = h || new m;
                if (0 === n)
                    return h
                        .set(-2
                            , -
                            1
                            , -1
                            );
                n = 1 / n;
                k = (k * f - e *
                    g) * n;
                d = (d * g - e *
                    f) * n;
                return h.set(1 -
                    k -
                    d, d, k)
            }
        }();
    na.containsPoint = function () {
        var a = new m;
        return function (b, c,
            d
            , e) {
            b = na
                .barycoordFromPoint(
                    b, c, d
                    , e, a);
            return 0 <= b
                .x && 0 <= b
                .y && 1 >= b
                .x + b.y
        }
    }();
    na.prototype = {
        constructor: na
        , set: function (a, b
            , c) {
            this.a.copy(a);
            this.b.copy(b);
            this.c.copy(c);
            return this
        }
        , setFromPointsAndIndices: function (
            a, b, c, d) {
            this.a.copy(a[
                b]);
            this.b.copy(a[
                c]);
            this.c.copy(a[
                d]);
            return this
        }
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.a.copy(a
                .a);
            this.b.copy(a
                .b);
            this.c.copy(a
                .c);
            return this
        }
        , area: function () {
            var a = new m
                , b = new m;
            return function () {
                a.subVectors(
                    this
                    .c
                    , this
                    .b
                );
                b.subVectors(
                    this
                    .a
                    , this
                    .b
                );
                return .5 *
                    a
                    .cross(
                        b
                    )
                    .length()
            }
        }()
        , midpoint: function (
            a) {
            return (a ||
                    new m)
                .addVectors(
                    this.a
                    , this.b
                    )
                .add(this.c)
                .multiplyScalar(
                    1 / 3)
        }
        , normal: function (a) {
            return na
                .normal(this
                    .a, this
                    .b, this
                    .c, a)
        }
        , plane: function (a) {
            return (a ||
                    new ja)
                .setFromCoplanarPoints(
                    this.a
                    , this
                    .b
                    , this.c
                    )
        }
        , barycoordFromPoint: function (
            a, b) {
            return na
                .barycoordFromPoint(
                    a, this
                    .a, this
                    .b, this
                    .c, b)
        }
        , containsPoint: function (
            a) {
            return na
                .containsPoint(
                    a
                    , this
                    .a, this
                    .b, this
                    .c)
        }
        , closestPointToPoint: function () {
            var a, b, c, d;
            return function (
                e, f) {
                void 0
                    ===
                    a &&
                    (a = new ja
                        , b = [
                            new Da
                            , new Da
                            , new Da
                            ]
                        , c =
                        new m
                        , d =
                        new m
                    );
                var g =
                    f ||
                    new m
                    , h =
                    Infinity;
                a.setFromCoplanarPoints(
                    this
                    .a
                    , this
                    .b
                    , this
                    .c
                );
                a.projectPoint(
                    e
                    , c
                );
                if (!
                    0 ===
                    this
                    .containsPoint(
                        c
                    )
                ) g
                    .copy(
                        c
                    );
                else {
                    b[0].set(
                        this
                        .a
                        , this
                        .b
                    );
                    b[1].set(
                        this
                        .b
                        , this
                        .c
                    );
                    b[2].set(
                        this
                        .c
                        , this
                        .a
                    );
                    for (
                        var k =
                            0; k <
                        b
                        .length; k++
                    ) {
                        b[k].closestPointToPoint(
                            c
                            , !
                            0
                            , d
                        );
                        var n =
                            c
                            .distanceToSquared(
                                d
                            );
                        n < h &&
                            (h = n
                                , g
                                .copy(
                                    d
                                )
                            )
                    }
                }
                return g
            }
        }()
        , equals: function (a) {
            return a.a
                .equals(this
                    .a) &&
                a.b.equals(
                    this.b
                ) && a.c
                .equals(this
                    .c)
        }
    };
    xa.prototype = {
        constructor: xa
        , clone: function () {
            return (new this
                .constructor
            ).copy(
                this)
        }
        , copy: function (a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.normal
                .copy(a
                    .normal
                );
            this.color.copy(
                a.color);
            this.materialIndex =
                a
                .materialIndex;
            for (var b = 0
                    , c = a
                    .vertexNormals
                    .length; b <
                c; b++) this
                .vertexNormals[
                    b] = a
                .vertexNormals[
                    b]
                .clone();
            b = 0;
            for (c = a
                .vertexColors
                .length; b <
                c; b++) this
                .vertexColors[
                    b] = a
                .vertexColors[
                    b]
                .clone();
            return this
        }
    };
    La.prototype = Object.create(ia
        .prototype);
    La.prototype.constructor = La;
    La.prototype
        .isMeshBasicMaterial = !0;
    La.prototype.copy = function (
        a) {
        ia.prototype.copy.call(
            this, a);
        this.color.copy(a
            .color);
        this.map = a.map;
        this.lightMap = a
            .lightMap;
        this.lightMapIntensity =
            a.lightMapIntensity;
        this.aoMap = a.aoMap;
        this.aoMapIntensity = a
            .aoMapIntensity;
        this.specularMap = a
            .specularMap;
        this.alphaMap = a
            .alphaMap;
        this.envMap = a.envMap;
        this.combine = a
            .combine;
        this.reflectivity = a
            .reflectivity;
        this.refractionRatio = a
            .refractionRatio;
        this.wireframe = a
            .wireframe;
        this.wireframeLinewidth =
            a
            .wireframeLinewidth;
        this.wireframeLinecap =
            a.wireframeLinecap;
        this.wireframeLinejoin =
            a.wireframeLinejoin;
        this.skinning = a
            .skinning;
        this.morphTargets = a
            .morphTargets;
        return this
    };
    ba.prototype = {
        constructor: ba
        , isBufferAttribute: !0
        , set needsUpdate(a) {
            !0 === a && this
                .version++
        }
        , setArray: function (
            a) {
            if (Array
                .isArray(a))
                throw new TypeError(
                    "THREE.BufferAttribute: array should be a Typed Array."
                );
            this.count =
                void 0 !==
                a ? a
                .length /
                this
                .itemSize :
                0;
            this.array = a
        }
        , setDynamic: function (
            a) {
            this.dynamic =
                a;
            return this
        }
        , copy: function (a) {
            this.array =
                new a.array
                .constructor(
                    a.array
                );
            this.itemSize =
                a.itemSize;
            this.count = a
                .count;
            this.normalized =
                a
                .normalized;
            this.dynamic = a
                .dynamic;
            return this
        }
        , copyAt: function (a,
            b
            , c) {
            a *= this
                .itemSize;
            c *= b.itemSize;
            for (var d = 0
                    , e =
                    this
                    .itemSize; d <
                e; d++) this
                .array[a +
                    d] = b
                .array[c +
                    d];
            return this
        }
        , copyArray: function (
            a) {
            this.array.set(
                a);
            return this
        }
        , copyColorsArray: function (
            a) {
            for (var b =
                    this
                    .array
                    , c = 0
                    , d = 0
                    , e = a
                    .length; d <
                e; d++) {
                var f = a[
                    d];
                void 0 ===
                    f && (
                        console
                        .warn(
                            "THREE.BufferAttribute.copyColorsArray(): color is undefined"
                            , d
                        )
                        , f =
                        new ea
                    );
                b[c++] = f
                    .r;
                b[c++] = f
                    .g;
                b[c++] = f.b
            }
            return this
        }
        , copyIndicesArray: function (
            a) {
            for (var b =
                    this
                    .array
                    , c = 0
                    , d = 0
                    , e = a
                    .length; d <
                e; d++) {
                var f = a[
                    d];
                b[c++] = f
                    .a;
                b[c++] = f
                    .b;
                b[c++] = f.c
            }
            return this
        }
        , copyVector2sArray: function (
            a) {
            for (var b =
                    this
                    .array
                    , c = 0
                    , d = 0
                    , e = a
                    .length; d <
                e; d++) {
                var f = a[
                    d];
                void 0 ===
                    f && (
                        console
                        .warn(
                            "THREE.BufferAttribute.copyVector2sArray(): vector is undefined"
                            , d
                        )
                        , f =
                        new A
                    );
                b[c++] = f
                    .x;
                b[c++] = f.y
            }
            return this
        }
        , copyVector3sArray: function (
            a) {
            for (var b =
                    this
                    .array
                    , c = 0
                    , d = 0
                    , e = a
                    .length; d <
                e; d++) {
                var f =
                    a[d];
                void 0 ===
                    f && (
                        console
                        .warn(
                            "THREE.BufferAttribute.copyVector3sArray(): vector is undefined"
                            , d
                        )
                        , f =
                        new m
                    );
                b[c++] = f
                    .x;
                b[c++] = f
                    .y;
                b[c++] = f.z
            }
            return this
        }
        , copyVector4sArray: function (
            a) {
            for (var b =
                    this
                    .array
                    , c = 0
                    , d = 0
                    , e = a
                    .length; d <
                e; d++) {
                var f = a[
                    d];
                void 0 ===
                    f && (
                        console
                        .warn(
                            "THREE.BufferAttribute.copyVector4sArray(): vector is undefined"
                            , d
                        )
                        , f =
                        new da
                    );
                b[c++] = f
                    .x;
                b[c++] = f
                    .y;
                b[c++] = f
                    .z;
                b[c++] = f.w
            }
            return this
        }
        , set: function (a, b) {
            void 0 === b &&
                (b = 0);
            this.array.set(
                a, b);
            return this
        }
        , getX: function (a) {
            return this
                .array[a *
                    this
                    .itemSize
                ]
        }
        , setX: function (a,
        b) {
            this.array[a *
                this
                .itemSize
            ] = b;
            return this
        }
        , getY: function (a) {
            return this
                .array[a *
                    this
                    .itemSize +
                    1]
        }
        , setY: function (a,
        b) {
            this.array[a *
                this
                .itemSize +
                1] = b;
            return this
        }
        , getZ: function (a) {
            return this
                .array[a *
                    this
                    .itemSize +
                    2]
        }
        , setZ: function (a,
        b) {
            this.array[a *
                this
                .itemSize +
                2] = b;
            return this
        }
        , getW: function (a) {
            return this
                .array[a *
                    this
                    .itemSize +
                    3]
        }
        , setW: function (a,
        b) {
            this.array[a *
                this
                .itemSize +
                3] = b;
            return this
        }
        , setXY: function (a, b
            , c) {
            a *= this
                .itemSize;
            this.array[a +
                0] = b;
            this.array[a +
                1] = c;
            return this
        }
        , setXYZ: function (a,
            b
            , c, d) {
            a *= this
                .itemSize;
            this.array[a +
                0] = b;
            this.array[a +
                1] = c;
            this.array[a +
                2] = d;
            return this
        }
        , setXYZW: function (a
            , b, c, d, e) {
            a *= this
                .itemSize;
            this.array[a +
                0] = b;
            this.array[a +
                1] = c;
            this.array[a +
                2] = d;
            this.array[a +
                3] = e;
            return this
        }
        , onUpload: function (
            a) {
            this.onUploadCallback =
                a;
            return this
        }
        , clone: function () {
            return (new this
                    .constructor(
                        this
                        .array
                        , this
                        .itemSize
                    ))
                .copy(this)
        }
    };
    ya.prototype = Object.create(ba
        .prototype);
    ya.prototype.constructor = ya;
    Qa.prototype = Object.create(ba
        .prototype);
    Qa.prototype.constructor = Qa;
    Q.prototype = Object.create(ba
        .prototype);
    Q.prototype.constructor = Q;
    Object.assign(Lb.prototype, {
        computeGroups: function (
            a) {
            var b
                , c = []
                , d =
                void 0;
            a = a.faces;
            for (var e =
                    0; e <
                a
                .length; e++
            ) {
                var f =
                    a[
                        e
                        ];
                f.materialIndex !==
                    d &&
                    (d = f
                        .materialIndex
                        , void 0 !==
                        b &&
                        (b.count =
                            3 *
                            e -
                            b
                            .start
                            , c
                            .push(
                                b
                            )
                        )
                        , b = {
                            start: 3 *
                                e
                            , materialIndex: d
                        }
                    )
            }
            void 0 !==
                b && (b
                    .count =
                    3 *
                    e -
                    b
                    .start
                    , c
                    .push(
                        b
                    )
                );
            this.groups =
                c
        }
        , fromGeometry: function (
            a) {
            var b = a
                .faces
                , c = a
                .vertices
                , d = a
                .faceVertexUvs
                , e = d[
                    0
                ] &&
                0 < d[0]
                .length
                , f = d[
                    1
                ] &&
                0 < d[1]
                .length
                , g = a
                .morphTargets
                , h = g
                .length
                , k;
            if (0 < h) {
                k = [];
                for (var n =
                        0; n <
                    h; n++
                ) k[
                    n
                    ] = [];
                this.morphTargets
                    .position =
                    k
            }
            var l = a
                .morphNormals
                , m = l
                .length
                , p;
            if (0 < m) {
                p = [];
                for (n =
                    0; n <
                    m; n++
                ) p[
                    n
                    ] = [];
                this.morphTargets
                    .normal =
                    p
            }
            for (var q =
                    a
                    .skinIndices
                    , x =
                    a
                    .skinWeights
                    , w =
                    q
                    .length ===
                    c
                    .length
                    , z =
                    x
                    .length ===
                    c
                    .length
                    , n =
                    0; n <
                b
                .length; n++
            ) {
                var v =
                    b[
                        n
                        ];
                this.vertices
                    .push(
                        c[v
                            .a
                            ]
                        , c[v
                            .b
                            ]
                        , c[v
                            .c
                            ]
                    );
                var y =
                    v
                    .vertexNormals;
                3 === y
                    .length ?
                    this
                    .normals
                    .push(
                        y[
                            0
                            ]
                        , y[
                            1
                            ]
                        , y[
                            2
                            ]
                    ) :
                    (y = v
                        .normal
                        , this
                        .normals
                        .push(
                            y
                            , y
                            , y
                        )
                    );
                y = v
                    .vertexColors;
                3 === y
                    .length ?
                    this
                    .colors
                    .push(
                        y[
                            0
                            ]
                        , y[
                            1
                            ]
                        , y[
                            2
                            ]
                    ) :
                    (y = v
                        .color
                        , this
                        .colors
                        .push(
                            y
                            , y
                            , y
                        )
                    );
                !0 ===
                    e &&
                    (y = d[
                            0
                            ]
                        [
                            n]
                        , void 0 !==
                        y ?
                        this
                        .uvs
                        .push(
                            y[
                                0
                                ]
                            , y[
                                1
                                ]
                            , y[
                                2
                                ]
                        ) :
                        (console
                            .warn(
                                "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv "
                                , n
                            )
                            , this
                            .uvs
                            .push(
                                new A
                                , new A
                                , new A
                            )
                        )
                    );
                !0 ===
                    f &&
                    (y = d[
                            1
                            ]
                        [
                            n]
                        , void 0 !==
                        y ?
                        this
                        .uvs2
                        .push(
                            y[
                                0
                                ]
                            , y[
                                1
                                ]
                            , y[
                                2
                                ]
                        ) :
                        (console
                            .warn(
                                "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 "
                                , n
                            )
                            , this
                            .uvs2
                            .push(
                                new A
                                , new A
                                , new A
                            )
                        )
                    );
                for (y =
                    0; y <
                    h; y++
                ) {
                    var S =
                        g[
                            y
                            ]
                        .vertices;
                    k[y].push(
                        S[v
                            .a
                            ]
                        , S[v
                            .b
                            ]
                        , S[v
                            .c
                            ]
                    )
                }
                for (y =
                    0; y <
                    m; y++
                )
                    S =
                    l[y]
                    .vertexNormals[
                        n
                    ]
                    , p[
                        y
                        ]
                    .push(
                        S
                        .a
                        , S
                        .b
                        , S
                        .c
                    );
                w && this
                    .skinIndices
                    .push(
                        q[v
                            .a
                            ]
                        , q[v
                            .b
                            ]
                        , q[v
                            .c
                            ]
                    );
                z && this
                    .skinWeights
                    .push(
                        x[v
                            .a
                            ]
                        , x[v
                            .b
                            ]
                        , x[v
                            .c
                            ]
                    )
            }
            this.computeGroups(
                a);
            this.verticesNeedUpdate =
                a
                .verticesNeedUpdate;
            this.normalsNeedUpdate =
                a
                .normalsNeedUpdate;
            this.colorsNeedUpdate =
                a
                .colorsNeedUpdate;
            this.uvsNeedUpdate =
                a
                .uvsNeedUpdate;
            this.groupsNeedUpdate =
                a
                .groupsNeedUpdate;
            return this
        }
    });
    var Mb = 0;
    la.prototype = {
        constructor: la
        , isGeometry: !0
        , applyMatrix: function (
            a) {
            for (var b = (
                        new pa
                    )
                    .getNormalMatrix(
                        a)
                    , c = 0
                    , d =
                    this
                    .vertices
                    .length; c <
                d; c++) this
                .vertices[c]
                .applyMatrix4(
                    a);
            c = 0;
            for (d = this
                .faces
                .length; c <
                d; c++) {
                a = this
                    .faces[
                        c];
                a.normal
                    .applyMatrix3(
                        b)
                    .normalize();
                for (var e =
                        0
                        , f =
                        a
                        .vertexNormals
                        .length; e <
                    f; e++)
                    a
                    .vertexNormals[
                        e]
                    .applyMatrix3(
                        b)
                    .normalize()
            }
            null !== this
                .boundingBox &&
                this
                .computeBoundingBox();
            null !== this
                .boundingSphere &&
                this
                .computeBoundingSphere();
            this.normalsNeedUpdate =
                this
                .verticesNeedUpdate = !
                0;
            return this
        }
        , rotateX: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeRotationX(
                    b
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , rotateY: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeRotationY(
                    b
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , rotateZ: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeRotationZ(
                    b
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , translate: function () {
            var a;
            return function (
                b, c, d
            ) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeTranslation(
                    b
                    , c
                    , d
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , scale: function () {
            var a;
            return function (
                b, c, d
            ) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeScale(
                    b
                    , c
                    , d
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , lookAt: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new Y
                        );
                a.lookAt(
                    b
                );
                a
                    .updateMatrix();
                this.applyMatrix(
                    a
                    .matrix
                )
            }
        }()
        , fromBufferGeometry: function (
            a) {
            function b(a, b
                , d, e) {
                var f =
                    void 0 !==
                    g ? [l[
                            a
                            ]
                        .clone()
                        , l[b]
                        .clone()
                        , l[d]
                        .clone()
                        ] : []
                    , m =
                    void 0 !==
                    h ? [c
                        .colors[
                            a
                        ]
                        .clone()
                        , c
                        .colors[
                            b
                        ]
                        .clone()
                        , c
                        .colors[
                            d
                        ]
                        .clone()
                        ] : [];
                e = new xa(
                    a
                    , b
                    , d
                    , f
                    , m,
                    e
                );
                c.faces
                    .push(
                        e);
                void 0 !==
                    k && c
                    .faceVertexUvs[
                        0]
                    .push([r[
                            a
                            ]
                        .clone()
                        , r[
                            b
                            ]
                        .clone()
                        , r[
                            d
                            ]
                        .clone()
                        ]);
                void 0 !==
                    n && c
                    .faceVertexUvs[
                        1]
                    .push([p[
                            a
                            ]
                        .clone()
                        , p[
                            b
                            ]
                        .clone()
                        , p[
                            d
                            ]
                        .clone()
                        ])
            }
            var c = this
                , d =
                null !==
                a.index ? a
                .index
                .array :
                void 0
                , e = a
                .attributes
                , f = e
                .position
                .array
                , g =
                void 0 !== e
                .normal ? e
                .normal
                .array :
                void 0
                , h =
                void 0 !== e
                .color ? e
                .color
                .array :
                void 0
                , k =
                void 0 !== e
                .uv ? e.uv
                .array :
                void 0
                , n =
                void 0 !== e
                .uv2 ? e.uv2
                .array :
                void 0;
            void 0 !== n &&
                (this
                    .faceVertexUvs[
                        1
                    ] = []
                );
            for (var l = []
                    , r = []
                    , p = []
                    , q =
                    e =
                    0; e < f
                .length; e +=
                3, q += 2) c
                .vertices
                .push(new m(
                    f[
                        e
                        ]
                    , f[e +
                        1
                    ]
                    , f[e +
                        2
                    ]
                ))
                , void 0 !==
                g && l.push(
                    new m(g[
                            e
                            ]
                        , g[e +
                            1
                        ]
                        , g[e +
                            2
                        ]
                    ))
                , void 0 !==
                h && c
                .colors
                .push(
                    new ea(
                        h[
                            e
                            ]
                        , h[e +
                            1
                        ]
                        , h[e +
                            2
                        ]
                    ))
                , void 0 !==
                k && r.push(
                    new A(k[
                            q
                            ]
                        , k[q +
                            1
                        ]
                    ))
                , void 0 !==
                n && p.push(
                    new A(n[
                            q
                            ]
                        , n[q +
                            1
                        ]
                    ));
            if (void 0 !==
                d)
                if (f = a
                    .groups
                    , 0 < f
                    .length)
                    for (e =
                        0; e <
                        f
                        .length; e++
                    )
                        for (
                            var x =
                                f[
                                    e
                                    ]
                                , w =
                                x
                                .start
                                , z =
                                x
                                .count
                                , q =
                                w
                                , w =
                                w +
                                z; q <
                            w; q +=
                            3
                        )
                            b(d[q]
                                , d[q +
                                    1
                                ]
                                , d[q +
                                    2
                                ]
                                , x
                                .materialIndex
                            );
                else
                    for (e =
                        0; e <
                        d
                        .length; e +=
                        3)
                        b(d[e]
                            , d[e +
                                1
                            ]
                            , d[e +
                                2
                            ]
                        );
            else
                for (e =
                    0; e < f
                    .length /
                    3; e +=
                    3) b(e
                    , e +
                    1
                    , e +
                    2);
            this
                .computeFaceNormals();
            null !== a
                .boundingBox &&
                (this
                    .boundingBox =
                    a
                    .boundingBox
                    .clone()
                );
            null !== a
                .boundingSphere &&
                (this
                    .boundingSphere =
                    a
                    .boundingSphere
                    .clone()
                );
            return this
        }
        , center: function () {
            this
                .computeBoundingBox();
            var a = this
                .boundingBox
                .getCenter()
                .negate();
            this.translate(a
                .x, a.y
                , a.z);
            return a
        }
        , normalize: function () {
            this
                .computeBoundingSphere();
            var a = this
                .boundingSphere
                .center
                , b = this
                .boundingSphere
                .radius
                , b = 0 ===
                b ? 1 : 1 /
                b
                , c = new I;
            c.set(b, 0, 0, -
                b * a.x
                , 0, b,
                0
                , -b * a
                .y, 0
                , 0, b,
                -
                b * a.z
                , 0, 0,
                0
                , 1);
            this.applyMatrix(
                c);
            return this
        }
        , computeFaceNormals: function () {
            for (var a =
                    new m
                    , b =
                    new m
                    , c = 0
                    , d =
                    this
                    .faces
                    .length; c <
                d; c++) {
                var e = this
                    .faces[
                        c]
                    , f =
                    this
                    .vertices[
                        e.a
                    ]
                    , g =
                    this
                    .vertices[
                        e.b
                    ];
                a.subVectors(
                    this
                    .vertices[
                        e
                        .c
                    ]
                    , g);
                b.subVectors(
                    f, g
                );
                a.cross(b);
                a
                    .normalize();
                e.normal
                    .copy(a)
            }
        }
        , computeVertexNormals: function (
            a) {
            void 0 === a &&
                (a = !0);
            var b, c, d;
            d = Array(this
                .vertices
                .length);
            b = 0;
            for (c = this
                .vertices
                .length; b <
                c; b++) d[
                    b] =
                new m;
            if (a) {
                var e, f, g
                    , h =
                    new m
                    , k =
                    new m;
                a = 0;
                for (b =
                    this
                    .faces
                    .length; a <
                    b; a++)
                    c = this
                    .faces[
                        a]
                    , e =
                    this
                    .vertices[
                        c.a
                    ]
                    , f =
                    this
                    .vertices[
                        c.b
                    ]
                    , g =
                    this
                    .vertices[
                        c.c
                    ], h
                    .subVectors(
                        g, f
                    ), k
                    .subVectors(
                        e, f
                    ), h
                    .cross(
                        k)
                    , d[c.a]
                    .add(h)
                    , d[c.b]
                    .add(h)
                    , d[c.c]
                    .add(h)
            } else
                for (this
                    .computeFaceNormals()
                    , a = 0
                    , b =
                    this
                    .faces
                    .length; a <
                    b; a++)
                    c = this
                    .faces[
                        a]
                    , d[c.a]
                    .add(c
                        .normal
                    )
                    , d[c.b]
                    .add(c
                        .normal
                    )
                    , d[c.c]
                    .add(c
                        .normal
                    );
            b = 0;
            for (c = this
                .vertices
                .length; b <
                c; b++) d[b]
                .normalize();
            a = 0;
            for (b = this
                .faces
                .length; a <
                b; a++) c =
                this.faces[
                    a], e =
                c
                .vertexNormals
                , 3 === e
                .length ? (
                    e[0]
                    .copy(d[c
                        .a
                    ])
                    , e[1]
                    .copy(d[c
                        .b
                    ])
                    , e[2]
                    .copy(d[c
                        .c
                    ])
                ) : (e[
                        0] =
                    d[c.a]
                    .clone()
                    , e[1] =
                    d[c.b]
                    .clone()
                    , e[2] =
                    d[c.c]
                    .clone()
                );
            0 < this.faces
                .length && (
                    this
                    .normalsNeedUpdate = !
                    0)
        }
        , computeFlatVertexNormals: function () {
            var a, b, c;
            this
                .computeFaceNormals();
            a = 0;
            for (b = this
                .faces
                .length; a <
                b; a++) {
                c = this
                    .faces[
                        a];
                var d = c
                    .vertexNormals;
                3 === d
                    .length ?
                    (d[0]
                        .copy(
                            c
                            .normal
                        )
                        , d[
                            1
                            ]
                        .copy(
                            c
                            .normal
                        )
                        , d[
                            2]
                        .copy(
                            c
                            .normal
                        )
                    ) :
                    (d[0] =
                        c
                        .normal
                        .clone()
                        , d[
                            1
                            ] =
                        c
                        .normal
                        .clone()
                        , d[
                            2
                            ] =
                        c
                        .normal
                        .clone()
                    )
            }
            0 < this.faces
                .length && (
                    this
                    .normalsNeedUpdate = !
                    0)
        }
        , computeMorphNormals: function () {
            var a, b, c, d
                , e;
            c = 0;
            for (d = this
                .faces
                .length; c <
                d; c++)
                for (e =
                    this
                    .faces[
                        c]
                    , e
                    .__originalFaceNormal ?
                    e
                    .__originalFaceNormal
                    .copy(e
                        .normal
                    ) :
                    e
                    .__originalFaceNormal =
                    e.normal
                    .clone()
                    , e
                    .__originalVertexNormals ||
                    (e
                        .__originalVertexNormals = []
                        )
                    , a = 0
                    , b = e
                    .vertexNormals
                    .length; a <
                    b; a++)
                    e
                    .__originalVertexNormals[
                        a] ?
                    e
                    .__originalVertexNormals[
                        a]
                    .copy(e
                        .vertexNormals[
                            a
                        ]
                    ) :
                    e
                    .__originalVertexNormals[
                        a] =
                    e
                    .vertexNormals[
                        a]
                    .clone();
            var f = new la;
            f.faces = this
                .faces;
            a = 0;
            for (b = this
                .morphTargets
                .length; a <
                b; a++) {
                if (!this
                    .morphNormals[
                        a]
                ) {
                    this.morphNormals[
                        a
                    ] = {};
                    this.morphNormals[
                            a
                        ]
                        .faceNormals = [];
                    this.morphNormals[
                            a
                        ]
                        .vertexNormals = [];
                    e = this
                        .morphNormals[
                            a
                        ]
                        .faceNormals;
                    var g =
                        this
                        .morphNormals[
                            a
                        ]
                        .vertexNormals
                        , h
                        , k;
                    c = 0;
                    for (d =
                        this
                        .faces
                        .length; c <
                        d; c++
                    )
                        h =
                        new m
                        , k = {
                            a: new m
                            , b: new m
                            , c: new m
                        }, e
                        .push(
                            h
                        )
                        , g
                        .push(
                            k
                        )
                }
                g = this
                    .morphNormals[
                        a];
                f.vertices =
                    this
                    .morphTargets[
                        a]
                    .vertices;
                f
                    .computeFaceNormals();
                f
                    .computeVertexNormals();
                c = 0;
                for (d =
                    this
                    .faces
                    .length; c <
                    d; c++)
                    e = this
                    .faces[
                        c]
                    , h = g
                    .faceNormals[
                        c]
                    , k = g
                    .vertexNormals[
                        c]
                    , h
                    .copy(e
                        .normal
                    ), k
                    .a.copy(
                        e
                        .vertexNormals[
                            0
                        ]
                    ), k
                    .b.copy(
                        e
                        .vertexNormals[
                            1
                        ]
                    ), k
                    .c.copy(
                        e
                        .vertexNormals[
                            2
                        ]
                    )
            }
            c = 0;
            for (d = this
                .faces
                .length; c <
                d; c++) e =
                this.faces[
                    c], e
                .normal = e
                .__originalFaceNormal
                , e
                .vertexNormals =
                e
                .__originalVertexNormals
        }
        , computeLineDistances: function () {
            for (var a = 0
                    , b =
                    this
                    .vertices
                    , c = 0
                    , d = b
                    .length; c <
                d; c++) 0 <
                c && (a +=
                    b[c]
                    .distanceTo(
                        b[c -
                            1
                        ]
                    ))
                , this
                .lineDistances[
                    c] = a
        }
        , computeBoundingBox: function () {
            null ===
                this
                .boundingBox &&
                (this
                    .boundingBox =
                    new ra);
            this.boundingBox
                .setFromPoints(
                    this
                    .vertices
                )
        }
        , computeBoundingSphere: function () {
            null === this
                .boundingSphere &&
                (this
                    .boundingSphere =
                    new Ia);
            this.boundingSphere
                .setFromPoints(
                    this
                    .vertices
                )
        }
        , merge: function (a, b
            , c) {
            if (!1 === (a &&
                    a
                    .isGeometry
                ))
                console
                .error(
                    "THREE.Geometry.merge(): geometry not an instance of THREE.Geometry."
                    , a);
            else {
                var d, e =
                    this
                    .vertices
                    .length
                    , f =
                    this
                    .vertices
                    , g = a
                    .vertices
                    , h =
                    this
                    .faces
                    , k = a
                    .faces
                    , n =
                    this
                    .faceVertexUvs[
                        0]
                    , l = a
                    .faceVertexUvs[
                        0]
                    , m =
                    this
                    .colors
                    , p = a
                    .colors;
                void 0 ===
                    c && (
                        c =
                        0);
                void 0 !==
                    b && (
                        d =
                        (
                            new pa
                            )
                        .getNormalMatrix(
                            b
                        )
                    );
                a = 0;
                for (var q =
                        g
                        .length; a <
                    q; a++
                ) {
                    var x =
                        g[a]
                        .clone();
                    void 0
                        !==
                        b &&
                        x
                        .applyMatrix4(
                            b
                        );
                    f.push(
                        x
                        )
                }
                a = 0;
                for (q = p
                    .length; a <
                    q; a++)
                    m.push(
                        p[a]
                        .clone()
                    );
                a = 0;
                for (q = k
                    .length; a <
                    q; a++
                ) {
                    var g =
                        k[
                            a
                            ]
                        , w =
                        g
                        .vertexNormals
                        , p =
                        g
                        .vertexColors
                        , m =
                        new xa(
                            g
                            .a +
                            e
                            , g
                            .b +
                            e
                            , g
                            .c +
                            e
                        );
                    m.normal
                        .copy(
                            g
                            .normal
                        );
                    void 0
                        !==
                        d &&
                        m
                        .normal
                        .applyMatrix3(
                            d
                        )
                        .normalize();
                    b = 0;
                    for (f =
                        w
                        .length; b <
                        f; b++
                    )
                        x =
                        w[b]
                        .clone()
                        , void 0 !==
                        d &&
                        x
                        .applyMatrix3(
                            d
                        )
                        .normalize()
                        , m
                        .vertexNormals
                        .push(
                            x
                        );
                    m.color
                        .copy(
                            g
                            .color
                        );
                    b = 0;
                    for (f =
                        p
                        .length; b <
                        f; b++
                    )
                        x =
                        p[
                            b
                            ]
                        , m
                        .vertexColors
                        .push(
                            x
                            .clone()
                        );
                    m.materialIndex =
                        g
                        .materialIndex +
                        c;
                    h.push(
                        m
                        )
                }
                a = 0;
                for (q = l
                    .length; a <
                    q; a++)
                    if (c =
                        l[
                            a
                            ]
                        , d = []
                        , void 0 !==
                        c) {
                        b =
                            0;
                        for (
                            f =
                            c
                            .length; b <
                            f; b++
                        )
                            d
                            .push(
                                c[
                                    b
                                    ]
                                .clone()
                            );
                        n.push(
                            d
                            )
                    }
            }
        }
        , mergeMesh: function (
            a) {
            !1 === (a && a
                    .isMesh
                ) ?
                console
                .error(
                    "THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh."
                    , a) : (
                    a
                    .matrixAutoUpdate &&
                    a
                    .updateMatrix()
                    , this
                    .merge(a
                        .geometry
                        , a
                        .matrix
                    ))
        }
        , mergeVertices: function () {
            var a = {}
                , b = []
                , c = []
                , d, e =
                Math.pow(10
                    , 4)
                , f, g;
            f = 0;
            for (g = this
                .vertices
                .length; f <
                g; f++) d =
                this
                .vertices[
                    f], d =
                Math
                .round(d.x *
                    e) +
                "_" + Math
                .round(d.y *
                    e) +
                "_" + Math
                .round(d.z *
                    e)
                , void 0 ===
                a[d] ? (a[
                        d] =
                    f
                    , b
                    .push(
                        this
                        .vertices[
                            f
                        ]
                    )
                    , c[f] =
                    b
                    .length -
                    1) : c[
                    f] = c[
                    a[d]];
            a = [];
            f = 0;
            for (g = this
                .faces
                .length; f <
                g; f++)
                for (e =
                    this
                    .faces[
                        f]
                    , e.a =
                    c[
                        e.a
                    ], e
                    .b = c[e
                        .b]
                    , e.c =
                    c[
                        e.c
                    ]
                    , e = [e
                        .a
                        , e.b
                        , e.c
                        ]
                    , d =
                    0; 3 >
                    d; d++)
                    if (e[
                            d
                            ] ===
                        e[(d +
                                1
                                ) %
                            3
                        ]
                    ) {
                        a.push(
                            f
                            );
                        break
                    } for (
                f = a
                .length -
                1; 0 <=
                f; f--)
                for (e = a[
                        f]
                    , this
                    .faces
                    .splice(
                        e, 1
                    )
                    , c = 0
                    , g =
                    this
                    .faceVertexUvs
                    .length; c <
                    g; c++)
                    this
                    .faceVertexUvs[
                        c]
                    .splice(
                        e, 1
                    );
            f = this
                .vertices
                .length - b
                .length;
            this.vertices =
                b;
            return f
        }
        , sortFacesByMaterialIndex: function () {
            for (var a =
                    this
                    .faces
                    , b = a
                    .length
                    , c =
                    0; c <
                b; c++) a[c]
                ._id = c;
            a.sort(function (
                a, b
            ) {
                return a
                    .materialIndex -
                    b
                    .materialIndex
            });
            var d = this
                .faceVertexUvs[
                    0]
                , e = this
                .faceVertexUvs[
                    1]
                , f, g;
            d && d
                .length ===
                b && (
                    f = []);
            e && e
                .length ===
                b && (
                    g = []);
            for (c = 0; c <
                b; c++) {
                var h = a[c]
                    ._id;
                f && f.push(
                    d[h]
                );
                g && g.push(
                    e[h]
                )
            }
            f && (this
                .faceVertexUvs[
                    0] =
                f);
            g && (this
                .faceVertexUvs[
                    1] =
                g)
        }
        , toJSON: function () {
            function a(a, b
                , c) {
                return c ?
                    a | 1 <<
                    b : a &
                    ~(1 <<
                        b)
            }

            function b(a) {
                var b = a.x
                    .toString() +
                    a.y
                    .toString() +
                    a.z
                    .toString();
                if (void 0 !==
                    n[b])
                    return n[
                        b
                    ];
                n[b] = k
                    .length /
                    3;
                k.push(a.x
                    , a
                    .y
                    , a
                    .z);
                return n[b]
            }

            function c(a) {
                var b = a.r
                    .toString() +
                    a.g
                    .toString() +
                    a.b
                    .toString();
                if (void 0 !==
                    m[b])
                    return m[
                        b
                    ];
                m[b] = l
                    .length;
                l.push(a
                    .getHex()
                    );
                return m[b]
            }

            function d(a) {
                var b = a.x
                    .toString() +
                    a.y
                    .toString();
                if (void 0 !==
                    q[b])
                    return q[
                        b
                    ];
                q[b] = p
                    .length /
                    2;
                p.push(a.x
                    , a
                    .y);
                return q[b]
            }
            var e = {
                metadata: {
                    version: 4.4
                    , type: "Geometry"
                    , generator: "Geometry.toJSON"
                }
            };
            e.uuid = this
                .uuid;
            e.type = this
                .type;
            "" !== this
                .name && (e
                    .name =
                    this
                    .name);
            if (void 0 !==
                this
                .parameters
            ) {
                var f = this
                    .parameters
                    , g;
                for (g in f)
                    void 0 !==
                    f[g] &&
                    (e[g] =
                        f[g]
                    );
                return e
            }
            f = [];
            for (g = 0; g <
                this
                .vertices
                .length; g++
            ) {
                var h = this
                    .vertices[
                        g];
                f.push(h.x
                    , h
                    .y
                    , h
                    .z)
            }
            var h = []
                , k = []
                , n = {}
                , l = []
                , m = {}
                , p = []
                , q = {};
            for (g = 0; g <
                this.faces
                .length; g++
            ) {
                var x = this
                    .faces[
                        g]
                    , w =
                    void 0 !==
                    this
                    .faceVertexUvs[
                        0][
                        g]
                    , z =
                    0 < x
                    .normal
                    .length()
                    , v =
                    0 < x
                    .vertexNormals
                    .length
                    , y =
                    1 !== x
                    .color
                    .r ||
                    1 !== x
                    .color
                    .g ||
                    1 !== x
                    .color
                    .b
                    , S =
                    0 < x
                    .vertexColors
                    .length
                    , t = 0
                    , t = a(
                        t
                        , 0,
                        0
                    )
                    , t = a(
                        t
                        , 1,
                        !
                        0)
                    , t = a(
                        t
                        , 2,
                        !
                        1)
                    , t = a(
                        t
                        , 3,
                        w
                    )
                    , t = a(
                        t
                        , 4,
                        z
                    )
                    , t = a(
                        t
                        , 5,
                        v
                    )
                    , t = a(
                        t
                        , 6
                        , y
                    )
                    , t = a(
                        t
                        , 7,
                        S
                    );
                h.push(t);
                h.push(x.a
                    , x
                    .b
                    , x
                    .c);
                h.push(x
                    .materialIndex
                    );
                w && (w =
                    this
                    .faceVertexUvs[
                        0
                    ]
                    [g]
                    , h
                    .push(
                        d(w[
                            0
                            ])
                        , d(w[
                            1
                            ])
                        , d(w[
                            2
                            ])
                    )
                );
                z && h.push(
                    b(x
                        .normal
                        )
                );
                v && (z = x
                    .vertexNormals
                    , h
                    .push(
                        b(z[
                            0
                            ])
                        , b(z[
                            1
                            ])
                        , b(z[
                            2
                            ])
                    )
                );
                y && h.push(
                    c(x
                        .color
                        )
                );
                S && (x = x
                    .vertexColors
                    , h
                    .push(
                        c(x[
                            0
                            ])
                        , c(x[
                            1
                            ])
                        , c(x[
                            2
                            ])
                    )
                )
            }
            e.data = {};
            e.data
                .vertices =
                f;
            e.data.normals =
                k;
            0 < l.length &&
                (e.data
                    .colors =
                    l);
            0 < p.length &&
                (e.data
                    .uvs = [
                        p]);
            e.data.faces =
                h;
            return e
        }
        , clone: function () {
            return (new la)
                .copy(this)
        }
        , copy: function (a) {
            var b, c, d, e
                , f, g;
            this
                .vertices = [];
            this
                .colors = [];
            this.faces = [];
            this.faceVertexUvs = [
                []
            ];
            this
                .morphTargets = [];
            this
                .morphNormals = [];
            this
                .skinWeights = [];
            this
                .skinIndices = [];
            this
                .lineDistances = [];
            this.boundingSphere =
                this
                .boundingBox =
                null;
            this.name = a
                .name;
            d = a.vertices;
            b = 0;
            for (c = d
                .length; b <
                c; b++) this
                .vertices
                .push(d[b]
                    .clone()
                );
            d = a.colors;
            b = 0;
            for (c = d
                .length; b <
                c; b++) this
                .colors
                .push(d[b]
                    .clone()
                );
            d = a.faces;
            b = 0;
            for (c = d
                .length; b <
                c; b++) this
                .faces.push(
                    d[b]
                    .clone()
                );
            b = 0;
            for (c = a
                .faceVertexUvs
                .length; b <
                c; b++) {
                var h = a
                    .faceVertexUvs[
                        b];
                void 0 ===
                    this
                    .faceVertexUvs[
                        b
                    ] &&
                    (this
                        .faceVertexUvs[
                            b
                        ] = []
                    );
                d = 0;
                for (e = h
                    .length; d <
                    e; d++
                ) {
                    var k =
                        h[
                            d
                            ]
                        , l = [];
                    f = 0;
                    for (g =
                        k
                        .length; f <
                        g; f++
                    ) l
                        .push(
                            k[
                                f
                                ]
                            .clone()
                        );
                    this.faceVertexUvs[
                            b
                        ]
                        .push(
                            l
                        )
                }
            }
            f = a
                .morphTargets;
            b = 0;
            for (c = f
                .length; b <
                c; b++) {
                g = {};
                g.name = f[
                        b]
                    .name;
                if (void 0 !==
                    f[b]
                    .vertices
                )
                    for (g
                        .vertices = []
                        , d =
                        0
                        , e =
                        f[b]
                        .vertices
                        .length; d <
                        e; d++
                    ) g
                        .vertices
                        .push(
                            f[
                                b
                                ]
                            .vertices[
                                d
                            ]
                            .clone()
                        );
                if (void 0 !==
                    f[b]
                    .normals
                )
                    for (g
                        .normals = []
                        , d =
                        0
                        , e =
                        f[b]
                        .normals
                        .length; d <
                        e; d++
                    ) g
                        .normals
                        .push(
                            f[
                                b
                                ]
                            .normals[
                                d
                            ]
                            .clone()
                        );
                this.morphTargets
                    .push(g)
            }
            f =
                a
                .morphNormals;
            b = 0;
            for (c = f
                .length; b <
                c; b++) {
                g = {};
                if (void 0 !==
                    f[b]
                    .vertexNormals
                )
                    for (g
                        .vertexNormals = []
                        , d =
                        0
                        , e =
                        f[b]
                        .vertexNormals
                        .length; d <
                        e; d++
                    )
                        h =
                        f[b]
                        .vertexNormals[
                            d
                        ]
                        , k = {}
                        , k
                        .a =
                        h.a
                        .clone()
                        , k
                        .b =
                        h.b
                        .clone()
                        , k
                        .c =
                        h.c
                        .clone()
                        , g
                        .vertexNormals
                        .push(
                            k
                        );
                if (void 0 !==
                    f[b]
                    .faceNormals
                )
                    for (g
                        .faceNormals = []
                        , d =
                        0
                        , e =
                        f[b]
                        .faceNormals
                        .length; d <
                        e; d++
                    ) g
                        .faceNormals
                        .push(
                            f[
                                b
                                ]
                            .faceNormals[
                                d
                            ]
                            .clone()
                        );
                this.morphNormals
                    .push(g)
            }
            d = a
                .skinWeights;
            b = 0;
            for (c = d
                .length; b <
                c; b++) this
                .skinWeights
                .push(d[b]
                    .clone()
                );
            d = a
                .skinIndices;
            b =
                0;
            for (c = d
                .length; b <
                c; b++) this
                .skinIndices
                .push(d[b]
                    .clone()
                );
            d = a
                .lineDistances;
            b = 0;
            for (c = d
                .length; b <
                c; b++) this
                .lineDistances
                .push(d[b]);
            b = a
                .boundingBox;
            null !== b && (
                this
                .boundingBox =
                b
                .clone()
            );
            b = a
                .boundingSphere;
            null !== b && (
                this
                .boundingSphere =
                b
                .clone()
            );
            this.elementsNeedUpdate =
                a
                .elementsNeedUpdate;
            this.verticesNeedUpdate =
                a
                .verticesNeedUpdate;
            this.uvsNeedUpdate =
                a
                .uvsNeedUpdate;
            this.normalsNeedUpdate =
                a
                .normalsNeedUpdate;
            this.colorsNeedUpdate =
                a
                .colorsNeedUpdate;
            this.lineDistancesNeedUpdate =
                a
                .lineDistancesNeedUpdate;
            this.groupsNeedUpdate =
                a
                .groupsNeedUpdate;
            return this
        }
        , dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    };
    Object.assign(la.prototype, Ba
        .prototype);
    fa.prototype = {
        constructor: fa
        , isBufferGeometry: !0
        , getIndex: function () {
            return this
                .index
        }
        , setIndex: function (
            a) {
            Array.isArray(
                    a) ?
                this
                .index =
                new(65535 <
                    rb(a) ?
                    Qa : ya)
                (a, 1) :
                this.index =
                a
        }
        , addAttribute: function (
            a, b, c) {
            if (!1 === (b &&
                    b
                    .isBufferAttribute
                ) && !
                1 === (b &&
                    b
                    .isInterleavedBufferAttribute
                ))
                console
                .warn(
                    "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
                )
                , this
                .addAttribute(
                    a
                    , new ba(
                        b, c
                    ));
            else if (
                "index" ===
                a) console
                .warn(
                    "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
                ), this
                .setIndex(
                    b);
            else return this
                .attributes[
                    a] =
                b, this
        }
        , getAttribute: function (
            a) {
            return this
                .attributes[
                    a]
        }
        , removeAttribute: function (
            a) {
            delete this
                .attributes[
                    a];
            return this
        }
        , addGroup: function (a
            , b, c) {
            this.groups
                .push({
                    start: a
                    , count: b
                    , materialIndex: void 0 !==
                        c ?
                        c :
                        0
                })
        }
        , clearGroups: function () {
            this.groups = []
        }
        , setDrawRange: function (
            a, b) {
            this.drawRange
                .start = a;
            this.drawRange
                .count =
                b
        }
        , applyMatrix: function (
            a) {
            var b = this
                .attributes
                .position;
            void 0 !== b &&
                (a.applyToBufferAttribute(
                        b)
                    , b
                    .needsUpdate = !
                    0);
            b = this
                .attributes
                .normal;
            void 0 !== b &&
                ((new pa)
                    .getNormalMatrix(
                        a)
                    .applyToBufferAttribute(
                        b)
                    , b
                    .needsUpdate = !
                    0);
            null !== this
                .boundingBox &&
                this
                .computeBoundingBox();
            null !== this
                .boundingSphere &&
                this
                .computeBoundingSphere();
            return this
        }
        , rotateX: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeRotationX(
                    b
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , rotateY: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeRotationY(
                    b
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , rotateZ: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeRotationZ(
                    b
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , translate: function () {
            var a;
            return function (
                b, c, d
            ) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeTranslation(
                    b
                    , c
                    , d
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , scale: function () {
            var a;
            return function (
                b, c, d
            ) {
                void 0
                    ===
                    a &&
                    (a =
                        new I
                        );
                a.makeScale(
                    b
                    , c
                    , d
                );
                this.applyMatrix(
                    a
                );
                return this
            }
        }()
        , lookAt: function () {
            var a;
            return function (
                b) {
                void 0
                    ===
                    a &&
                    (a =
                        new Y
                    );
                a.lookAt(
                    b
                );
                a
                    .updateMatrix();
                this.applyMatrix(
                    a
                    .matrix
                )
            }
        }()
        , center: function () {
            this
                .computeBoundingBox();
            var a = this
                .boundingBox
                .getCenter()
                .negate();
            this.translate(a
                .x, a.y
                , a.z);
            return a
        }
        , setFromObject: function (
            a) {
            var b = a
                .geometry;
            if (a
                .isPoints ||
                a.isLine) {
                a = new Q(
                    3 *
                    b
                    .vertices
                    .length
                    , 3);
                var c =
                    new Q(
                        3 *
                        b
                        .colors
                        .length
                        , 3
                        );
                this.addAttribute(
                    "position"
                    , a
                    .copyVector3sArray(
                        b
                        .vertices
                    )
                );
                this.addAttribute(
                    "color"
                    , c
                    .copyColorsArray(
                        b
                        .colors
                    )
                );
                b.lineDistances &&
                    b
                    .lineDistances
                    .length ===
                    b
                    .vertices
                    .length &&
                    (a = new Q(
                            b
                            .lineDistances
                            .length
                            , 1
                        )
                        , this
                        .addAttribute(
                            "lineDistance"
                            , a
                            .copyArray(
                                b
                                .lineDistances
                            )
                        )
                    );
                null !== b
                    .boundingSphere &&
                    (this
                        .boundingSphere =
                        b
                        .boundingSphere
                        .clone()
                    );
                null !== b
                    .boundingBox &&
                    (this
                        .boundingBox =
                        b
                        .boundingBox
                        .clone()
                    )
            } else a
                .isMesh &&
                b && b
                .isGeometry &&
                this
                .fromGeometry(
                    b);
            return this
        }
        , updateFromObject: function (
            a) {
            var b = a
                .geometry;
            if (a.isMesh) {
                var c = b
                    .__directGeometry;
                !0 === b
                    .elementsNeedUpdate &&
                    (c = void 0
                        , b
                        .elementsNeedUpdate = !
                        1);
                if (void 0 ===
                    c)
                    return this
                        .fromGeometry(
                            b
                        );
                c.verticesNeedUpdate =
                    b
                    .verticesNeedUpdate;
                c.normalsNeedUpdate =
                    b
                    .normalsNeedUpdate;
                c.colorsNeedUpdate =
                    b
                    .colorsNeedUpdate;
                c.uvsNeedUpdate =
                    b
                    .uvsNeedUpdate;
                c.groupsNeedUpdate =
                    b
                    .groupsNeedUpdate;
                b.verticesNeedUpdate = !
                    1;
                b.normalsNeedUpdate = !
                    1;
                b.colorsNeedUpdate = !
                    1;
                b.uvsNeedUpdate = !
                    1;
                b.groupsNeedUpdate = !
                    1;
                b = c
            }!0 === b
                .verticesNeedUpdate &&
                (c = this
                    .attributes
                    .position
                    , void 0 !==
                    c && (c
                        .copyVector3sArray(
                            b
                            .vertices
                        )
                        , c
                        .needsUpdate = !
                        0)
                    , b
                    .verticesNeedUpdate = !
                    1);
            !0 === b
                .normalsNeedUpdate &&
                (c = this
                    .attributes
                    .normal
                    , void 0 !==
                    c && (c
                        .copyVector3sArray(
                            b
                            .normals
                        )
                        , c
                        .needsUpdate = !
                        0)
                    , b
                    .normalsNeedUpdate = !
                    1);
            !0 === b
                .colorsNeedUpdate &&
                (c = this
                    .attributes
                    .color
                    , void 0 !==
                    c && (c
                        .copyColorsArray(
                            b
                            .colors
                        )
                        , c
                        .needsUpdate = !
                        0)
                    , b
                    .colorsNeedUpdate = !
                    1);
            b.uvsNeedUpdate &&
                (c = this
                    .attributes
                    .uv
                    , void 0 !==
                    c && (c
                        .copyVector2sArray(
                            b
                            .uvs
                        )
                        , c
                        .needsUpdate = !
                        0)
                    , b
                    .uvsNeedUpdate = !
                    1);
            b.lineDistancesNeedUpdate &&
                (c = this
                    .attributes
                    .lineDistance
                    , void 0 !==
                    c && (c
                        .copyArray(
                            b
                            .lineDistances
                        )
                        , c
                        .needsUpdate = !
                        0)
                    , b
                    .lineDistancesNeedUpdate = !
                    1);
            b.groupsNeedUpdate &&
                (b.computeGroups(
                        a
                        .geometry
                    )
                    , this
                    .groups =
                    b
                    .groups
                    , b
                    .groupsNeedUpdate = !
                    1);
            return this
        }
        , fromGeometry: function (
            a) {
            a.__directGeometry =
                (new Lb)
                .fromGeometry(
                    a);
            return this
                .fromDirectGeometry(
                    a
                    .__directGeometry
                )
        }
        , fromDirectGeometry: function (
            a) {
            var b =
                new Float32Array(
                    3 * a
                    .vertices
                    .length
                );
            this.addAttribute(
                "position"
                , (new ba(
                    b
                    , 3
                ))
                .copyVector3sArray(
                    a
                    .vertices
                ));
            0 < a.normals
                .length && (
                    b =
                    new Float32Array(
                        3 *
                        a
                        .normals
                        .length
                    )
                    , this
                    .addAttribute(
                        "normal"
                        , (new ba(
                            b
                            , 3
                        ))
                        .copyVector3sArray(
                            a
                            .normals
                        )
                    ));
            0 < a.colors
                .length && (
                    b =
                    new Float32Array(
                        3 *
                        a
                        .colors
                        .length
                    )
                    , this
                    .addAttribute(
                        "color"
                        , (new ba(
                            b
                            , 3
                        ))
                        .copyColorsArray(
                            a
                            .colors
                        )
                    ));
            0 < a.uvs
                .length && (
                    b =
                    new Float32Array(
                        2 *
                        a
                        .uvs
                        .length
                    )
                    , this
                    .addAttribute(
                        "uv"
                        , (new ba(
                            b
                            , 2
                        ))
                        .copyVector2sArray(
                            a
                            .uvs
                        )
                    ));
            0 < a.uvs2
                .length && (
                    b =
                    new Float32Array(
                        2 *
                        a
                        .uvs2
                        .length
                    )
                    , this
                    .addAttribute(
                        "uv2"
                        , (new ba(
                            b
                            , 2
                        ))
                        .copyVector2sArray(
                            a
                            .uvs2
                        )
                    ));
            0 < a.indices
                .length && (
                    b = new(
                        65535 <
                        rb(a
                            .indices
                            ) ?
                        Uint32Array :
                        Uint16Array
                    )(
                        3 *
                        a
                        .indices
                        .length
                    )
                    , this
                    .setIndex(
                        (new ba(b
                            , 1
                        ))
                        .copyIndicesArray(
                            a
                            .indices
                        )
                    ));
            this.groups = a
                .groups;
            for (var c in a
                    .morphTargets) {
                for (var b = []
                        , d =
                        a
                        .morphTargets[
                            c
                        ]
                        , e =
                        0
                        , f =
                        d
                        .length; e <
                    f; e++
                ) {
                    var g =
                        d[
                            e
                            ]
                        , h =
                        new Q(
                            3 *
                            g
                            .length
                            , 3
                        );
                    b.push(h.copyVector3sArray(
                        g
                    ))
                }
                this.morphAttributes[
                        c] =
                    b
            }
            0 < a
                .skinIndices
                .length && (
                    c =
                    new Q(
                        4 *
                        a
                        .skinIndices
                        .length
                        , 4
                        )
                    , this
                    .addAttribute(
                        "skinIndex"
                        , c
                        .copyVector4sArray(
                            a
                            .skinIndices
                        )
                    ));
            0 < a
                .skinWeights
                .length && (
                    c =
                    new Q(
                        4 *
                        a
                        .skinWeights
                        .length
                        , 4
                        )
                    , this
                    .addAttribute(
                        "skinWeight"
                        , c
                        .copyVector4sArray(
                            a
                            .skinWeights
                        )
                    ));
            null !== a
                .boundingSphere &&
                (this
                    .boundingSphere =
                    a
                    .boundingSphere
                    .clone()
                );
            null !== a
                .boundingBox &&
                (this
                    .boundingBox =
                    a
                    .boundingBox
                    .clone()
                );
            return this
        }
        , computeBoundingBox: function () {
            null === this
                .boundingBox &&
                (this
                    .boundingBox =
                    new ra);
            var a = this
                .attributes
                .position;
            void 0 !== a ?
                this
                .boundingBox
                .setFromBufferAttribute(
                    a) :
                this
                .boundingBox
                .makeEmpty();
            (isNaN(this
                    .boundingBox
                    .min.x
                ) ||
                isNaN(this
                    .boundingBox
                    .min.y
                ) ||
                isNaN(this
                    .boundingBox
                    .min.z)
            ) && console
                .error(
                    'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.'
                    , this)
        }
        , computeBoundingSphere: function () {
            var a =
                new ra
                , b = new m;
            return function () {
                null ===
                    this
                    .boundingSphere &&
                    (this
                        .boundingSphere =
                        new Ia
                    );
                var c =
                    this
                    .attributes
                    .position;
                if (c) {
                    var d =
                        this
                        .boundingSphere
                        .center;
                    a.setFromBufferAttribute(
                        c
                    );
                    a.getCenter(
                        d
                    );
                    for (
                        var e =
                            0
                            , f =
                            0
                            , g =
                            c
                            .count; f <
                        g; f++
                    )
                        b
                        .x =
                        c
                        .getX(
                            f
                        )
                        , b
                        .y =
                        c
                        .getY(
                            f
                        )
                        , b
                        .z =
                        c
                        .getZ(
                            f
                        )
                        , e =
                        Math
                        .max(
                            e
                            , d
                            .distanceToSquared(
                                b
                            )
                        );
                    this.boundingSphere
                        .radius =
                        Math
                        .sqrt(
                            e
                        );
                    isNaN
                        (this
                            .boundingSphere
                            .radius
                        ) &&
                        console
                        .error(
                            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.'
                            , this
                        )
                }
            }
        }()
        , computeFaceNormals: function () {}
        , computeVertexNormals: function () {
            var a = this
                .index
                , b = this
                .attributes
                , c = this
                .groups;
            if (b
                .position) {
                var d = b
                    .position
                    .array;
                if (void 0 ===
                    b.normal
                ) this
                    .addAttribute(
                        "normal"
                        , new ba(
                            new Float32Array(
                                d
                                .length
                            )
                            , 3
                        )
                    );
                else
                    for (var e =
                            b
                            .normal
                            .array
                            , f =
                            0
                            , g =
                            e
                            .length; f <
                        g; f++
                    ) e[
                            f
                            ] =
                        0;
                var e = b
                    .normal
                    .array
                    , h, k
                    , l, B =
                    new m
                    , r =
                    new m
                    , p =
                    new m
                    , q =
                    new m
                    , x =
                    new m;
                if (a) {
                    a = a
                        .array;
                    0 === c
                        .length &&
                        this
                        .addGroup(
                            0
                            , a
                            .length
                        );
                    for (var w =
                            0
                            , z =
                            c
                            .length; w <
                        z; ++
                        w)
                        for (
                            f =
                            c[
                                w
                                ]
                            , g =
                            f
                            .start
                            , h =
                            f
                            .count
                            , f =
                            g
                            , g +=
                            h; f <
                            g; f +=
                            3
                        )
                            h =
                            3 *
                            a[f +
                                0
                            ]
                            , k =
                            3 *
                            a[f +
                                1
                            ]
                            , l =
                            3 *
                            a[f +
                                2
                            ]
                            , B
                            .fromArray(
                                d
                                , h
                            )
                            , r
                            .fromArray(
                                d
                                , k
                            )
                            , p
                            .fromArray(
                                d
                                , l
                            )
                            , q
                            .subVectors(
                                p
                                , r
                            )
                            , x
                            .subVectors(
                                B
                                , r
                            )
                            , q
                            .cross(
                                x
                            )
                            , e[
                                h
                                ] +=
                            q
                            .x
                            , e[h +
                                1
                            ] +=
                            q
                            .y
                            , e[h +
                                2
                            ] +=
                            q
                            .z
                            , e[
                                k
                                ] +=
                            q
                            .x
                            , e[k +
                                1
                            ] +=
                            q
                            .y
                            , e[k +
                                2
                            ] +=
                            q
                            .z
                            , e[
                                l
                                ] +=
                            q
                            .x
                            , e[l +
                                1
                            ] +=
                            q
                            .y
                            , e[l +
                                2
                            ] +=
                            q
                            .z
                } else
                    for (f =
                        0
                        , g =
                        d
                        .length; f <
                        g; f +=
                        9) B
                        .fromArray(
                            d
                            , f
                        )
                        , r
                        .fromArray(
                            d
                            , f +
                            3
                        )
                        , p
                        .fromArray(
                            d
                            , f +
                            6
                        )
                        , q
                        .subVectors(
                            p
                            , r
                        )
                        , x
                        .subVectors(
                            B
                            , r
                        )
                        , q
                        .cross(
                            x
                        )
                        , e[
                            f
                            ] =
                        q.x
                        , e[f +
                            1
                        ] =
                        q.y
                        , e[f +
                            2
                        ] =
                        q.z
                        , e[f +
                            3
                        ] =
                        q.x
                        , e[f +
                            4
                        ] =
                        q.y
                        , e[f +
                            5
                        ] =
                        q.z
                        , e[f +
                            6
                        ] =
                        q.x
                        , e[f +
                            7
                        ] =
                        q.y
                        , e[f +
                            8
                        ] =
                        q.z;
                this
                    .normalizeNormals();
                b.normal
                    .needsUpdate = !
                    0
            }
        }
        , merge: function (a
            , b) {
            if (!1 === (a &&
                    a
                    .isBufferGeometry
                ))
                console
                .error(
                    "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry."
                    , a);
            else {
                void 0 ===
                    b && (
                        b =
                        0);
                var c = this
                    .attributes
                    , d;
                for (d in c)
                    if (void 0 !==
                        a
                        .attributes[
                            d
                        ]
                    )
                        for (
                            var e =
                                c[
                                    d
                                    ]
                                .array
                                , f =
                                a
                                .attributes[
                                    d
                                ]
                                , g =
                                f
                                .array
                                , h =
                                0
                                , f =
                                f
                                .itemSize *
                                b; h <
                            g
                            .length; h++
                            , f++
                        )
                            e[
                                f
                                ] =
                            g[
                                h
                                ];
                return this
            }
        }
        , normalizeNormals: function () {
            for (var a =
                    this
                    .attributes
                    .normal
                    .array
                    , b, c,
                    d
                    , e = 0
                    , f = a
                    .length; e <
                f; e += 3)
                b = a[e]
                , c = a[e +
                    1], d =
                a[
                    e + 2]
                , b = 1 /
                Math
                .sqrt(b *
                    b + c *
                    c + d *
                    d)
                , a[e] *= b
                , a[e +
                1] *=
                b, a[e +
                    2] *= b
        }
        , toNonIndexed: function () {
            if (null ===
                this.index)
                return console
                    .warn(
                        "THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."
                    )
                    , this;
            var a = new fa
                , b = this
                .index
                .array
                , c = this
                .attributes
                , d;
            for (d in c) {
                for (var e =
                        c[
                            d
                            ]
                        , f =
                        e
                        .array
                        , e =
                        e
                        .itemSize
                        , g =
                        new f
                        .constructor(
                            b
                            .length *
                            e
                        )
                        , h
                        , k =
                        0
                        , l =
                        0
                        , m =
                        b
                        .length; l <
                    m; l++
                ) {
                    h = b[
                            l
                            ] *
                        e;
                    for (var r =
                            0; r <
                        e; r++
                    ) g[
                            k++
                            ] =
                        f[
                            h++
                            ]
                }
                a.addAttribute(
                    d
                    , new ba(
                        g
                        , e
                    )
                )
            }
            return a
        }
        , toJSON: function () {
            var a = {
                metadata: {
                    version: 4.4
                    , type: "BufferGeometry"
                    , generator: "BufferGeometry.toJSON"
                }
            };
            a.uuid = this
                .uuid;
            a.type = this
                .type;
            "" !== this
                .name && (a
                    .name =
                    this
                    .name);
            if (void 0 !==
                this
                .parameters
            ) {
                var b = this
                    .parameters
                    , c;
                for (c in b)
                    void 0 !==
                    b[c] &&
                    (a[c] =
                        b[c]
                    );
                return a
            }
            a.data = {
                attributes: {}
            };
            var d = this
                .index;
            null !== d && (
                b =
                Array
                .prototype
                .slice
                .call(d
                    .array
                ), a
                .data
                .index = {
                    type: d
                        .array
                        .constructor
                        .name
                    , array: b
                });
            d = this
                .attributes;
            for (c in d) {
                var e = d[
                        c]
                    , b =
                    Array
                    .prototype
                    .slice
                    .call(e
                        .array
                    );
                a.data
                    .attributes[
                        c
                    ] = {
                        itemSize: e
                            .itemSize
                        , type: e
                            .array
                            .constructor
                            .name
                        , array: b
                        , normalized: e
                            .normalized
                    }
            }
            c = this.groups;
            0 < c.length &&
                (a.data
                    .groups =
                    JSON
                    .parse(
                        JSON
                        .stringify(
                            c
                        )
                    ));
            c = this
                .boundingSphere;
            null !== c && (a
                .data
                .boundingSphere = {
                    center: c
                        .center
                        .toArray()
                    , radius: c
                        .radius
                });
            return a
        }
        , clone: function () {
            return (new fa)
                .copy(this)
        }
        , copy: function (a) {
            var b, c, d;
            this.index =
                null;
            this
                .attributes = {};
            this
                .morphAttributes = {};
            this
                .groups = [];
            this.boundingSphere =
                this
                .boundingBox =
                null;
            this.name = a
                .name;
            c = a.index;
            null !== c &&
                this
                .setIndex(c
                    .clone()
                );
            c = a
                .attributes;
            for (b in c)
                this
                .addAttribute(
                    b, c[b]
                    .clone()
                );
            var e = a
                .morphAttributes;
            for (b in e) {
                var f = []
                    , g = e[
                        b];
                c = 0;
                for (d = g
                    .length; c <
                    d; c++)
                    f.push(
                        g[c]
                        .clone()
                    );
                this.morphAttributes[
                        b] =
                    f
            }
            b = a.groups;
            c = 0;
            for (d = b
                .length; c <
                d; c++) e =
                b[c], this
                .addGroup(e
                    .start
                    , e
                    .count
                    , e
                    .materialIndex
                );
            b = a
                .boundingBox;
            null !== b && (
                this
                .boundingBox =
                b
                .clone()
            );
            b = a
                .boundingSphere;
            null !== b && (
                this
                .boundingSphere =
                b
                .clone()
            );
            this.drawRange
                .start = a
                .drawRange
                .start;
            this.drawRange
                .count = a
                .drawRange
                .count;
            return this
        }
        , dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    };
    fa.MaxIndex = 65535;
    Object.assign(fa.prototype
        , Ba.prototype);
    Za.prototype = Object.assign(
        Object.create(Y
            .prototype), {
            constructor: Za
            , isMesh: !0
            , setDrawMode: function (
                a) {
                this.drawMode =
                    a
            }
            , copy: function (
                a) {
                Y.prototype
                    .copy
                    .call(
                        this
                        , a
                        );
                this.drawMode =
                    a
                    .drawMode;
                return this
            }
            , updateMorphTargets: function () {
                var a = this
                    .geometry
                    .morphTargets;
                if (void 0 !==
                    a && 0 <
                    a.length
                ) {
                    this
                        .morphTargetInfluences = [];
                    this
                        .morphTargetDictionary = {};
                    for (var b =
                            0
                            , c =
                            a
                            .length; b <
                        c; b++
                    )
                        this
                        .morphTargetInfluences
                        .push(
                            0
                        )
                        , this
                        .morphTargetDictionary[
                            a[
                                b
                                ]
                            .name
                        ] =
                        b
                }
            }
            , raycast: function () {
                function a(
                    a
                    , b, c
                    , d, e,
                    f
                    , g) {
                    na.barycoordFromPoint(
                        a
                        , b
                        , c
                        , d
                        , w
                    );
                    e.multiplyScalar(
                        w
                        .x
                    );
                    f.multiplyScalar(
                        w
                        .y
                    );
                    g.multiplyScalar(
                        w
                        .z
                    );
                    e.add(f)
                        .add(
                            g
                        );
                    return e
                        .clone()
                }

                function b(
                    a, b, c
                    , d, e,
                    f
                    , g) {
                    var h =
                        a
                        .material;
                    if (null ===
                        (1 ===
                            h
                            .side ?
                            c
                            .intersectTriangle(
                                f
                                , e
                                , d
                                , !
                                0
                                , g
                            ) :
                            c
                            .intersectTriangle(
                                d
                                , e
                                , f
                                , 2 !==
                                h
                                .side
                                , g
                            )
                        )
                    )
                        return null;
                    v.copy(
                        g
                        );
                    v.applyMatrix4(
                        a
                        .matrixWorld
                    );
                    c = b
                        .ray
                        .origin
                        .distanceTo(
                            v
                        );
                    return c <
                        b
                        .near ||
                        c >
                        b
                        .far ?
                        null :
                        {
                            distance: c
                            , point: v
                                .clone()
                            , object: a
                        }
                }

                function c(
                    c, d, e
                    , f, l,
                    n
                    , m, r
                    ) {
                    g.fromBufferAttribute(
                        f
                        , n
                    );
                    h.fromBufferAttribute(
                        f
                        , m
                    );
                    k.fromBufferAttribute(
                        f
                        , r
                    );
                    if (c =
                        b(c, d
                            , e
                            , g
                            , h
                            , k
                            , z
                        )
                    )
                        l &&
                        (p.fromBufferAttribute(
                                l
                                , n
                            )
                            , q
                            .fromBufferAttribute(
                                l
                                , m
                            )
                            , x
                            .fromBufferAttribute(
                                l
                                , r
                            )
                            , c
                            .uv =
                            a(z, g
                                , h
                                , k
                                , p
                                , q
                                , x
                            )
                        )
                        , c
                        .face =
                        new xa(
                            n
                            , m
                            , r
                            , na
                            .normal(
                                g
                                , h
                                , k
                            )
                        )
                        , c
                        .faceIndex =
                        n;
                    return c
                }
                var d =
                    new I
                    , e =
                    new Pa
                    , f =
                    new Ia
                    , g =
                    new m
                    , h =
                    new m
                    , k =
                    new m
                    , l =
                    new m
                    , B =
                    new m
                    , r =
                    new m
                    , p =
                    new A
                    , q =
                    new A
                    , x =
                    new A
                    , w =
                    new m
                    , z =
                    new m
                    , v =
                    new m;
                return function (
                    m, w
                ) {
                    var t =
                        this
                        .geometry
                        , v =
                        this
                        .material
                        , G =
                        this
                        .matrixWorld;
                    if (void 0 !==
                        v &&
                        (null ===
                            t
                            .boundingSphere &&
                            t
                            .computeBoundingSphere()
                            , f
                            .copy(
                                t
                                .boundingSphere
                            )
                            , f
                            .applyMatrix4(
                                G
                            )
                            , !
                            1 !==
                            m
                            .ray
                            .intersectsSphere(
                                f
                            ) &&
                            (d.getInverse(
                                    G
                                )
                                , e
                                .copy(
                                    m
                                    .ray
                                )
                                .applyMatrix4(
                                    d
                                )
                                , null ===
                                t
                                .boundingBox ||
                                !
                                1 !==
                                e
                                .intersectsBox(
                                    t
                                    .boundingBox
                                )
                            )
                        )
                    ) {
                        var
                            C;
                        if (t
                            .isBufferGeometry
                        ) {
                            var E
                                , J
                                , v =
                                t
                                .index
                                , F =
                                t
                                .attributes
                                .position
                                , G =
                                t
                                .attributes
                                .uv
                                , K
                                , M;
                            if (null !==
                                v
                            )
                                for (
                                    K =
                                    0
                                    , M =
                                    v
                                    .count; K <
                                    M; K +=
                                    3
                                ) {
                                    if (t =
                                        v
                                        .getX(
                                            K
                                        )
                                        , E =
                                        v
                                        .getX(
                                            K +
                                            1
                                        )
                                        , J =
                                        v
                                        .getX(
                                            K +
                                            2
                                        )
                                        , C =
                                        c(this
                                            , m
                                            , e
                                            , F
                                            , G
                                            , t
                                            , E
                                            , J
                                        )
                                    )
                                        C
                                        .faceIndex =
                                        Math
                                        .floor(
                                            K /
                                            3
                                        )
                                        , w
                                        .push(
                                            C
                                        )
                                } else
                                    for (
                                        K =
                                        0
                                        , M =
                                        F
                                        .count; K <
                                        M; K +=
                                        3
                                    )
                                        if (t =
                                            K
                                            , E =
                                            K +
                                            1
                                            , J =
                                            K +
                                            2
                                            , C =
                                            c(this
                                                , m
                                                , e
                                                , F
                                                , G
                                                , t
                                                , E
                                                , J
                                            )
                                        )
                                            C
                                            .index =
                                            t
                                            , w
                                            .push(
                                                C
                                            )
                        } else if (
                            t
                            .isGeometry
                        ) {
                            var X
                                , V
                                , G =
                                v &&
                                v
                                .isMultiMaterial;
                            K = !
                                0 ===
                                G ?
                                v
                                .materials :
                                null;
                            M = t
                                .vertices;
                            E = t
                                .faces;
                            J = t
                                .faceVertexUvs[
                                    0
                                ];
                            0 < J
                                .length &&
                                (F =
                                    J
                                    );
                            for (
                                var L =
                                    0
                                    , O =
                                    E
                                    .length; L <
                                O; L++
                            ) {
                                var D =
                                    E[
                                        L
                                        ];
                                C = !
                                    0 ===
                                    G ?
                                    K[D
                                        .materialIndex
                                        ] :
                                    v;
                                if (void 0 !==
                                    C
                                ) {
                                    J = M[D
                                        .a
                                        ];
                                    X = M[D
                                        .b
                                        ];
                                    V = M[D
                                        .c
                                        ];
                                    if (!
                                        0 ===
                                        C
                                        .morphTargets
                                    ) {
                                        C = t
                                            .morphTargets;
                                        var H =
                                            this
                                            .morphTargetInfluences;
                                        g.set(0, 0
                                            , 0
                                        );
                                        h.set(0, 0
                                            , 0
                                        );
                                        k.set(0, 0
                                            , 0
                                        );
                                        for (
                                            var I =
                                                0
                                                , T =
                                                C
                                                .length; I <
                                            T; I++
                                        ) {
                                            var A =
                                                H[
                                                    I
                                                    ];
                                            if (0 !==
                                                A
                                            ) {
                                                var P =
                                                    C[
                                                        I
                                                        ]
                                                    .vertices;
                                                g.addScaledVector(
                                                    l
                                                    .subVectors(
                                                        P[D
                                                            .a
                                                            ]
                                                        , J
                                                    )
                                                    , A
                                                );
                                                h.addScaledVector(
                                                    B
                                                    .subVectors(
                                                        P[D
                                                            .b
                                                            ]
                                                        , X
                                                    )
                                                    , A
                                                );
                                                k.addScaledVector(
                                                    r
                                                    .subVectors(
                                                        P[D
                                                            .c
                                                            ]
                                                        , V
                                                    )
                                                    , A
                                                )
                                            }
                                        }
                                        g.add(
                                            J
                                            );
                                        h.add(
                                            X
                                            );
                                        k.add(
                                            V
                                            );
                                        J =
                                            g;
                                        X =
                                            h;
                                        V = k
                                    }
                                    if (C =
                                        b(this
                                            , m
                                            , e
                                            , J
                                            , X
                                            , V
                                            , z
                                        )
                                    )
                                        F &&
                                        (H = F[
                                                L
                                                ]
                                            , p
                                            .copy(
                                                H[
                                                    0
                                                    ]
                                            )
                                            , q
                                            .copy(
                                                H[
                                                    1
                                                    ]
                                            )
                                            , x
                                            .copy(
                                                H[
                                                    2
                                                    ]
                                            )
                                            , C
                                            .uv =
                                            a(z, J
                                                , X
                                                , V
                                                , p
                                                , q
                                                , x
                                            )
                                        )
                                        , C
                                        .face =
                                        D
                                        , C
                                        .faceIndex =
                                        L
                                        , w
                                        .push(
                                            C
                                        )
                                }
                            }
                        }
                    }
                }
            }()
            , clone: function () {
                return (new this
                        .constructor(
                            this
                            .geometry
                            , this
                            .material
                        )
                    )
                    .copy(
                        this
                    )
            }
        });
    ab.prototype = Object.create(fa
        .prototype);
    ab.prototype.constructor = ab;
    bb.prototype = Object.create(fa
        .prototype);
    bb.prototype.constructor = bb;
    ka.prototype = Object.create(Y
        .prototype);
    ka.prototype.constructor =
        ka;
    ka.prototype.isCamera = !0;
    ka.prototype.getWorldDirection =
        function () {
            var a = new aa;
            return function (b) {
                b = b || new m;
                this.getWorldQuaternion(
                    a);
                return b.set(0
                        , 0, -1)
                    .applyQuaternion(
                        a)
            }
        }();
    ka.prototype.lookAt =
        function () {
            var a = new I;
            return function (b) {
                a.lookAt(this
                    .position
                    , b,
                    this
                    .up);
                this.quaternion
                    .setFromRotationMatrix(
                        a)
            }
        }();
    ka.prototype.clone =
        function () {
            return (new this
                    .constructor)
                .copy(this)
        };
    ka.prototype.copy = function (
        a) {
        Y.prototype.copy.call(
            this, a);
        this.matrixWorldInverse
            .copy(a
                .matrixWorldInverse
            );
        this.projectionMatrix
            .copy(a
                .projectionMatrix
            );
        return this
    };
    cb.prototype = Object.assign(
        Object.create(ka
            .prototype), {
            constructor: cb
            , isPerspectiveCamera:
                !0
            , copy: function (
                a) {
                ka.prototype
                    .copy
                    .call(
                        this
                        , a
                        );
                this.fov = a
                    .fov;
                this.zoom =
                    a.zoom;
                this.near =
                    a.near;
                this.far = a
                    .far;
                this.focus =
                    a.focus;
                this.aspect =
                    a
                    .aspect;
                this.view =
                    null ===
                    a.view ?
                    null :
                    Object
                    .assign({}
                        , a
                        .view
                    );
                this.filmGauge =
                    a
                    .filmGauge;
                this.filmOffset =
                    a
                    .filmOffset;
                return this
            }
            , setFocalLength: function (
                a) {
                a = .5 *
                    this
                    .getFilmHeight() /
                    a;
                this.fov =
                    2 * P
                    .RAD2DEG *
                    Math
                    .atan(
                        a);
                this.updateProjectionMatrix()
            }
            , getFocalLength: function () {
                var a = Math
                    .tan(
                        .5 *
                        P
                        .DEG2RAD *
                        this
                        .fov
                    );
                return .5 *
                    this
                    .getFilmHeight() /
                    a
            }
            , getEffectiveFOV: function () {
                return 2 * P
                    .RAD2DEG *
                    Math
                    .atan(
                        Math
                        .tan(
                            .5 *
                            P
                            .DEG2RAD *
                            this
                            .fov
                        ) /
                        this
                        .zoom
                    )
            }
            , getFilmWidth: function () {
                return this
                    .filmGauge *
                    Math
                    .min(
                        this
                        .aspect
                        , 1)
            }
            , getFilmHeight: function () {
                return this
                    .filmGauge /
                    Math
                    .max(
                        this
                        .aspect
                        , 1)
            }
            , setViewOffset: function (
                a, b, c, d
                , e, f) {
                this.aspect =
                    a / b;
                this.view = {
                    fullWidth: a
                    , fullHeight: b
                    , offsetX: c
                    , offsetY: d
                    , width: e
                    , height: f
                };
                this.updateProjectionMatrix()
            }
            , clearViewOffset: function () {
                this.view =
                    null;
                this.updateProjectionMatrix()
            }
            , updateProjectionMatrix: function () {
                var a = this
                    .near
                    , b =
                    a * Math
                    .tan(
                        .5 *
                        P
                        .DEG2RAD *
                        this
                        .fov
                    ) /
                    this
                    .zoom
                    , c =
                    2 * b
                    , d =
                    this
                    .aspect *
                    c
                    , e = -
                    .5 * d
                    , f =
                    this
                    .view;
                if (null !==
                    f) var
                    g =
                    f
                    .fullWidth
                    , h =
                    f
                    .fullHeight
                    , e =
                    e +
                    f
                    .offsetX *
                    d /
                    g
                    , b =
                    b -
                    f
                    .offsetY *
                    c /
                    h
                    , d =
                    f
                    .width /
                    g *
                    d
                    , c =
                    f
                    .height /
                    h *
                    c;
                f = this
                    .filmOffset;
                0 !== f && (
                    e +=
                    a *
                    f /
                    this
                    .getFilmWidth()
                );
                this.projectionMatrix
                    .makePerspective(
                        e
                        , e +
                        d
                        , b
                        , b -
                        c
                        , a
                        , this
                        .far
                    )
            }
            , toJSON: function (
                a) {
                a = Y
                    .prototype
                    .toJSON
                    .call(
                        this
                        , a
                    );
                a.object
                    .fov =
                    this
                    .fov;
                a.object
                    .zoom =
                    this
                    .zoom;
                a.object
                    .near =
                    this
                    .near;
                a.object
                    .far =
                    this
                    .far;
                a.object
                    .focus =
                    this
                    .focus;
                a.object
                    .aspect =
                    this
                    .aspect;
                null !==
                    this
                    .view &&
                    (a.object
                        .view =
                        Object
                        .assign({}
                            , this
                            .view
                        )
                    );
                a.object
                    .filmGauge =
                    this
                    .filmGauge;
                a.object
                    .filmOffset =
                    this
                    .filmOffset;
                return a
            }
        });
    sb.prototype = Object.assign(
        Object.create(ka
            .prototype), {
            constructor: sb
            , isOrthographicCamera:
                !0
            , copy: function (
                a) {
                ka.prototype
                    .copy
                    .call(
                        this
                        , a
                        );
                this.left =
                    a.left;
                this.right =
                    a.right;
                this.top = a
                    .top;
                this.bottom =
                    a
                    .bottom;
                this.near =
                    a.near;
                this.far = a
                    .far;
                this.zoom =
                    a.zoom;
                this.view =
                    null ===
                    a.view ?
                    null :
                    Object
                    .assign({}
                        , a
                        .view
                    );
                return this
            }
            , setViewOffset: function (
                a, b, c, d
                , e, f) {
                this.view = {
                    fullWidth: a
                    , fullHeight: b
                    , offsetX: c
                    , offsetY: d
                    , width: e
                    , height: f
                };
                this.updateProjectionMatrix()
            }
            , clearViewOffset: function () {
                this.view =
                    null;
                this.updateProjectionMatrix()
            }
            , updateProjectionMatrix: function () {
                var a = (
                        this
                        .right -
                        this
                        .left
                    ) /
                    (2 * this
                        .zoom
                    )
                    , b = (
                        this
                        .top -
                        this
                        .bottom
                    ) /
                    (2 * this
                        .zoom
                    )
                    , c = (
                        this
                        .right +
                        this
                        .left
                    ) /
                    2
                    , d = (
                        this
                        .top +
                        this
                        .bottom
                    ) /
                    2
                    , e =
                    c - a
                    , c =
                    c + a
                    , a =
                    d + b
                    , b =
                    d - b;
                if (null !==
                    this
                    .view)
                    var c =
                        this
                        .zoom /
                        (this
                            .view
                            .width /
                            this
                            .view
                            .fullWidth
                        )
                        , b =
                        this
                        .zoom /
                        (this
                            .view
                            .height /
                            this
                            .view
                            .fullHeight
                        )
                        , f =
                        (this
                            .right -
                            this
                            .left
                        ) /
                        this
                        .view
                        .width
                        , d =
                        (this
                            .top -
                            this
                            .bottom
                        ) /
                        this
                        .view
                        .height
                        , e =
                        e +
                        this
                        .view
                        .offsetX /
                        c *
                        f
                        , c =
                        e +
                        this
                        .view
                        .width /
                        c *
                        f
                        , a =
                        a -
                        this
                        .view
                        .offsetY /
                        b *
                        d
                        , b =
                        a -
                        this
                        .view
                        .height /
                        b *
                        d;
                this.projectionMatrix
                    .makeOrthographic(
                        e
                        , c
                        , a
                        , b
                        , this
                        .near
                        , this
                        .far
                    )
            }
            , toJSON: function (
                a) {
                a = Y
                    .prototype
                    .toJSON
                    .call(
                        this
                        , a
                        );
                a.object
                    .zoom =
                    this
                    .zoom;
                a.object
                    .left =
                    this
                    .left;
                a.object
                    .right =
                    this
                    .right;
                a.object
                    .top =
                    this
                    .top;
                a.object
                    .bottom =
                    this
                    .bottom;
                a.object
                    .near =
                    this
                    .near;
                a.object
                    .far =
                    this
                    .far;
                null !==
                    this
                    .view &&
                    (a.object
                        .view =
                        Object
                        .assign({}
                            , this
                            .view
                        )
                    );
                return a
            }
        });
    var Ic = 0;
    Aa.prototype = Object.create(Y
        .prototype);
    Aa.prototype.constructor = Aa;
    Aa.prototype.copy = function (a
        , b) {
        Y.prototype.copy.call(
            this, a, b);
        null !== a.background &&
            (this.background = a
                .background
                .clone());
        null !== a.fog && (this
            .fog = a.fog
            .clone());
        null !== a
            .overrideMaterial &&
            (this
                .overrideMaterial =
                a
                .overrideMaterial
                .clone());
        this.autoUpdate = a
            .autoUpdate;
        this.matrixAutoUpdate =
            a.matrixAutoUpdate;
        return this
    };
    Aa.prototype.toJSON = function (
        a) {
        var b = Y.prototype
            .toJSON.call(this
                , a);
        null !== this
            .background && (b
                .object
                .background =
                this.background
                .toJSON(a));
        null !== this.fog && (b
            .object.fog =
            this.fog
            .toJSON());
        return b
    };
    Va.prototype = Object.create(ga
        .prototype);
    Va.prototype.constructor = Va;
    var Vb = {
            enabled: !1
            , files: {}
            , add: function (a, b) {
                !1 !== this
                    .enabled &&
                    (this.files[
                            a] =
                        b)
            }
            , get: function (a) {
                if (!1 !== this
                    .enabled)
                    return this
                        .files[
                            a]
            }
            , remove: function (a) {
                delete this
                    .files[a]
            }
            , clear: function () {
                this.files = {}
            }
        }
        , Sb = new function (a, b
            , c) {
            var d = this
                , e = !1
                , f = 0
                , g = 0;
            this.onStart = void 0;
            this.onLoad = a;
            this.onProgress = b;
            this.onError = c;
            this.itemStart =
                function (a) {
                    g++;
                    if (!1 === e &&
                        void 0 !== d
                        .onStart) d
                        .onStart(a
                            , f, g);
                    e = !0
                };
            this.itemEnd =
                function (
                    a) {
                    f++;
                    if (void 0 !== d
                        .onProgress)
                        d
                        .onProgress(
                            a, f, g
                        );
                    if (f === g && (
                            e = !1
                            , void 0 !==
                            d.onLoad
                        )) d
                        .onLoad()
                };
            this.itemError =
                function (a) {
                    if (void 0 !== d
                        .onError) d
                        .onError(a)
                }
        };
    Object.assign(Rb.prototype, {
        load: function (a,
            b
            , c, d) {
            void 0 ===
                a && (
                    a =
                    "");
            void 0 !==
                this
                .path &&
                (a = this
                    .path +
                    a);
            var e =
                this
                , f = Vb
                .get(a);
            if (void 0 !==
                f)
                return e
                    .manager
                    .itemStart(
                        a
                    )
                    , setTimeout(
                        function () {
                            b && b(
                                f
                                );
                            e.manager
                                .itemEnd(
                                    a
                                )
                        }
                        , 0
                    )
                    , f;
            c = document
                .createElementNS(
                    "http://www.w3.org/1999/xhtml"
                    , "img"
                );
            c.addEventListener(
                "load"
                , function () {
                    Vb.add(a
                        , this
                    );
                    b && b(
                        this
                        );
                    e.manager
                        .itemEnd(
                            a
                        )
                }, !
                1);
            c.addEventListener(
                "error"
                , function (
                    b
                ) {
                    d && d(
                        b
                        );
                    e.manager
                        .itemError(
                            a
                        )
                }, !
                1);
            void 0 !==
                this
                .crossOrigin &&
                (c.crossOrigin =
                    this
                    .crossOrigin
                );
            e.manager
                .itemStart(
                    a);
            c.src = a;
            return c
        }
        , setCrossOrigin: function (
            a) {
            this.crossOrigin =
                a;
            return this
        }
        , setPath: function (
            a) {
            this.path =
                a;
            return this
        }
    });
    Object.assign(Tb.prototype, {
        load: function (a,
            b
            , c, d) {
            var e =
                new ga
                , f =
                new Rb(
                    this
                    .manager
                );
            f.setCrossOrigin(
                this
                .crossOrigin
            );
            f.setPath(
                this
                .path
            );
            f.load(a
                , function (
                    c
                ) {
                    var d =
                        0 <
                        a
                        .search(
                            /\.(jpg|jpeg)$/
                        ) ||
                        0 ===
                        a
                        .search(
                            /^data\:image\/jpeg/
                        );
                    e.format =
                        d ?
                        1022 :
                        1023;
                    e.image =
                        c;
                    e.needsUpdate = !
                        0;
                    void 0
                        !==
                        b &&
                        b(
                            e
                            )
                }
                , c,
                d
            );
            return e
        }
        , setCrossOrigin: function (
            a) {
            this.crossOrigin =
                a;
            return this
        }
        , setPath: function (
            a) {
            this.path =
                a;
            return this
        }
    });
    vb.prototype = {
        constructor: vb
        , linePrecision: 1
        , set: function (a, b) {
            this.ray.set(a
                , b)
        }
        , setFromCamera: function (
            a, b) {
            b && b
                .isPerspectiveCamera ?
                (this.ray
                    .origin
                    .setFromMatrixPosition(
                        b
                        .matrixWorld
                    )
                    , this
                    .ray
                    .direction
                    .set(a
                        .x
                        , a
                        .y
                        , .5
                        )
                    .unproject(
                        b)
                    .sub(
                        this
                        .ray
                        .origin
                    )
                    .normalize()
                ) : b &&
                b
                .isOrthographicCamera ?
                (this.ray
                    .origin
                    .set(a
                        .x
                        , a
                        .y
                        , (b.near +
                            b
                            .far
                        ) /
                        (b.near -
                            b
                            .far
                        )
                    )
                    .unproject(
                        b)
                    , this
                    .ray
                    .direction
                    .set(0
                        , 0,
                        -
                        1)
                    .transformDirection(
                        b
                        .matrixWorld
                    )) :
                console
                .error(
                    "THREE.Raycaster: Unsupported camera type."
                )
        }
        , intersectObject: function (
            a, b) {
            var c = [];
            wb(a, this, c
                , b);
            c.sort(Ub);
            return c
        }
        , intersectObjects: function (
            a, b) {
            var c = [];
            if (!1 === Array
                .isArray(a))
                return console
                    .warn(
                        "THREE.Raycaster.intersectObjects: objects is not an Array."
                    )
                    , c;
            for (var d = 0
                    , e = a
                    .length; d <
                e; d++) wb(
                a[d]
                , this,
                c
                , b);
            c.sort(Ub);
            return c
        }
    };
    Wa.prototype = Object.create(la
        .prototype);
    Wa.prototype.constructor = Wa;
    db.prototype = Object.create(fa
        .prototype);
    db.prototype.constructor = db;
    eb.prototype = Object.create(la
        .prototype);
    eb.prototype.constructor = eb;
    fb.prototype = Object.create(fa
        .prototype);
    fb.prototype.constructor = fb;
    gb.prototype = Object.create(la
        .prototype);
    gb.prototype.constructor = gb;
    hb.prototype = Object.create(fa
        .prototype);
    hb.prototype.constructor = hb;
    ib.prototype = Object.create(la
        .prototype);
    ib.prototype.constructor = ib;
    jb.prototype = Object.create(fa
        .prototype);
    jb.prototype.constructor = jb;
    THREE.VRControls = function (a
        , b) {
        function c(a) {
            f = a;
            0 < a.length ? e =
                a[0] : b && b(
                    "VR input not available."
                )
        }
        var d = this
            , e, f, g =
            new THREE.Matrix4
            , h = null;
        "VRFrameData" in window
            &&
            (h =
                new VRFrameData
            );
        navigator
            .getVRDisplays &&
            navigator
            .getVRDisplays()
            .then(c)["catch"](
                function () {
                    console
                        .warn(
                            "THREE.VRControls: Unable to get VR Displays"
                        )
                });
        this.scale = 1;
        this.standing = !1;
        this.userHeight = 1.6;
        this.getVRDisplay =
            function () {
                return e
            };
        this.setVRDisplay =
            function (a) {
                e = a
            };
        this.getVRDisplays =
            function () {
                console.warn(
                    "THREE.VRControls: getVRDisplays() is being deprecated."
                );
                return f
            };
        this.getStandingMatrix =
            function () {
                return g
            };
        this.update =
            function () {
                if (e) {
                    var b;
                    e.getFrameData ?
                        (e.getFrameData(
                                h
                            )
                            , b =
                            h
                            .pose
                        ) :
                        e
                        .getPose &&
                        (b = e
                            .getPose()
                        );
                    null !== b
                        .orientation &&
                        a
                        .quaternion
                        .fromArray(
                            b
                            .orientation
                        );
                    null !== b
                        .position ?
                        a
                        .position
                        .fromArray(
                            b
                            .position
                        ) :
                        a
                        .position
                        .set(0
                            , 0,
                            0
                        );
                    this.standing &&
                        (e.stageParameters ?
                            (a.updateMatrix()
                                , g
                                .fromArray(
                                    e
                                    .stageParameters
                                    .sittingToStandingTransform
                                )
                                , a
                                .applyMatrix(
                                    g
                                )
                            ) :
                            a
                            .position
                            .setY(
                                a
                                .position
                                .y +
                                this
                                .userHeight
                            )
                        );
                    a.position
                        .multiplyScalar(
                            d
                            .scale
                        )
                }
            };
        this.resetPose =
            function () {
                e && e
                    .resetPose()
            };
        this.resetSensor =
            function () {
                console.warn(
                    "THREE.VRControls: .resetSensor() is now .resetPose()."
                );
                this.resetPose()
            };
        this.zeroSensor =
            function () {
                console.warn(
                    "THREE.VRControls: .zeroSensor() is now .resetPose()."
                );
                this.resetPose()
            };
        this.dispose =
            function () {
                e = null
            }
    };
    THREE.VREffect = function (a
        , b) {
        var c, d, e, f, g, h, l
            , n;

        function m(a) {
            x = a;
            0 < a.length ? q =
                a[0] : b && b(
                    "HMD not available"
                )
        }

        function r() {
            var b = y
                .isPresenting;
            y.isPresenting =
                void 0 !== q &&
                q.isPresenting;
            if (y
                .isPresenting) {
                var c = q
                    .getEyeParameters(
                        "left")
                    , d = c
                    .renderWidth
                    , c = c
                    .renderHeight;
                b || (A = a
                    .getPixelRatio()
                    , I = a
                    .getSize()
                    , a
                    .setPixelRatio(
                        1)
                    , a
                    .setSize(
                        2 *
                        d
                        , c,
                        !
                        1))
            } else b &&
                (a.setPixelRatio(
                        A), a
                    .setSize(I
                        .width
                        , I
                        .height
                        , t))
        }

        function p(a, b, c, d) {
            var e, f = Math.PI /
                180;
            e = Math.tan(a
                .upDegrees *
                f);
            var g = Math.tan(a
                    .downDegrees *
                    f)
                , h = Math.tan(a
                    .leftDegrees *
                    f);
            a = Math.tan(a
                .rightDegrees *
                f);
            c = void 0 === c ?
                .01 : c;
            d = void 0 === d ?
                1E4 : d;
            var f = void 0 ===
                b || b ? -1 : 1
                , l = new THREE
                .Matrix4
                , k = l
                .elements
                , n = 2 / (h +
                    a)
                , m = 2 / (e +
                    g);
            b = [n, m];
            e = [(h - a) * n *
                .5, (e -
                    g) * m *
                .5];
            k[0] = b[0];
            k[1] = 0;
            k[2] = e[0] * f;
            k[3] = 0;
            k[4] = 0;
            k[5] = b[1];
            k[6] = -e[1] * f;
            k[7] = 0;
            k[8] = 0;
            k[9] = 0;
            k[10] = d / (c -
                d) * -f;
            k[11] = d * c / (c -
                d);
            k[12] = 0;
            k[13] = 0;
            k[14] = f;
            k[15] =
                0;
            l.transpose();
            return l
        }
        var q, x, w = new THREE
            .Vector3
            , z = new THREE
            .Vector3
            , v = null;
        "VRFrameData" in window
            &&
            (v = new window
                .VRFrameData);
        navigator
            .getVRDisplays &&
            navigator
            .getVRDisplays()
            .then(m)["catch"](
                function () {
                    console
                        .warn(
                            "THREE.VREffect: Unable to get VR Displays"
                        )
                });
        this.isPresenting = !1;
        this.scale = 1;
        var y = this
            , I = a.getSize()
            , t = !1
            , A = a
            .getPixelRatio();
        this.getVRDisplay =
            function () {
                return q
            };
        this.setVRDisplay =
            function (a) {
                q = a
            };
        this.getVRDisplays =
            function () {
                console.warn(
                    "THREE.VREffect: getVRDisplays() is being deprecated."
                );
                return x
            };
        this.setSize =
            function (
                b, c, d) {
                I = {
                    width: b
                    , height: c
                };
                t = d;
                y.isPresenting ?
                    (b = q
                        .getEyeParameters(
                            "left"
                        ), a
                        .setPixelRatio(
                            1)
                        , a
                        .setSize(
                            2 *
                            b
                            .renderWidth
                            , b
                            .renderHeight
                            , !1
                            )
                    ) : (a
                        .setPixelRatio(
                            A)
                        , a
                        .setSize(
                            b
                            , c,
                            d
                        ))
            };
        var G = a.domElement
            , C = [0, 0, .5, 1]
            , E = [.5, 0, .5
            , 1];
        window.addEventListener(
            "vrdisplaypresentchange"
            , r, !1);
        this.setFullScreen =
            function (a) {
                return new Promise(
                    function (
                        b, c
                    ) {
                        void 0
                            ===
                            q ?
                            c(Error(
                                "No VR hardware found."
                                )) :
                            y
                            .isPresenting ===
                            a ?
                            b() :
                            a ?
                            b(q.requestPresent(
                                [{
                                    source: G
                }])) : b(q.exitPresent())
                    })
            };
        this.requestPresent =
            function () {
                return this
                    .setFullScreen(
                        !0)
            };
        this.exitPresent =
            function () {
                return this
                    .setFullScreen(
                        !1)
            };
        this.requestAnimationFrame =
            function (a) {
                return void 0 !==
                    q ? q
                    .requestAnimationFrame(
                        a) :
                    window
                    .requestAnimationFrame(
                        a)
            };
        this.cancelAnimationFrame =
            function (a) {
                void 0 !== q ? q
                    .cancelAnimationFrame(
                        a) :
                    window
                    .cancelAnimationFrame(
                        a)
            };
        this.submitFrame =
            function () {
                void 0 !== q &&
                    y
                    .isPresenting &&
                    q
                    .submitFrame()
            };
        this.autoSubmitFrame = !
            0;
        var J = new THREE
            .PerspectiveCamera;
        J.layers.enable(1);
        var F =
            new THREE
            .PerspectiveCamera;
        F.layers.enable(2);
        this.render = function (
            b, m, r, t) {
            if (q && y
                .isPresenting
            ) {
                var x = b
                    .autoUpdate;
                x && (b.updateMatrixWorld()
                    , b
                    .autoUpdate = !
                    1);
                var B = q
                    .getEyeParameters(
                        "left"
                    )
                    , D = q
                    .getEyeParameters(
                        "right"
                    );
                w.fromArray(
                    B
                    .offset
                );
                z.fromArray(
                    D
                    .offset
                );
                Array
                    .isArray(
                        b
                    ) &&
                    (console
                        .warn(
                            "THREE.VREffect.render() no longer supports arrays. Use object.layers instead."
                        )
                        , b =
                        b[0]
                    );
                var H = a
                    .getSize()
                    , I = q
                    .getLayers()
                    , G;
                I.length ? (
                        G =
                        I[
                            0
                            ]
                        , I =
                        null !==
                        G
                        .leftBounds &&
                        4 ===
                        G
                        .leftBounds
                        .length ?
                        G
                        .leftBounds :
                        C
                        , G =
                        null !==
                        G
                        .rightBounds &&
                        4 ===
                        G
                        .rightBounds
                        .length ?
                        G
                        .rightBounds :
                        E) :
                    (I = C
                        , G =
                        E);
                g = Math
                    .round(H
                        .width *
                        I[0]
                    );
                h = Math
                    .round(H
                        .height *
                        I[1]
                    );
                l = Math
                    .round(H
                        .width *
                        I[2]
                    );
                n = Math
                    .round(H
                        .height *
                        I[3]
                    );
                c = Math
                    .round(H
                        .width *
                        G[0]
                    );
                d = Math
                    .round(H
                        .height *
                        G[1]
                    );
                e = Math
                    .round(H
                        .width *
                        G[2]
                    );
                f = Math
                    .round(H
                        .height *
                        G[3]
                    );
                r ? (a.setRenderTarget(
                            r
                        )
                        , r
                        .scissorTest = !
                        0) :
                    (a.setRenderTarget(
                            null
                        )
                        , a
                        .setScissorTest(
                            !
                            0
                        )
                    );
                (a.autoClear ||
                    t) && a
                    .clear();
                null === m
                    .parent &&
                    m
                    .updateMatrixWorld();
                m.matrixWorld
                    .decompose(
                        J
                        .position
                        , J
                        .quaternion
                        , J
                        .scale
                    );
                m.matrixWorld
                    .decompose(
                        F
                        .position
                        , F
                        .quaternion
                        , F
                        .scale
                    );
                I = this
                    .scale;
                J.translateOnAxis(
                    w, I
                );
                F.translateOnAxis(
                    z, I
                );
                q.getFrameData ?
                    (q.depthNear =
                        m
                        .near
                        , q
                        .depthFar =
                        m
                        .far
                        , q
                        .getFrameData(
                            v
                        )
                        , J
                        .projectionMatrix
                        .elements =
                        v
                        .leftProjectionMatrix
                        , F
                        .projectionMatrix
                        .elements =
                        v
                        .rightProjectionMatrix
                    ) :
                    (J.projectionMatrix =
                        p(B.fieldOfView
                            , !
                            0
                            , m
                            .near
                            , m
                            .far
                        )
                        , F
                        .projectionMatrix =
                        p(D.fieldOfView
                            , !
                            0
                            , m
                            .near
                            , m
                            .far
                        )
                    );
                r ? (r.viewport
                        .set(
                            g
                            , h
                            , l
                            , n
                        )
                        , r
                        .scissor
                        .set(
                            g
                            , h
                            , l
                            , n
                        )
                    ) :
                    (a.setViewport(
                            g
                            , h
                            , l
                            , n
                        )
                        , a
                        .setScissor(
                            g
                            , h
                            , l
                            , n
                        )
                    );
                a.render(b
                    , J
                    , r,
                    t
                );
                r ? (r.viewport
                        .set(
                            c
                            , d
                            , e
                            , f
                        )
                        , r
                        .scissor
                        .set(
                            c
                            , d
                            , e
                            , f
                        )
                    ) :
                    (a.setViewport(
                            c
                            , d
                            , e
                            , f
                        )
                        , a
                        .setScissor(
                            c
                            , d
                            , e
                            , f
                        )
                    );
                a.render(b
                    , F
                    , r,
                    t
                );
                r ? (r.viewport
                        .set(
                            0
                            , 0
                            , H
                            .width
                            , H
                            .height
                        )
                        , r
                        .scissor
                        .set(
                            0
                            , 0
                            , H
                            .width
                            , H
                            .height
                        )
                        , r
                        .scissorTest = !
                        1, a
                        .setRenderTarget(
                            null
                        )
                    ) :
                    (a.setViewport(
                            0
                            , 0
                            , H
                            .width
                            , H
                            .height
                        )
                        , a
                        .setScissorTest(
                            !
                            1
                        )
                    );
                x && (b.autoUpdate = !
                    0);
                y.autoSubmitFrame &&
                    y
                    .submitFrame()
            } else a.render(
                b, m, r
                , t)
        };
        this.dispose =
            function () {
                window
                    .removeEventListener(
                        "vrdisplaypresentchange"
                        , r, !1)
            }
    };
    l.WebGLRenderer = function (a) {
        function b() {
            N.init();
            N.scissor(ga.copy(
                    ua)
                .multiplyScalar(
                    za));
            N.viewport(ia.copy(
                    ra)
                .multiplyScalar(
                    za));
            N.buffers.color
                .setClear(ma.r
                    , ma.g, ma
                    .b
                    , ja, E)
        }

        function c() {
            ba = W = null;
            aa = "";
            Y = -1;
            N.reset()
        }

        function d(a) {
            a.preventDefault();
            c();
            b();
            sa.clear()
        }


        function e(a) {
            a = a.target;
            a.removeEventListener(
                "dispose", e
            );
            f(a);
            sa["delete"](a)
        }

        function f(a) {
            var b = sa.get(a)
                .program;
            a.program = void 0;
            void 0 !== b && xa
                .releaseProgram(
                    b)
        }

        function g(a, b) {
            return Math.abs(b[
                    0]) - Math
                .abs(a[0])
        }

        function h(a, b) {
            return a.object
                .renderOrder !==
                b.object
                .renderOrder ?
                a.object
                .renderOrder - b
                .object
                .renderOrder : a
                .material
                .program && b
                .material
                .program && a
                .material
                .program !== b
                .material
                .program ? a
                .material
                .program.id - b
                .material
                .program.id : a
                .material.id !==
                b.material.id ?
                a.material.id -
                b.material.id :
                a.z !== b.z ? a
                .z - b.z : a
                .id - b.id
        }

        function l(a, b) {
            return a.object
                .renderOrder !==
                b.object
                .renderOrder ? a
                .object
                .renderOrder - b
                .object
                .renderOrder : a
                .z !== b.z ? b
                .z - a.z : a
                .id - b.id
        }

        function n(a, b, c, d
            , e) {
            var f;
            c.transparent ? (d =
                Q, f = ++V
            ) : (d = K
                , f = ++M);
            f = d[f];
            void 0 !== f ? (f
                .id = a.id
                , f.object =
                a, f
                .geometry =
                b, f
                .material =
                c, f.z = oa
                .z, f
                .group = e
            ) : (f = {
                id: a
                    .id
                , object: a
                , geometry: b
                , material: c
                , z: oa
                    .z
                , group: e
            }, d.push(
                f))
        }

        function B(a) {
            if (!Ea
                .intersectsSphere(
                    a)) return !
                1;
            var b = va
                .numPlanes;
            if (0 === b)
                return !0;
            var c = H
                .clippingPlanes
                , d = a.center;
            a = -a.radius;
            var e = 0;
            do
                if (c[e]
                    .distanceToPoint(
                        d) < a)
                    return !
                        1; while (
                ++
                e !== b);
            return !0
        }

        function r(a, b) {
            if (!1 !== a
                .visible) {
                if (0 !== (a
                        .layers
                        .mask &
                        b.layers
                        .mask))
                    if (a
                        .isLight
                    ) F
                        .push(
                            a);
                    else if (a
                    .isSprite) {
                    var c;
                    (c = !1 ===
                        a
                        .frustumCulled
                    ) || (qa
                        .center
                        .set(0
                            , 0,
                            0
                        )
                        , qa
                        .radius =
                        .7071067811865476
                        , qa
                        .applyMatrix4(
                            a
                            .matrixWorld
                        )
                        , c = !
                        0 === B(
                            qa)
                    );
                    c && O.push(
                        a)
                } else if (a
                    .isLensFlare
                ) D.push(a);
                else if (a
                    .isImmediateRenderObject
                ) !0 === H
                    .sortObjects &&
                    (oa.setFromMatrixPosition(
                            a
                            .matrixWorld
                        )
                        , oa
                        .applyMatrix4(
                            Aa)
                    ), n(a
                        , null,
                        a
                        .material
                        , oa.z
                        , null);
                else if (a
                    .isMesh || a
                    .isLine || a
                    .isPoints)
                    if (a
                        .isSkinnedMesh &&
                        a
                        .skeleton
                        .update()
                        , (c = !
                            1 ===
                            a
                            .frustumCulled
                        ) ||
                        (c = a
                            .geometry
                            , null ===
                            c
                            .boundingSphere &&
                            c
                            .computeBoundingSphere()
                            , qa
                            .copy(
                                c
                                .boundingSphere
                            )
                            .applyMatrix4(
                                a
                                .matrixWorld
                            )
                            , c = !
                            0 ===
                            B(
                                qa
                                )
                        ), c
                    ) {
                        var d =
                            a
                            .material;
                        if (!
                            0 ===
                            d
                            .visible
                        )
                            if (!
                                0 ===
                                H
                                .sortObjects &&
                                (oa.setFromMatrixPosition(
                                        a
                                        .matrixWorld
                                    )
                                    , oa
                                    .applyMatrix4(
                                        Aa
                                    )
                                )
                                , c =
                                Sa
                                .update(
                                    a
                                )
                                , d
                                .isMultiMaterial
                            )
                                for (
                                    var e =
                                        c
                                        .groups
                                        , f =
                                        d
                                        .materials
                                        , d =
                                        0
                                        , g =
                                        e
                                        .length; d <
                                    g; d++
                                ) {
                                    var h =
                                        e[
                                            d
                                            ]
                                        , l =
                                        f[h
                                            .materialIndex
                                            ];
                                    !
                                    0 ===
                                        l
                                        .visible &&
                                        n(a, c
                                            , l
                                            , oa
                                            .z
                                            , h
                                        )
                                } else
                                    n(a, c
                                        , d
                                        , oa
                                        .z
                                        , null
                                    )
                    } c = a
                    .children;
                d = 0;
                for (g = c
                    .length; d <
                    g; d++) r(c[
                        d]
                    , b)
            }
        }

        function p(a, b, c, d) {
            for (var e = 0, f =
                    a
                    .length; e <
                f; e++) {
                var g = a[e]
                    , h = g
                    .object
                    , l = g
                    .geometry
                    , k =
                    void 0 ===
                    d ? g
                    .material :
                    d
                    , g = g
                    .group;
                h.modelViewMatrix
                    .multiplyMatrices(
                        c
                        .matrixWorldInverse
                        , h
                        .matrixWorld
                    );
                h.normalMatrix
                    .getNormalMatrix(
                        h
                        .modelViewMatrix
                    );
                h.onBeforeRender(
                    H, b, c
                    , l, k,
                    g);
                if (h
                    .isImmediateRenderObject
                ) {
                    q(k);
                    var m = x(c
                        , b
                        .fog
                        , k,
                        h
                    );
                    aa = "";
                    h.render(
                        function (
                            a
                        ) {
                            H.renderBufferImmediate(
                                a
                                , m
                                , k
                            )
                        })
                } else H
                    .renderBufferDirect(
                        c, b
                        .fog, l
                        , k, h,
                        g
                    );
                h.onAfterRender(
                    H, b, c
                    , l, k,
                    g)
            }
        }

        function q(a) {
            2 === a.side ? N
                .disable(u
                    .CULL_FACE
                ) : N
                .enable(u
                    .CULL_FACE);
            N.setFlipSided(1 ===
                a.side);
            !0 === a
                .transparent ? N
                .setBlending(a
                    .blending, a
                    .blendEquation
                    , a
                    .blendSrc
                    , a
                    .blendDst
                    , a
                    .blendEquationAlpha
                    , a
                    .blendSrcAlpha
                    , a
                    .blendDstAlpha
                    , a
                    .premultipliedAlpha
                ) : N
                .setBlending(0);
            N.setDepthFunc(a
                .depthFunc);
            N.setDepthTest(a
                .depthTest);
            N.setDepthWrite(a
                .depthWrite);
            N.setColorWrite(a
                .colorWrite);
            N.setPolygonOffset(a
                .polygonOffset
                , a
                .polygonOffsetFactor
                , a
                .polygonOffsetUnits
            )
        }

        function x(a, b, c, d) {
            la = 0;
            var g = sa.get(c);
            wa && (Ca || a !==
                    ba) && va
                .setState(c
                    .clippingPlanes
                    , c
                    .clipIntersection
                    , c
                    .clipShadows
                    , a, g,
                    a ===
                    ba && c
                    .id === Y);
            !1 === c
                .needsUpdate &&
                (void 0 === g
                    .program ? c
                    .needsUpdate = !
                    0 : c.fog &&
                    g.fog !==
                    b ? c
                    .needsUpdate = !
                    0 : c
                    .lights && g
                    .lightsHash !==
                    R.hash ? c
                    .needsUpdate = !
                    0 :
                    void 0 === g
                    .numClippingPlanes ||
                    g
                    .numClippingPlanes ===
                    va
                    .numPlanes &&
                    g
                    .numIntersection ===
                    va
                    .numIntersection ||
                    (c.needsUpdate = !
                        0));
            if (c.needsUpdate) {
                a: {
                    var h = sa
                        .get(c)
                        , l = xa
                        .getParameters(
                            c
                            , R
                            , b
                            , va
                            .numPlanes
                            , va
                            .numIntersection
                            , d
                            )
                        , k = xa
                        .getProgramCode(
                            c, l
                        )
                        , m = h
                        .program
                        , n = !
                        0;
                    if (void 0 ===
                        m) c
                        .addEventListener(
                            "dispose"
                            , e
                            );
                    else if (m
                        .code !==
                        k) f(c);
                    else if (
                        void 0 !==
                        l
                        .shaderID
                    )
                        break a;
                    else n = !
                        1;n && (
                        l
                        .shaderID ?
                        (m = Oa[l
                                .shaderID
                            ]
                            , h
                            .__webglShader = {
                                name: c
                                    .type
                                , uniforms: ta
                                    .clone(
                                        m
                                        .uniforms
                                    )
                                , vertexShader: m
                                    .vertexShader
                                , fragmentShader: m
                                    .fragmentShader
                            }) :
                        h
                        .__webglShader = {
                            name: c
                                .type
                            , uniforms: c
                                .uniforms
                            , vertexShader: c
                                .vertexShader
                            , fragmentShader: c
                                .fragmentShader
                        }, c
                        .__webglShader =
                        h
                        .__webglShader
                        , m = xa
                        .acquireProgram(
                            c
                            , l,
                            k
                        ), h
                        .program =
                        m, c
                        .program =
                        m);l = m
                    .getAttributes();
                    if (c
                        .morphTargets
                    )
                        for (k =
                            c
                            .numSupportedMorphTargets =
                            0; k <
                            H
                            .maxMorphTargets; k++
                        )
                            0 <=
                            l["morphTarget" +
                                k
                            ] &&
                            c
                            .numSupportedMorphTargets++;
                    if (c
                        .morphNormals
                    )
                        for (k =
                            c
                            .numSupportedMorphNormals =
                            0; k <
                            H
                            .maxMorphNormals; k++
                        )
                            0 <=
                            l["morphNormal" +
                                k
                            ] &&
                            c
                            .numSupportedMorphNormals++;
                    l = h
                    .__webglShader
                    .uniforms;
                    if (!c
                        .isShaderMaterial &&
                        !c
                        .isRawShaderMaterial ||
                        !0 === c
                        .clipping
                    ) h
                        .numClippingPlanes =
                        va
                        .numPlanes
                    , h
                    .numIntersection =
                    va
                    .numIntersection
                    , l
                    .clippingPlanes =
                    va.uniform;h
                    .fog = b;h
                    .lightsHash =
                    R.hash;c
                    .lights && (
                        l
                        .ambientLightColor
                        .value =
                        R
                        .ambient
                        , l
                        .directionalLights
                        .value =
                        R
                        .directional
                        , l
                        .spotLights
                        .value =
                        R.spot
                        , l
                        .rectAreaLights
                        .value =
                        R
                        .rectArea
                        , l
                        .pointLights
                        .value =
                        R.point
                        , l
                        .hemisphereLights
                        .value =
                        R.hemi
                        , l
                        .directionalShadowMap
                        .value =
                        R
                        .directionalShadowMap
                        , l
                        .directionalShadowMatrix
                        .value =
                        R
                        .directionalShadowMatrix
                        , l
                        .spotShadowMap
                        .value =
                        R
                        .spotShadowMap
                        , l
                        .spotShadowMatrix
                        .value =
                        R
                        .spotShadowMatrix
                        , l
                        .pointShadowMap
                        .value =
                        R
                        .pointShadowMap
                        , l
                        .pointShadowMatrix
                        .value =
                        R
                        .pointShadowMatrix
                    );k = h
                    .program
                    .getUniforms();l =
                    Ja
                    .seqWithValue(
                        k.seq, l
                    );h
                    .uniformsList =
                    l
                }
                c
                .needsUpdate = !
                1
            }
            var p = !1
                , n = m = !1
                , h = g.program
                , l = h
                .getUniforms()
                , k = g
                .__webglShader
                .uniforms;
            h.id !== W && (u
                .useProgram(
                    h
                    .program
                ), W = h
                .id, n = m =
                p = !0);
            c.id !== Y && (Y = c
                .id, m = !0);
            if (p || a !== ba) {
                l.set(u, a
                    , "projectionMatrix"
                );
                Ga.logarithmicDepthBuffer &&
                    l.setValue(
                        u
                        , "logDepthBufFC"
                        , 2 / (
                            Math
                            .log(
                                a
                                .far +
                                1
                            ) /
                            Math
                            .LN2
                        ));
                a !== ba && (
                    ba = a
                    , n =
                    m = !0);
                if (c
                    .isShaderMaterial ||
                    c
                    .isMeshPhongMaterial ||
                    c
                    .isMeshStandardMaterial ||
                    c.envMap)
                    p = l.map
                    .cameraPosition
                    , void 0 !==
                    p && p
                    .setValue(u
                        , oa
                        .setFromMatrixPosition(
                            a
                            .matrixWorld
                        ));
                (c.isMeshPhongMaterial ||
                    c
                    .isMeshLambertMaterial ||
                    c
                    .isMeshBasicMaterial ||
                    c
                    .isMeshStandardMaterial ||
                    c
                    .isShaderMaterial ||
                    c.skinning
                ) && l
                    .setValue(u
                        , "viewMatrix"
                        , a
                        .matrixWorldInverse
                    );
                l.set(u, H
                    , "toneMappingExposure"
                );
                l.set(u, H
                    , "toneMappingWhitePoint"
                )
            }
            c.skinning &&
                (l.setOptional(
                        u, d
                        , "bindMatrix"
                    ), l
                    .setOptional(
                        u, d
                        , "bindMatrixInverse"
                    ), a = d
                    .skeleton
                ) && (Ga
                    .floatVertexTextures &&
                    a
                    .useVertexTexture ?
                    (l.set(u, a
                            , "boneTexture"
                        ), l
                        .set(u
                            , a
                            , "boneTextureWidth"
                        ), l
                        .set(u
                            , a
                            , "boneTextureHeight"
                        )) :
                    l
                    .setOptional(
                        u, a
                        , "boneMatrices"
                    ));
            if (m) {
                c.lights && (a =
                    n, k
                    .ambientLightColor
                    .needsUpdate =
                    a, k
                    .directionalLights
                    .needsUpdate =
                    a, k
                    .pointLights
                    .needsUpdate =
                    a, k
                    .spotLights
                    .needsUpdate =
                    a, k
                    .rectAreaLights
                    .needsUpdate =
                    a, k
                    .hemisphereLights
                    .needsUpdate =
                    a);
                b && c.fog && (k
                    .fogColor
                    .value =
                    b.color
                    , b
                    .isFog ?
                    (k.fogNear
                        .value =
                        b
                        .near
                        , k
                        .fogFar
                        .value =
                        b
                        .far
                    ) :
                    b
                    .isFogExp2 &&
                    (k.fogDensity
                        .value =
                        b
                        .density
                    ));
                if (c
                    .isMeshBasicMaterial ||
                    c
                    .isMeshLambertMaterial ||
                    c
                    .isMeshPhongMaterial ||
                    c
                    .isMeshStandardMaterial ||
                    c
                    .isMeshNormalMaterial ||
                    c
                    .isMeshDepthMaterial
                ) {
                    k.opacity
                        .value =
                        c
                        .opacity;
                    k.diffuse
                        .value =
                        c.color;
                    c.emissive &&
                        k
                        .emissive
                        .value
                        .copy(c
                            .emissive
                        )
                        .multiplyScalar(
                            c
                            .emissiveIntensity
                        );
                    k.map
                        .value =
                        c.map;
                    k.specularMap
                        .value =
                        c
                        .specularMap;
                    k.alphaMap
                        .value =
                        c
                        .alphaMap;
                    c.lightMap &&
                        (k.lightMap
                            .value =
                            c
                            .lightMap
                            , k
                            .lightMapIntensity
                            .value =
                            c
                            .lightMapIntensity
                        );
                    c.aoMap && (
                        k
                        .aoMap
                        .value =
                        c
                        .aoMap
                        , k
                        .aoMapIntensity
                        .value =
                        c
                        .aoMapIntensity
                    );
                    var q;
                    c.map ? q =
                        c.map :
                        c
                        .specularMap ?
                        q = c
                        .specularMap :
                        c
                        .displacementMap ?
                        q = c
                        .displacementMap :
                        c
                        .normalMap ?
                        q = c
                        .normalMap :
                        c
                        .bumpMap ?
                        q = c
                        .bumpMap :
                        c
                        .roughnessMap ?
                        q = c
                        .roughnessMap :
                        c
                        .metalnessMap ?
                        q = c
                        .metalnessMap :
                        c
                        .alphaMap ?
                        q = c
                        .alphaMap :
                        c
                        .emissiveMap &&
                        (q = c
                            .emissiveMap
                        );
                    void 0 !==
                        q && (q
                            .isWebGLRenderTarget &&
                            (q = q
                                .texture
                            )
                            , b =
                            q
                            .offset
                            , q =
                            q
                            .repeat
                            , k
                            .offsetRepeat
                            .value
                            .set(
                                b
                                .x
                                , b
                                .y
                                , q
                                .x
                                , q
                                .y
                            )
                        );
                    k.envMap
                        .value =
                        c
                        .envMap;
                    k.flipEnvMap
                        .value =
                        c
                        .envMap &&
                        c.envMap
                        .isCubeTexture ?
                        -1 : 1;
                    k.reflectivity
                        .value =
                        c
                        .reflectivity;
                    k.refractionRatio
                        .value =
                        c
                        .refractionRatio
                }
                c.isLineBasicMaterial ?
                    (k.diffuse
                        .value =
                        c.color
                        , k
                        .opacity
                        .value =
                        c
                        .opacity
                    ) : c
                    .isLineDashedMaterial ?
                    (k.diffuse
                        .value =
                        c.color
                        , k
                        .opacity
                        .value =
                        c
                        .opacity
                        , k
                        .dashSize
                        .value =
                        c
                        .dashSize
                        , k
                        .totalSize
                        .value =
                        c
                        .dashSize +
                        c
                        .gapSize
                        , k
                        .scale
                        .value =
                        c.scale
                    ) : c
                    .isPointsMaterial ?
                    (k.diffuse
                        .value =
                        c.color
                        , k
                        .opacity
                        .value =
                        c
                        .opacity
                        , k.size
                        .value =
                        c.size *
                        za, k
                        .scale
                        .value =
                        .5 * pa
                        , k.map
                        .value =
                        c.map
                        , null !==
                        c.map &&
                        (q =
                            c
                            .map
                            .offset
                            , c =
                            c
                            .map
                            .repeat
                            , k
                            .offsetRepeat
                            .value
                            .set(
                                q
                                .x
                                , q
                                .y
                                , c
                                .x
                                , c
                                .y
                            )
                        )) :
                    c
                    .isMeshLambertMaterial ?
                    c
                    .emissiveMap &&
                    (k.emissiveMap
                        .value =
                        c
                        .emissiveMap
                    ) : c
                    .isMeshToonMaterial ?
                    (w(k, c), c
                        .gradientMap &&
                        (k.gradientMap
                            .value =
                            c
                            .gradientMap
                        )) :
                    c
                    .isMeshPhongMaterial ?
                    w(k, c) : c
                    .isMeshPhysicalMaterial ?
                    (k.clearCoat
                        .value =
                        c
                        .clearCoat
                        , k
                        .clearCoatRoughness
                        .value =
                        c
                        .clearCoatRoughness
                        , z(k,
                            c)
                    ) : c
                    .isMeshStandardMaterial ?
                    z(k, c) : c
                    .isMeshDepthMaterial ?
                    c
                    .displacementMap &&
                    (k.displacementMap
                        .value =
                        c
                        .displacementMap
                        , k
                        .displacementScale
                        .value =
                        c
                        .displacementScale
                        , k
                        .displacementBias
                        .value =
                        c
                        .displacementBias
                    ) : c
                    .isMeshNormalMaterial &&
                    (c.bumpMap &&
                        (k.bumpMap
                            .value =
                            c
                            .bumpMap
                            , k
                            .bumpScale
                            .value =
                            c
                            .bumpScale
                        ), c
                        .normalMap &&
                        (k.normalMap
                            .value =
                            c
                            .normalMap
                            , k
                            .normalScale
                            .value
                            .copy(
                                c
                                .normalScale
                            )
                        ), c
                        .displacementMap &&
                        (k.displacementMap
                            .value =
                            c
                            .displacementMap
                            , k
                            .displacementScale
                            .value =
                            c
                            .displacementScale
                            , k
                            .displacementBias
                            .value =
                            c
                            .displacementBias
                        ));
                void 0 !== k
                    .ltcMat && (
                        k.ltcMat
                        .value =
                        THREE
                        .UniformsLib
                        .LTC_MAT_TEXTURE
                    );
                void 0 !== k
                    .ltcMag && (
                        k.ltcMag
                        .value =
                        THREE
                        .UniformsLib
                        .LTC_MAG_TEXTURE
                    );
                Ja.upload(u, g
                    .uniformsList
                    , k, H)
            }
            l.set(u, d
                , "modelViewMatrix"
            );
            l.set(u, d
                , "normalMatrix"
            );
            l.setValue(u
                , "modelMatrix"
                , d
                .matrixWorld
            );
            return h
        }

        function w(a, b) {
            a.specular.value = b
                .specular;
            a.shininess.value =
                Math.max(b
                    .shininess
                    , 1E-4);
            b.emissiveMap && (a
                .emissiveMap
                .value = b
                .emissiveMap
            );
            b.bumpMap && (a
                .bumpMap
                .value = b
                .bumpMap, a
                .bumpScale
                .value = b
                .bumpScale);
            b.normalMap && (a
                .normalMap
                .value = b
                .normalMap
                , a
                .normalScale
                .value.copy(
                    b
                    .normalScale
                ));
            b.displacementMap &&
                (a.displacementMap
                    .value =
                    b
                    .displacementMap
                    , a
                    .displacementScale
                    .value = b
                    .displacementScale
                    , a
                    .displacementBias
                    .value = b
                    .displacementBias
                )
        }

        function z(a, b) {
            a.roughness.value =
                b.roughness;
            a.metalness.value =
                b.metalness;
            b.roughnessMap && (a
                .roughnessMap
                .value = b
                .roughnessMap
            );
            b.metalnessMap && (a
                .metalnessMap
                .value = b
                .metalnessMap
            );
            b.emissiveMap && (a
                .emissiveMap
                .value = b
                .emissiveMap
            );
            b.bumpMap && (a
                .bumpMap
                .value = b
                .bumpMap, a
                .bumpScale
                .value = b
                .bumpScale);
            b.normalMap && (a
                .normalMap
                .value = b
                .normalMap
                , a
                .normalScale
                .value.copy(
                    b
                    .normalScale
                ));
            b.displacementMap &&
                (a.displacementMap
                    .value = b
                    .displacementMap
                    , a
                    .displacementScale
                    .value = b
                    .displacementScale
                    , a
                    .displacementBias
                    .value = b
                    .displacementBias
                );
            b.envMap && (a
                .envMapIntensity
                .value = b
                .envMapIntensity
            )
        }

        function v(a) {
            var b;
            if (1E3 === a)
                return u.REPEAT;
            if (1001 === a)
                return u
                    .CLAMP_TO_EDGE;
            if (1002 === a)
                return u
                    .MIRRORED_REPEAT;
            if (1003 === a)
                return u
                    .NEAREST;
            if (1004 === a)
                return u
                    .NEAREST_MIPMAP_NEAREST;
            if (1005 === a)
                return u
                    .NEAREST_MIPMAP_LINEAR;
            if (1006 === a)
                return u.LINEAR;
            if (1007 === a)
                return u
                    .LINEAR_MIPMAP_NEAREST;
            if (1008 ===
                a) return u
                .LINEAR_MIPMAP_LINEAR;
            if (1009 === a)
                return u
                    .UNSIGNED_BYTE;
            if (1017 === a)
                return u
                    .UNSIGNED_SHORT_4_4_4_4;
            if (1018 === a)
                return u
                    .UNSIGNED_SHORT_5_5_5_1;
            if (1019 === a)
                return u
                    .UNSIGNED_SHORT_5_6_5;
            if (1010 === a)
                return u.BYTE;
            if (1011 === a)
                return u.SHORT;
            if (1012 === a)
                return u
                    .UNSIGNED_SHORT;
            if (1013 === a)
                return u.INT;
            if (1014 === a)
                return u
                    .UNSIGNED_INT;
            if (1015 === a)
                return u.FLOAT;
            if (1016 === a && (
                    b = ca.get(
                        "OES_texture_half_float"
                    )
                    , null !== b
                    ))
                return b
                    .HALF_FLOAT_OES;
            if (1021 === a)
                return u.ALPHA;
            if (1022 === a)
                return u.RGB;
            if (1023 === a)
                return u.RGBA;
            if (1024 === a)
                return u
                    .LUMINANCE;
            if (1025 === a)
                return u
                    .LUMINANCE_ALPHA;
            if (1026 === a)
                return u
                    .DEPTH_COMPONENT;
            if (1027 === a)
                return u
                    .DEPTH_STENCIL;
            if (100 === a)
                return u
                    .FUNC_ADD;
            if (101 === a)
                return u
                    .FUNC_SUBTRACT;
            if (102 === a)
                return u
                    .FUNC_REVERSE_SUBTRACT;
            if (200 === a)
                return u.ZERO;
            if (201 === a)
                return u.ONE;
            if (202 === a)
                return u
                    .SRC_COLOR;
            if (203 === a)
                return u
                    .ONE_MINUS_SRC_COLOR;
            if (204 === a)
                return u
                    .SRC_ALPHA;
            if (205 === a)
                return u
                    .ONE_MINUS_SRC_ALPHA;
            if (206 === a)
                return u
                    .DST_ALPHA;
            if (207 === a)
                return u
                    .ONE_MINUS_DST_ALPHA;
            if (208 === a)
                return u
                    .DST_COLOR;
            if (209 === a)
                return u
                    .ONE_MINUS_DST_COLOR;
            if (210 === a)
                return u
                    .SRC_ALPHA_SATURATE;
            if (2001 === a ||
                2002 === a ||
                2003 === a ||
                2004 === a)
                if (b = ca.get(
                        "WEBGL_compressed_texture_s3tc"
                    )
                    , null !== b
                ) {
                    if (2001 ===
                        a)
                        return b
                            .COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (2002 ===
                        a)
                        return b
                            .COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (2003 ===
                        a)
                        return b
                            .COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (2004 ===
                        a)
                        return b
                            .COMPRESSED_RGBA_S3TC_DXT5_EXT
                } if (2100 ===
                a || 2101 ===
                a || 2102 ===
                a || 2103 === a)
                if (b = ca.get(
                        "WEBGL_compressed_texture_pvrtc"
                    )
                    , null !==
                    b) {
                    if (2100 ===
                        a)
                        return b
                            .COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (2101 ===
                        a)
                        return b
                            .COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (2102 ===
                        a)
                        return b
                            .COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (2103 ===
                        a)
                        return b
                            .COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                } if (2151 ===
                a && (b = ca
                    .get(
                        "WEBGL_compressed_texture_etc1"
                    )
                    , null !== b
                    ))
                return b
                    .COMPRESSED_RGB_ETC1_WEBGL;
            if (103 === a ||
                104 === a)
                if (b = ca.get(
                        "EXT_blend_minmax"
                    )
                    , null !== b
                ) {
                    if (103 ===
                        a)
                        return b
                            .MIN_EXT;
                    if (104 ===
                        a)
                        return b
                            .MAX_EXT
                } return 1020 ===
                a && (b = ca
                    .get(
                        "WEBGL_depth_texture"
                    )
                    , null !== b
                ) ? b
                .UNSIGNED_INT_24_8_WEBGL :
                0
        }
        console.log(
            "THREE.WebGLRenderer"
            , "84");
        a = a || {};
        var y = void 0 !== a
            .canvas ? a.canvas :
            document
            .createElementNS(
                "http://www.w3.org/1999/xhtml"
                , "canvas")
            , A = void 0 !== a
            .context ? a
            .context : null
            , t = void 0 !== a
            .alpha ? a.alpha : !
            1
            , P = void 0 !== a
            .depth ? a.depth : !
            0
            , G = void 0 !== a
            .stencil ? a
            .stencil : !0
            , C = void 0 !== a
            .antialias ? a
            .antialias : !1
            , E = void 0 !== a
            .premultipliedAlpha ?
            a
            .premultipliedAlpha :
            !0
            , J = void 0 !== a
            .preserveDrawingBuffer ?
            a
            .preserveDrawingBuffer :
            !1
            , F = []
            , K = []
            , M = -1
            , Q = []
            , V = -1
            , L =
            new Float32Array(8)
            , O = []
            , D = [];
        this.domElement =
            y;
        this.context = null;
        this.sortObjects = this
            .autoClearStencil =
            this
            .autoClearDepth =
            this
            .autoClearColor =
            this.autoClear = !0;
        this
            .clippingPlanes = [];
        this.localClippingEnabled = !
            1;
        this.gammaFactor = 2;
        this.physicallyCorrectLights =
            this.gammaOutput =
            this.gammaInput = !
            1;
        this.toneMappingWhitePoint =
            this
            .toneMappingExposure =
            this.toneMapping =
            1;
        this.maxMorphTargets =
            8;
        this.maxMorphNormals =
            4;
        var H = this
            , W = null
            , T = null
            , Z = null
            , Y = -1
            , aa = ""
            , ba = null
            , ga = new da
            , ka = null
            , ia = new da
            , la = 0
            , ma = new ea(0)
            , ja = 0
            , na = y.width
            , pa = y.height
            , za = 1
            , ua =
            new da(0, 0, na
                , pa)
            , Ba = !1
            , ra = new da(0, 0
                , na, pa)
            , Ea = new $a
            , va = new Rc
            , wa = !1
            , Ca = !1
            , qa = new Ia
            , Aa = new I
            , oa = new m
            , Fa = new I
            , Da = new I
            , R = {
                hash: ""
                , ambient: [0
                    , 0, 0]
                , directional: []
                , directionalShadowMap: []
                , directionalShadowMatrix: []
                , spot: []
                , spotShadowMap: []
                , spotShadowMatrix: []
                , rectArea: []
                , point: []
                , pointShadowMap: []
                , pointShadowMatrix: []
                , hemi: []
                , shadows: []
            }
            , Ta = {
                calls: 0
                , vertices: 0
                , faces: 0
                , points: 0
            };
        this.info = {
            render: Ta
            , memory: {
                geometries: 0
                , textures: 0
            }
            , programs: null
        };
        var u;
        try {
            t = {
                alpha: t
                , depth: P
                , stencil: G
                , antialias: C
                , premultipliedAlpha: E
                , preserveDrawingBuffer: J
            };
            u = A || y
                .getContext(
                    "webgl", t
                ) || y
                .getContext(
                    "experimental-webgl"
                    , t);
            if (null === u) {
                if (null !== y
                    .getContext(
                        "webgl")
                )
                    throw "Error creating WebGL context with your selected attributes.";
                throw "Error creating WebGL context.";
            }
            void 0 === u
                .getShaderPrecisionFormat &&
                (u.getShaderPrecisionFormat =
                    function () {
                        return {
                            rangeMin: 1
                            , rangeMax: 1
                            , precision: 1
                        }
                    });
            y.addEventListener(
                "webglcontextlost"
                , d, !1)
        } catch (Uc) {
            console.error(
                "THREE.WebGLRenderer: " +
                Uc)
        }
        var ca = new Qc(u);
        ca.get(
            "WEBGL_depth_texture"
            );
        ca.get(
            "OES_texture_float"
            );
        ca.get(
            "OES_texture_float_linear"
            );
        ca.get(
            "OES_texture_half_float"
            );
        ca.get(
            "OES_texture_half_float_linear"
            );
        ca.get(
            "OES_standard_derivatives"
            );
        ca.get(
            "ANGLE_instanced_arrays"
            );
        ca.get(
                "OES_element_index_uint"
                ) &&
            (fa.MaxIndex =
                4294967296);
        var Ga = new Pc(u, ca
                , a)
            , N = new Oc(u, ca
                , v)
            , sa = new Nc
            , Xa = new Mc(u, ca
                , N, sa, Ga, v
                , this.info)
            , Sa = new Lc(u, sa
                , this.info)
            , xa = new Jc(this
                , Ga)
            , ya = new Bc;
        this.info.programs = xa
            .programs;
        var Qa = new Ac(u, ca
                , Ta)
            , Ra = new zc(u, ca
                , Ta)
            , Ka, Ya, Ma, Na;
        b();
        this.context =
            u;
        this.capabilities = Ga;
        this.extensions = ca;
        this.properties = sa;
        this.state = N;
        var Pa = new xc(this, R
            , Sa, Ga);
        this.shadowMap = Pa;
        var Va = new vc(this
                , O)
            , Wa = new uc(this
                , D);
        this.getContext =
            function () {
                return u
            };
        this.getContextAttributes =
            function () {
                return u
                    .getContextAttributes()
            };
        this.forceContextLoss =
            function () {
                ca.get(
                        "WEBGL_lose_context"
                        )
                    .loseContext()
            };
        this.getMaxAnisotropy =
            function () {
                return Ga
                    .getMaxAnisotropy()
            };
        this.getPrecision =
            function () {
                return Ga
                    .precision
            };
        this.getPixelRatio =
            function () {
                return za
            };
        this.setPixelRatio =
            function (a) {
                void 0 !== a &&
                    (za = a
                        , this
                        .setSize(
                            ra
                            .z
                            , ra
                            .w
                            , !1
                            ))
            };
        this.getSize =
            function () {
                return {
                    width: na
                    , height: pa
                }
            };
        this.setSize =
            function (
                a, b, c) {
                na = a;
                pa = b;
                y.width = a *
                    za;
                y.height = b *
                    za;
                !1 !== c && (y
                    .style
                    .width =
                    a +
                    "px", y
                    .style
                    .height =
                    b + "px"
                );
                this.setViewport(
                    0, 0, a
                    , b)
            };
        this.setViewport =
            function (a, b, c
                , d) {
                N.viewport(ra
                    .set(a
                        , b
                        , c,
                        d
                    ))
            };
        this.setScissor =
            function (a, b, c
                , d) {
                N.scissor(ua
                    .set(a
                        , b
                        , c,
                        d
                    ))
            };
        this.setScissorTest =
            function (a) {
                N.setScissorTest(
                    Ba = a)
            };
        this.getClearColor =
            function () {
                return ma
            };
        this.setClearColor =
            function (a
                , b) {
                ma.set(a);
                ja = void 0 !==
                    b ? b : 1;
                N.buffers.color
                    .setClear(ma
                        .r, ma
                        .g, ma
                        .b, ja
                        , E)
            };
        this.getClearAlpha =
            function () {
                return ja
            };
        this.setClearAlpha =
            function (a) {
                ja = a;
                N.buffers.color
                    .setClear(ma
                        .r, ma
                        .g, ma
                        .b, ja
                        , E)
            };
        this.clear = function (
            a
            , b, c) {
            var d = 0;
            if (void 0 ===
                a || a) d |=
                u
                .COLOR_BUFFER_BIT;
            if (void 0 ===
                b || b) d |=
                u
                .DEPTH_BUFFER_BIT;
            if (void 0 ===
                c || c) d |=
                u
                .STENCIL_BUFFER_BIT;
            u.clear(d)
        };
        this.clearColor =
            function () {
                this.clear(!0, !
                    1, !1)
            };
        this.clearDepth =
            function () {
                this.clear(!1, !
                    0, !1)
            };
        this.clearStencil =
            function () {
                this.clear(!1
                    , !1, !0
                )
            };
        this.clearTarget =
            function (a, b, c
                , d) {
                this.setRenderTarget(
                    a);
                this.clear(b, c
                    , d)
            };
        this.resetGLState = c;
        this.dispose =
            function () {
                Q = [];
                V = -1;
                K = [];
                M = -1;
                y.removeEventListener(
                    "webglcontextlost"
                    , d, !1)
            };
        this.renderBufferImmediate =
            function (a, b, c) {
                N
                    .initAttributes();
                var d = sa.get(
                    a);
                a.hasPositions &&
                    !d
                    .position &&
                    (d.position =
                        u
                        .createBuffer()
                    );
                a.hasNormals &&
                    !d.normal &&
                    (d.normal =
                        u
                        .createBuffer()
                    );
                a.hasUvs && !d
                    .uv && (d
                        .uv = u
                        .createBuffer()
                    );
                a.hasColors && !
                    d.color && (
                        d
                        .color =
                        u
                        .createBuffer()
                    );
                b = b
                    .getAttributes();
                a.hasPositions &&
                    (u.bindBuffer(
                            u
                            .ARRAY_BUFFER
                            , d
                            .position
                        ), u
                        .bufferData(
                            u
                            .ARRAY_BUFFER
                            , a
                            .positionArray
                            , u
                            .DYNAMIC_DRAW
                        ), N
                        .enableAttribute(
                            b
                            .position
                        ), u
                        .vertexAttribPointer(
                            b
                            .position
                            , 3,
                            u
                            .FLOAT
                            , !
                            1
                            , 0,
                            0
                        ));
                if (a
                    .hasNormals
                    ) {
                    u.bindBuffer(
                        u
                        .ARRAY_BUFFER
                        , d
                        .normal
                    );
                    if (!c
                        .isMeshPhongMaterial &&
                        !c
                        .isMeshStandardMaterial &&
                        !c
                        .isMeshNormalMaterial &&
                        1 === c
                        .shading
                    )
                        for (var e =
                                0
                                , f =
                                3 *
                                a
                                .count; e <
                            f; e +=
                            9) {
                            var g =
                                a
                                .normalArray
                                , h =
                                (g[e +
                                        0
                                        ] +
                                    g[e +
                                        3
                                    ] +
                                    g[e +
                                        6
                                    ]
                                ) /
                                3
                                , k =
                                (g[e +
                                        1
                                        ] +
                                    g[e +
                                        4
                                    ] +
                                    g[e +
                                        7
                                    ]
                                ) /
                                3
                                , l =
                                (g[e +
                                        2
                                        ] +
                                    g[e +
                                        5
                                    ] +
                                    g[e +
                                        8
                                    ]
                                ) /
                                3;
                            g[e +
                                    0
                                    ] =
                                h;
                            g[e +
                                    1
                                    ] =
                                k;
                            g[e +
                                    2
                                    ] =
                                l;
                            g[e +
                                    3
                                    ] =
                                h;
                            g[e +
                                    4
                                    ] =
                                k;
                            g[e +
                                    5
                                    ] =
                                l;
                            g[e +
                                    6
                                    ] =
                                h;
                            g[e +
                                    7
                                    ] =
                                k;
                            g[e +
                                    8
                                    ] =
                                l
                        }
                    u.bufferData(
                        u
                        .ARRAY_BUFFER
                        , a
                        .normalArray
                        , u
                        .DYNAMIC_DRAW
                    );
                    N.enableAttribute(
                        b
                        .normal
                    );
                    u.vertexAttribPointer(
                        b
                        .normal
                        , 3,
                        u
                        .FLOAT
                        , !
                        1
                        , 0,
                        0
                    )
                }
                a.hasUvs && c
                    .map && (u
                        .bindBuffer(
                            u
                            .ARRAY_BUFFER
                            , d
                            .uv
                        ), u
                        .bufferData(
                            u
                            .ARRAY_BUFFER
                            , a
                            .uvArray
                            , u
                            .DYNAMIC_DRAW
                        ), N
                        .enableAttribute(
                            b.uv
                        ), u
                        .vertexAttribPointer(
                            b
                            .uv
                            , 2,
                            u
                            .FLOAT
                            , !
                            1
                            , 0,
                            0
                        ));
                a.hasColors &&
                    0 !== c
                    .vertexColors &&
                    (u.bindBuffer(
                            u
                            .ARRAY_BUFFER
                            , d
                            .color
                        ), u
                        .bufferData(
                            u
                            .ARRAY_BUFFER
                            , a
                            .colorArray
                            , u
                            .DYNAMIC_DRAW
                        ), N
                        .enableAttribute(
                            b
                            .color
                        )
                        , u
                        .vertexAttribPointer(
                            b
                            .color
                            , 3,
                            u
                            .FLOAT
                            , !
                            1
                            , 0,
                            0
                        ));
                N
                    .disableUnusedAttributes();
                u.drawArrays(u
                    .TRIANGLES
                    , 0, a
                    .count);
                a.count = 0
            };
        this.renderBufferDirect =
            function (a, b, c,
                d
                , e, f) {
                q(d);
                var h = x(a, b
                        , d, e)
                    , k = !1;
                a = c.id + "_" +
                    h.id + "_" +
                    d.wireframe;
                a !== aa && (
                    aa = a
                    , k = !0
                    );
                b = e
                    .morphTargetInfluences;
                if (void 0 !==
                    b) {
                    var l = [];
                    a = 0;
                    for (var m =
                            b
                            .length; a <
                        m; a++)
                        k = b[
                            a],
                        l
                        .push([k
                            , a
                            ]);
                    l.sort(g);
                    8 < l
                        .length &&
                        (l.length =
                            8);
                    var n = c
                        .morphAttributes;
                    a = 0;
                    for (m = l
                        .length; a <
                        m; a++)
                        k = l[
                            a],
                        L[
                            a] =
                        k[
                            0]
                        , 0 !==
                        k[
                            0] ?
                        (b = k[
                                1
                                ]
                            , !
                            0 ===
                            d
                            .morphTargets &&
                            n
                            .position &&
                            c
                            .addAttribute(
                                "morphTarget" +
                                a
                                , n
                                .position[
                                    b
                                ]
                            )
                            , !
                            0 ===
                            d
                            .morphNormals &&
                            n
                            .normal &&
                            c
                            .addAttribute(
                                "morphNormal" +
                                a
                                , n
                                .normal[
                                    b
                                ]
                            )
                        ) :
                        (!0 ===
                            d
                            .morphTargets &&
                            c
                            .removeAttribute(
                                "morphTarget" +
                                a
                            )
                            , !
                            0 ===
                            d
                            .morphNormals &&
                            c
                            .removeAttribute(
                                "morphNormal" +
                                a
                            )
                        );
                    a = l
                        .length;
                    for (b = L
                        .length; a <
                        b; a++)
                        L[a] =
                        0;
                    h.getUniforms()
                        .setValue(
                            u
                            , "morphTargetInfluences"
                            , L
                            );
                    k = !0
                }
                b = c.index;
                m = c.attributes
                    .position;
                l = 1;
                !0 === d
                    .wireframe &&
                    (b = Sa
                        .getWireframeAttribute(
                            c)
                        , l = 2
                        );
                null !== b ? (
                        a = Ra
                        , a
                        .setIndex(
                            b)
                    ) : a =
                    Qa;
                if (k) {
                    a: {
                        var k =
                            void 0
                            , p;
                        if (c &&
                            c
                            .isInstancedBufferGeometry &&
                            (p = ca
                                .get(
                                    "ANGLE_instanced_arrays"
                                )
                                , null ===
                                p
                            )
                        ) {
                            console
                                .error(
                                    "THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
                                );
                            break a
                        }
                        void 0 ===
                        k && (
                            k =
                            0);N
                        .initAttributes();
                        var n =
                            c
                            .attributes
                            , h =
                            h
                            .getAttributes()
                            , r =
                            d
                            .defaultAttributeValues
                            , t;
                        for (
                            t in
                            h) {
                            var v =
                                h[
                                    t
                                    ];
                            if (0 <=
                                v
                            ) {
                                var w =
                                    n[
                                        t
                                        ];
                                if (void 0 !==
                                    w
                                ) {
                                    var y =
                                        w
                                        .normalized
                                        , z =
                                        w
                                        .itemSize
                                        , B =
                                        Sa
                                        .getAttributeProperties(
                                            w
                                        )
                                        , C =
                                        B
                                        .__webglBuffer
                                        , E =
                                        B
                                        .type
                                        , B =
                                        B
                                        .bytesPerElement;
                                    if (w
                                        .isInterleavedBufferAttribute
                                    ) {
                                        var D =
                                            w
                                            .data
                                            , F =
                                            D
                                            .stride
                                            , w =
                                            w
                                            .offset;
                                        D && D
                                            .isInstancedInterleavedBuffer ?
                                            (N.enableAttributeAndDivisor(
                                                    v
                                                    , D
                                                    .meshPerAttribute
                                                    , p
                                                )
                                                , void 0 ===
                                                c
                                                .maxInstancedCount &&
                                                (c.maxInstancedCount =
                                                    D
                                                    .meshPerAttribute *
                                                    D
                                                    .count
                                                )
                                            ) :
                                            N
                                            .enableAttribute(
                                                v
                                            );
                                        u.bindBuffer(
                                            u
                                            .ARRAY_BUFFER
                                            , C
                                        );
                                        u.vertexAttribPointer(
                                            v
                                            , z
                                            , E
                                            , y
                                            , F *
                                            B
                                            , (k *
                                                F +
                                                w
                                            ) *
                                            B
                                        )
                                    } else
                                        w
                                        .isInstancedBufferAttribute ?
                                        (N.enableAttributeAndDivisor(
                                                v
                                                , w
                                                .meshPerAttribute
                                                , p
                                            )
                                            , void 0 ===
                                            c
                                            .maxInstancedCount &&
                                            (c.maxInstancedCount =
                                                w
                                                .meshPerAttribute *
                                                w
                                                .count
                                            )
                                        ) :
                                        N
                                        .enableAttribute(
                                            v
                                        )
                                        , u
                                        .bindBuffer(
                                            u
                                            .ARRAY_BUFFER
                                            , C
                                        )
                                        , u
                                        .vertexAttribPointer(
                                            v
                                            , z
                                            , E
                                            , y
                                            , 0
                                            , k *
                                            z *
                                            B
                                        )
                                } else if (
                                    void 0 !==
                                    r &&
                                    (y = r[
                                            t
                                            ]
                                        , void 0 !==
                                        y
                                    )
                                )
                                    switch (
                                        y
                                        .length
                                    ) {
                                    case 2:
                                        u.vertexAttrib2fv(
                                            v
                                            , y
                                        );
                                        break;
                                    case 3:
                                        u.vertexAttrib3fv(
                                            v
                                            , y
                                        );
                                        break;
                                    case 4:
                                        u.vertexAttrib4fv(
                                            v
                                            , y
                                        );
                                        break;
                                    default:
                                        u.vertexAttrib1fv(
                                            v
                                            , y
                                        )
                                    }
                            }
                        }
                        N
                        .disableUnusedAttributes()
                    }
                    null !==
                    b && u
                    .bindBuffer(
                        u
                        .ELEMENT_ARRAY_BUFFER
                        , Sa
                        .getAttributeBuffer(
                            b))
                }
                p = 0;
                null !== b ? p =
                    b.count :
                    void 0 !==
                    m && (p = m
                        .count);
                b = c.drawRange
                    .start * l;
                m = null !== f ?
                    f.start *
                    l : 0;
                t = Math.max(b
                    , m);
                f = Math.max(0
                    , Math
                    .min(p
                        , b +
                        c
                        .drawRange
                        .count *
                        l
                        , m +
                        (null !==
                            f ?
                            f
                            .count *
                            l :
                            Infinity
                        )
                    ) -
                    1 - t +
                    1);
                if (0 !== f) {
                    if (e
                        .isMesh)
                        if (!
                            0 ===
                            d
                            .wireframe
                        ) N
                            .setLineWidth(
                                d
                                .wireframeLinewidth *
                                (null ===
                                    T ?
                                    za :
                                    1
                                )
                            )
                            , a
                            .setMode(
                                u
                                .LINES
                            );
                        else switch (
                            e
                            .drawMode
                        ) {
                        case 0:
                            a.setMode(
                                u
                                .TRIANGLES
                            );
                            break;
                        case 1:
                            a.setMode(
                                u
                                .TRIANGLE_STRIP
                            );
                            break;
                        case 2:
                            a.setMode(
                                u
                                .TRIANGLE_FAN
                            )
                        } else
                            e
                            .isLine ?
                            (d = d
                                .linewidth
                                , void 0 ===
                                d &&
                                (d =
                                    1
                                    )
                                , N
                                .setLineWidth(
                                    d *
                                    (null ===
                                        T ?
                                        za :
                                        1
                                    )
                                )
                                , e
                                .isLineSegments ?
                                a
                                .setMode(
                                    u
                                    .LINES
                                ) :
                                a
                                .setMode(
                                    u
                                    .LINE_STRIP
                                )
                            ) :
                            e
                            .isPoints &&
                            a
                            .setMode(
                                u
                                .POINTS
                            );
                    c && c
                        .isInstancedBufferGeometry ?
                        0 < c
                        .maxInstancedCount &&
                        a
                        .renderInstances(
                            c
                            , t,
                            f
                        ) :
                        a
                        .render(
                            t, f
                        )
                }
            };
        this.render = function (
            a, b, c, d) {
            if (void 0 !==
                b && !0 !==
                b.isCamera)
                console
                .error(
                    "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
                );
            else {
                aa = "";
                Y = -1;
                ba = null;
                !0 === a
                    .autoUpdate &&
                    a
                    .updateMatrixWorld();
                null === b
                    .parent &&
                    b
                    .updateMatrixWorld();
                b.matrixWorldInverse
                    .getInverse(
                        b
                        .matrixWorld
                    );
                Aa.multiplyMatrices(
                    b
                    .projectionMatrix
                    , b
                    .matrixWorldInverse
                );
                Ea.setFromMatrix(
                    Aa);
                F.length =
                    0;
                V = M = -1;
                O.length =
                    0;
                D.length =
                    0;
                Ca = this
                    .localClippingEnabled;
                wa = va
                    .init(
                        this
                        .clippingPlanes
                        , Ca
                        , b
                        );
                r(a, b);
                K.length =
                    M + 1;
                Q.length =
                    V + 1;
                !0 === H
                    .sortObjects &&
                    (K.sort(
                            h
                            )
                        , Q
                        .sort(
                            l
                        )
                    );
                wa && va
                    .beginShadows();
                for (var e =
                        F
                        , f =
                        0
                        , g =
                        0
                        , m =
                        e
                        .length; g <
                    m; g++
                ) {
                    var n =
                        e[
                            g
                            ];
                    n.castShadow &&
                        (R.shadows[
                                f++
                            ] =
                            n
                        )
                }
                R.shadows
                    .length =
                    f;
                Pa.render(a
                    , b);
                for (var e =
                        F
                        , q =
                        n =
                        0
                        , t =
                        0
                        , u
                        , v
                        , w
                        , x
                        , y =
                        b
                        .matrixWorldInverse
                        , z =
                        0
                        , B =
                        0
                        , C =
                        0
                        , G =
                        0
                        , J =
                        0
                        , f =
                        0
                        , g =
                        e
                        .length; f <
                    g; f++)
                    if (m =
                        e[
                            f
                            ]
                        , u =
                        m
                        .color
                        , v =
                        m
                        .intensity
                        , w =
                        m
                        .distance
                        , x =
                        m
                        .shadow &&
                        m
                        .shadow
                        .map ?
                        m
                        .shadow
                        .map
                        .texture :
                        null
                        , m
                        .isAmbientLight
                    )
                        n +=
                        u
                        .r *
                        v
                        , q +=
                        u
                        .g *
                        v
                        , t +=
                        u
                        .b *
                        v;
                    else if (
                    m
                    .isDirectionalLight
                ) {
                    var A =
                        ya
                        .get(
                            m
                        );
                    A.color
                        .copy(
                            m
                            .color
                        )
                        .multiplyScalar(
                            m
                            .intensity
                        );
                    A.direction
                        .setFromMatrixPosition(
                            m
                            .matrixWorld
                        );
                    oa.setFromMatrixPosition(
                        m
                        .target
                        .matrixWorld
                    );
                    A.direction
                        .sub(
                            oa
                        );
                    A.direction
                        .transformDirection(
                            y
                        );
                    if (A
                        .shadow =
                        m
                        .castShadow
                    ) A
                        .shadowBias =
                        m
                        .shadow
                        .bias
                        , A
                        .shadowRadius =
                        m
                        .shadow
                        .radius
                        , A
                        .shadowMapSize =
                        m
                        .shadow
                        .mapSize;
                    R.directionalShadowMap[
                            z
                        ] =
                        x;
                    R.directionalShadowMatrix[
                            z
                        ] =
                        m
                        .shadow
                        .matrix;
                    R.directional[
                            z++
                        ] =
                        A
                } else if (m
                    .isSpotLight
                ) {
                    A = ya
                        .get(
                            m
                        );
                    A.position
                        .setFromMatrixPosition(
                            m
                            .matrixWorld
                        );
                    A.position
                        .applyMatrix4(
                            y
                        );
                    A.color
                        .copy(
                            u
                        )
                        .multiplyScalar(
                            v
                        );
                    A.distance =
                        w;
                    A.direction
                        .setFromMatrixPosition(
                            m
                            .matrixWorld
                        );
                    oa.setFromMatrixPosition(
                        m
                        .target
                        .matrixWorld
                    );
                    A.direction
                        .sub(
                            oa
                        );
                    A.direction
                        .transformDirection(
                            y
                        );
                    A.coneCos =
                        Math
                        .cos(
                            m
                            .angle
                        );
                    A.penumbraCos =
                        Math
                        .cos(
                            m
                            .angle *
                            (1 - m
                                .penumbra
                            )
                        );
                    A.decay =
                        0 ===
                        m
                        .distance ?
                        0 :
                        m
                        .decay;
                    if (A
                        .shadow =
                        m
                        .castShadow
                    ) A
                        .shadowBias =
                        m
                        .shadow
                        .bias
                        , A
                        .shadowRadius =
                        m
                        .shadow
                        .radius
                        , A
                        .shadowMapSize =
                        m
                        .shadow
                        .mapSize;
                    R.spotShadowMap[
                            C
                        ] =
                        x;
                    R.spotShadowMatrix[
                            C
                        ] =
                        m
                        .shadow
                        .matrix;
                    R.spot[
                            C++
                            ] =
                        A
                } else if (m
                    .isRectAreaLight
                ) A =
                    ya.get(
                        m)
                    , A
                    .color
                    .copy(u)
                    .multiplyScalar(
                        v /
                        (m.width *
                            m
                            .height
                        )
                    ), A
                    .position
                    .setFromMatrixPosition(
                        m
                        .matrixWorld
                    ), A
                    .position
                    .applyMatrix4(
                        y)
                    , Da
                    .identity()
                    , Fa
                    .copy(
                        m
                        .matrixWorld
                    )
                    , Fa
                    .premultiply(
                        y)
                    , Da
                    .extractRotation(
                        Fa)
                    , A
                    .halfWidth
                    .set(
                        .5 *
                        m
                        .width
                        , 0,
                        0
                    ), A
                    .halfHeight
                    .set(0
                        , .5 *
                        m
                        .height
                        , 0
                        )
                    , A
                    .halfWidth
                    .applyMatrix4(
                        Da)
                    , A
                    .halfHeight
                    .applyMatrix4(
                        Da)
                    , R
                    .rectArea[
                        G++
                    ] =
                    A;
                else if (m
                    .isPointLight
                ) {
                    A = ya
                        .get(
                            m
                        );
                    A.position
                        .setFromMatrixPosition(
                            m
                            .matrixWorld
                        );
                    A.position
                        .applyMatrix4(
                            y
                        );
                    A.color
                        .copy(
                            m
                            .color
                        )
                        .multiplyScalar(
                            m
                            .intensity
                        );
                    A.distance =
                        m
                        .distance;
                    A.decay =
                        0 ===
                        m
                        .distance ?
                        0 :
                        m
                        .decay;
                    if (A
                        .shadow =
                        m
                        .castShadow
                    ) A
                        .shadowBias =
                        m
                        .shadow
                        .bias
                        , A
                        .shadowRadius =
                        m
                        .shadow
                        .radius
                        , A
                        .shadowMapSize =
                        m
                        .shadow
                        .mapSize;
                    R.pointShadowMap[
                            B
                        ] =
                        x;
                    void 0
                        ===
                        R
                        .pointShadowMatrix[
                            B
                        ] &&
                        (R.pointShadowMatrix[
                                B
                            ] =
                            new I
                        );
                    oa.setFromMatrixPosition(
                            m
                            .matrixWorld
                        )
                        .negate();
                    R.pointShadowMatrix[
                            B
                        ]
                        .identity()
                        .setPosition(
                            oa
                        );
                    R.point[
                            B++
                            ] =
                        A
                } else m
                    .isHemisphereLight &&
                    (A = ya
                        .get(
                            m
                        )
                        , A
                        .direction
                        .setFromMatrixPosition(
                            m
                            .matrixWorld
                        )
                        , A
                        .direction
                        .transformDirection(
                            y
                        )
                        , A
                        .direction
                        .normalize()
                        , A
                        .skyColor
                        .copy(
                            m
                            .color
                        )
                        .multiplyScalar(
                            v
                        )
                        , A
                        .groundColor
                        .copy(
                            m
                            .groundColor
                        )
                        .multiplyScalar(
                            v
                        )
                        , R
                        .hemi[
                            J++
                        ] =
                        A);
                R.ambient[
                        0] =
                    n;
                R.ambient[
                        1] =
                    q;
                R.ambient[
                        2] =
                    t;
                R.directional
                    .length =
                    z;
                R.spot
                    .length =
                    C;
                R.rectArea
                    .length =
                    G;
                R.point
                    .length =
                    B;
                R.hemi
                    .length =
                    J;
                R.hash = z +
                    "," +
                    B +
                    "," +
                    C +
                    "," +
                    G +
                    "," +
                    J +
                    "," + R
                    .shadows
                    .length;
                wa && va
                    .endShadows();
                Ta.calls =
                    0;
                Ta.vertices =
                    0;
                Ta.faces =
                    0;
                Ta.points =
                    0;
                void 0 ===
                    c && (
                        c =
                        null
                    );
                this.setRenderTarget(
                    c);
                e = a
                    .background;
                null === e ?
                    N
                    .buffers
                    .color
                    .setClear(
                        ma
                        .r
                        , ma
                        .g
                        , ma
                        .b
                        , ja
                        , E
                        ) :
                    e && e
                    .isColor &&
                    (N.buffers
                        .color
                        .setClear(
                            e
                            .r
                            , e
                            .g
                            , e
                            .b
                            , 1
                            , E
                        )
                        , d = !
                        0);
                (this
                    .autoClear ||
                    d) &&
                this.clear(
                    this
                    .autoClearColor
                    , this
                    .autoClearDepth
                    , this
                    .autoClearStencil
                );
                e && e
                    .isCubeTexture ?
                    (void 0 ===
                        Ma &&
                        (Ma =
                            new cb
                            , Na =
                            new Za(
                                new ab(
                                    5
                                    , 5
                                    , 5
                                )
                                , new Ha({
                                    uniforms: Oa
                                        .cube
                                        .uniforms
                                    , vertexShader: Oa
                                        .cube
                                        .vertexShader
                                    , fragmentShader: Oa
                                        .cube
                                        .fragmentShader
                                    , side: 1
                                    , depthTest:
                                        !
                                        1
                                    , depthWrite:
                                        !
                                        1
                                    , fog:
                                        !
                                        1
                                })
                            )
                        )
                        , Ma
                        .projectionMatrix
                        .copy(
                            b
                            .projectionMatrix
                        )
                        , Ma
                        .matrixWorld
                        .extractRotation(
                            b
                            .matrixWorld
                        )
                        , Ma
                        .matrixWorldInverse
                        .getInverse(
                            Ma
                            .matrixWorld
                        )
                        , Na
                        .material
                        .uniforms
                        .tCube
                        .value =
                        e
                        , Na
                        .modelViewMatrix
                        .multiplyMatrices(
                            Ma
                            .matrixWorldInverse
                            , Na
                            .matrixWorld
                        )
                        , Sa
                        .update(
                            Na
                        )
                        , H
                        .renderBufferDirect(
                            Ma
                            , null
                            , Na
                            .geometry
                            , Na
                            .material
                            , Na
                            , null
                        )
                    ) :
                    e && e
                    .isTexture &&
                    (void 0 ===
                        Ka &&
                        (Ka =
                            new sb(
                                -
                                1
                                , 1
                                , 1
                                , -
                                1
                                , 0
                                , 1
                            )
                            , Ya =
                            new Za(
                                new bb(
                                    2
                                    , 2
                                )
                                , new La({
                                    depthTest:
                                        !
                                        1
                                    , depthWrite:
                                        !
                                        1
                                    , fog:
                                        !
                                        1
                                })
                            )
                        )
                        , Ya
                        .material
                        .map =
                        e
                        , Sa
                        .update(
                            Ya
                        )
                        , H
                        .renderBufferDirect(
                            Ka
                            , null
                            , Ya
                            .geometry
                            , Ya
                            .material
                            , Ya
                            , null
                        )
                    );
                a.overrideMaterial ?
                    (d = a
                        .overrideMaterial
                        , p(K,
                            a
                            , b
                            , d
                        )
                        , p(Q,
                            a
                            , b
                            , d
                        )
                    ) :
                    (N.setBlending(
                            0
                        )
                        , p(K,
                            a
                            , b
                        )
                        , p(Q,
                            a
                            , b
                        )
                    );
                Va.render(a
                    , b);
                Wa.render(a
                    , b
                    , ia
                );
                c && Xa
                    .updateRenderTargetMipmap(
                        c);
                N.setDepthTest(
                    !0);
                N.setDepthWrite(
                    !0);
                N.setColorWrite(
                    !0)
            }
        };
        this.setFaceCulling =
            function (a, b) {
                N.setCullFace(
                    a);
                N.setFlipSided(
                    0 === b)
            };
        this.allocTextureUnit =
            function () {
                var a = la;
                a >= Ga
                    .maxTextures &&
                    console
                    .warn(
                        "WebGLRenderer: trying to use " +
                        a +
                        " texture units while this GPU supports only " +
                        Ga
                        .maxTextures
                    );
                la += 1;
                return a
            };
        this.setTexture2D =
            function () {
                var a = !1;
                return function (
                    b, c) {
                    b && b
                        .isWebGLRenderTarget &&
                        (a ||
                            (console
                                .warn(
                                    "THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."
                                )
                                , a = !
                                0
                            )
                            , b =
                            b
                            .texture
                        );
                    Xa.setTexture2D(
                        b
                        , c
                    )
                }
            }();
        this.setTexture =
            function () {
                var a = !1;
                return function (
                    b, c) {
                    a || (console
                        .warn(
                            "THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."
                        )
                        , a = !
                        0
                    );
                    Xa.setTexture2D(
                        b
                        , c
                    )
                }
            }();
        this.setTextureCube =
            function () {
                var a = !1;
                return function (
                    b, c) {
                    b && b
                        .isWebGLRenderTargetCube &&
                        (a ||
                            (console
                                .warn(
                                    "THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."
                                )
                                , a = !
                                0
                            )
                            , b =
                            b
                            .texture
                        );
                    b && b
                        .isCubeTexture ||
                        Array
                        .isArray(
                            b
                            .image
                        ) &&
                        6 ===
                        b
                        .image
                        .length ?
                        Xa
                        .setTextureCube(
                            b
                            , c
                        ) :
                        Xa
                        .setTextureCubeDynamic(
                            b
                            , c
                        )
                }
            }();
        this.getCurrentRenderTarget =
            function () {
                return T
            };
        this.setRenderTarget =
            function (a) {
                (T = a) &&
                void 0 === sa
                    .get(a)
                    .__webglFramebuffer &&
                    Xa
                    .setupRenderTarget(
                        a);
                var b = a && a
                    .isWebGLRenderTargetCube
                    , c;
                a ? (c = sa.get(
                            a)
                        , c =
                        b ?
                        c
                        .__webglFramebuffer[
                            a
                            .activeCubeFace
                        ] :
                        c
                        .__webglFramebuffer
                        , ga
                        .copy(
                            a
                            .scissor
                        )
                        , ka = a
                        .scissorTest
                        , ia
                        .copy(
                            a
                            .viewport
                        )) :
                    (c = null
                        , ga
                        .copy(
                            ua)
                        .multiplyScalar(
                            za)
                        , ka =
                        Ba
                        , ia
                        .copy(
                            ra)
                        .multiplyScalar(
                            za)
                    );
                Z !== c && (u
                    .bindFramebuffer(
                        u
                        .FRAMEBUFFER
                        , c
                    )
                    , Z = c);
                N.scissor(ga);
                N.setScissorTest(
                    ka);
                N.viewport(ia);
                b && (b = sa
                    .get(a
                        .texture
                    ), u
                    .framebufferTexture2D(
                        u
                        .FRAMEBUFFER
                        , u
                        .COLOR_ATTACHMENT0
                        , u
                        .TEXTURE_CUBE_MAP_POSITIVE_X +
                        a
                        .activeCubeFace
                        , b
                        .__webglTexture
                        , a
                        .activeMipMapLevel
                    ))
            };
        this.readRenderTargetPixels =
            function (a, b, c,
                d
                , e, f) {
                if (!1 === (a &&
                        a
                        .isWebGLRenderTarget
                    ))
                    console
                    .error(
                        "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
                    );
                else {
                    var g = sa
                        .get(a)
                        .__webglFramebuffer;
                    if (g) {
                        var h = !
                            1;
                        g !==
                            Z &&
                            (u.bindFramebuffer(
                                    u
                                    .FRAMEBUFFER
                                    , g
                                )
                                , h = !
                                0
                            );
                        try {
                            var k =
                                a
                                .texture
                                , l =
                                k
                                .format
                                , m =
                                k
                                .type;
                            1023 !==
                                l &&
                                v(
                                    l
                                    ) !==
                                u
                                .getParameter(
                                    u
                                    .IMPLEMENTATION_COLOR_READ_FORMAT
                                ) ?
                                console
                                .error(
                                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                                ) :
                                1009 ===
                                m ||
                                v(
                                    m
                                    ) ===
                                u
                                .getParameter(
                                    u
                                    .IMPLEMENTATION_COLOR_READ_TYPE
                                ) ||
                                1015 ===
                                m &&
                                (ca.get(
                                        "OES_texture_float"
                                        ) ||
                                    ca
                                    .get(
                                        "WEBGL_color_buffer_float"
                                    )
                                ) ||
                                1016 ===
                                m &&
                                ca
                                .get(
                                    "EXT_color_buffer_half_float"
                                ) ?
                                u
                                .checkFramebufferStatus(
                                    u
                                    .FRAMEBUFFER
                                ) ===
                                u
                                .FRAMEBUFFER_COMPLETE ?
                                0 <=
                                b &&
                                b <=
                                a
                                .width -
                                d &&
                                0 <=
                                c &&
                                c <=
                                a
                                .height -
                                e &&
                                u
                                .readPixels(
                                    b
                                    , c
                                    , d
                                    , e
                                    , v(
                                        l
                                        )
                                    , v(
                                        m
                                        )
                                    , f
                                ) :
                                console
                                .error(
                                    "THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
                                ) :
                                console
                                .error(
                                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                                )
                        } finally {
                            h && u
                                .bindFramebuffer(
                                    u
                                    .FRAMEBUFFER
                                    , Z
                                )
                        }
                    }
                }
            }
    };
    l.Scene = Aa;
    l.Mesh = Za;
    l.VideoTexture = Va;
    l.MeshBasicMaterial = La;
    l.ShaderMaterial = Ha;
    l.TextureLoader = Tb;
    l.PerspectiveCamera = cb;
    l.Object3D = Y;
    l.Raycaster = vb;
    l.Math = P;
    l.Quaternion = aa;
    l.Euler = ua;
    l.Matrix4 = I;
    l.Matrix3 = pa;
    l.Vector4 = da;
    l.Vector3 = m;
    l.Vector2 = A;
    l.Color = ea;
    l.TorusGeometry = Wa;
    l.SphereGeometry = eb;
    l.CircleGeometry = gb;
    l.RingGeometry = ib;
    l.REVISION = "84";
    l.MOUSE = {
        LEFT: 0
        , MIDDLE: 1
        , RIGHT: 2
    };
    l.CullFaceNone = 0;
    l.CullFaceBack = 1;
    l.CullFaceFront = 2;
    l.CullFaceFrontBack = 3;
    l.FrontFaceDirectionCW = 0;
    l.FrontFaceDirectionCCW = 1;
    l.BasicShadowMap = 0;
    l.PCFShadowMap = 1;
    l.PCFSoftShadowMap = 2;
    l.FrontSide = 0;
    l.BackSide = 1;
    l.DoubleSide = 2;
    l.FlatShading =
        1;
    l.SmoothShading = 2;
    l.NoColors = 0;
    l.FaceColors = 1;
    l.VertexColors = 2;
    l.NoBlending = 0;
    l.NormalBlending = 1;
    l.AdditiveBlending = 2;
    l.SubtractiveBlending = 3;
    l.MultiplyBlending = 4;
    l.CustomBlending = 5;
    l.AddEquation = 100;
    l.SubtractEquation = 101;
    l.ReverseSubtractEquation = 102;
    l.MinEquation = 103;
    l.MaxEquation = 104;
    l.ZeroFactor = 200;
    l.OneFactor = 201;
    l.SrcColorFactor = 202;
    l.OneMinusSrcColorFactor = 203;
    l.SrcAlphaFactor = 204;
    l.OneMinusSrcAlphaFactor = 205;
    l.DstAlphaFactor = 206;
    l.OneMinusDstAlphaFactor = 207;
    l.DstColorFactor = 208;
    l.OneMinusDstColorFactor =
        209;
    l.SrcAlphaSaturateFactor = 210;
    l.NeverDepth = 0;
    l.AlwaysDepth = 1;
    l.LessDepth = 2;
    l.LessEqualDepth = 3;
    l.EqualDepth = 4;
    l.GreaterEqualDepth = 5;
    l.GreaterDepth = 6;
    l.NotEqualDepth = 7;
    l.MultiplyOperation = 0;
    l.MixOperation = 1;
    l.AddOperation = 2;
    l.NoToneMapping = 0;
    l.LinearToneMapping = 1;
    l.ReinhardToneMapping = 2;
    l.Uncharted2ToneMapping = 3;
    l.CineonToneMapping = 4;
    l.UVMapping = 300;
    l.CubeReflectionMapping = 301;
    l.CubeRefractionMapping = 302;
    l.EquirectangularReflectionMapping =
        303;
    l.EquirectangularRefractionMapping =
        304;
    l.SphericalReflectionMapping =
        305;
    l.CubeUVReflectionMapping = 306;
    l.CubeUVRefractionMapping = 307;
    l.RepeatWrapping = 1E3;
    l.ClampToEdgeWrapping = 1001;
    l.MirroredRepeatWrapping = 1002;
    l.NearestFilter = 1003;
    l.NearestMipMapNearestFilter =
        1004;
    l.NearestMipMapLinearFilter =
        1005;
    l.LinearFilter = 1006;
    l.LinearMipMapNearestFilter =
        1007;
    l.LinearMipMapLinearFilter =
        1008;
    l.UnsignedByteType = 1009;
    l.ByteType = 1010;
    l.ShortType = 1011;
    l.UnsignedShortType = 1012;
    l.IntType = 1013;
    l.UnsignedIntType = 1014;
    l.FloatType = 1015;
    l.HalfFloatType = 1016;
    l.UnsignedShort4444Type = 1017;
    l.UnsignedShort5551Type = 1018;
    l.UnsignedShort565Type = 1019;
    l.UnsignedInt248Type = 1020;
    l.AlphaFormat = 1021;
    l.RGBFormat = 1022;
    l.RGBAFormat = 1023;
    l.LuminanceFormat = 1024;
    l.LuminanceAlphaFormat = 1025;
    l.RGBEFormat = 1023;
    l.DepthFormat = 1026;
    l.DepthStencilFormat = 1027;
    l.RGB_S3TC_DXT1_Format = 2001;
    l.RGBA_S3TC_DXT1_Format = 2002;
    l.RGBA_S3TC_DXT3_Format = 2003;
    l.RGBA_S3TC_DXT5_Format = 2004;
    l.RGB_PVRTC_4BPPV1_Format =
        2100;
    l.RGB_PVRTC_2BPPV1_Format =
        2101;
    l.RGBA_PVRTC_4BPPV1_Format =
        2102;
    l.RGBA_PVRTC_2BPPV1_Format =
        2103;
    l.RGB_ETC1_Format =
        2151;
    l.LoopOnce = 2200;
    l.LoopRepeat = 2201;
    l.LoopPingPong = 2202;
    l.InterpolateDiscrete = 2300;
    l.InterpolateLinear = 2301;
    l.InterpolateSmooth = 2302;
    l.ZeroCurvatureEnding = 2400;
    l.ZeroSlopeEnding = 2401;
    l.WrapAroundEnding = 2402;
    l.TrianglesDrawMode = 0;
    l.TriangleStripDrawMode = 1;
    l.TriangleFanDrawMode = 2;
    l.LinearEncoding = 3E3;
    l.sRGBEncoding = 3001;
    l.GammaEncoding = 3007;
    l.RGBEEncoding = 3002;
    l.LogLuvEncoding = 3003;
    l.RGBM7Encoding = 3004;
    l.RGBM16Encoding = 3005;
    l.RGBDEncoding = 3006;
    l.BasicDepthPacking = 3200;
    l.RGBADepthPacking = 3201;
    Object.defineProperty(l
        , "__esModule", {
            value: !0
        });
    Object.defineProperty(l
        , "AudioContext", {
            get: function () {
                return l
                    .getAudioContext()
            }
        })
});
