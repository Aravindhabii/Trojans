'use strict';
(self.webpackChunktrojans = self.webpackChunktrojans || []).push([
	[617],
	{
		1677: function (e, t, n) {
			n.d(t, {
				Z: function () {
					return c;
				}
			});
			var i,
				o = n(1413),
				a = n(4925),
				r = (n(2791), n(168)),
				s = n(6031).ZP.div(
					i ||
						(i = (0, r.Z)([
							'\n\theight: 100vh;\n\tbackground: #000;\n\tz-index: 1;\n\tposition: absolute;\n\twidth: 100%;\n\toverflow: hidden;\n\n\t.hex {\n\t\tbackground: url(',
							") repeat;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-size: 350px;\n\t\tz-index: 1;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground: linear-gradient(\n\t\t\t\t",
							",\n\t\t\t\trgba(0, 0, 0, 0) 70%,\n\t\t\t\trgba(0, 0, 0, 1) 100%\n\t\t\t);\n\t\t\tz-index: -1;\n\t\t}\n\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\t\tz-index: -1;\n\t\t}\n\t}\n\t.bg {\n\t\tposition: absolute;\n\t\theight: 300px;\n\t\twidth: 300px;\n\t\t/* background: linear-gradient(90deg, #9500ff 0%, #ff41df 100%); */\n\t\tbackground: ",
							';\n\t\tfilter: blur(20px);\n\t\tz-index: 0;\n\t\tborder-radius: 50%;\n\t}\n'
						])),
					function (e) {
						return e.svg;
					},
					function (e) {
						return e.direction;
					},
					function (e) {
						var t = e.color;
						return t || 'linear-gradient(90deg, #9500ff 0%, #ff41df 100%);';
					}
				),
				l = n(184),
				h = ['direction', 'svg', 'color'],
				c = function (e) {
					var t = e.direction,
						n = e.svg,
						i = e.color,
						r = (0, a.Z)(e, h);
					return (0, l.jsxs)(
						s,
						(0, o.Z)(
							(0, o.Z)({ svg: n, color: i }, r),
							{},
							{
								direction: t,
								children: [
									(0, l.jsx)('div', { className: 'hex' }),
									(0, l.jsx)('div', { className: 'bg' })
								]
							}
						)
					);
				};
		},
		9560: function (e, t, n) {
			n.d(t, {
				Z: function () {
					return O;
				}
			});
			var i,
				o,
				a,
				r,
				s,
				l,
				h,
				c,
				d,
				m,
				p,
				u,
				g = n(9439),
				x = n(2791),
				f = n(5331),
				y = n(168),
				b = n(6031),
				j = n(5641),
				w = b.ZP.div(
					i ||
						(i = (0, y.Z)([
							'\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0.5rem 1rem;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 100;\n\theight: 6rem;\n\tcolor: white;\n\tpadding: 0 5rem;\n\twidth: 100%;\n\n\t@media (max-width: 800px) {\n\t\tpadding: 0 5rem;\n\t}\n\n\t@media (max-width: 700px) {\n\t\tpadding: 0 4rem;\n\t}\n\n\t@media (max-width: 550px) {\n\t\tpadding: 0 2rem;\n\t}\n'
						]))
				),
				v = b.ZP.a(
					o ||
						(o = (0, y.Z)([
							'\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-right: 1rem;\n\ttext-decoration: none;\n\tbackground: url(',
							') center/contain no-repeat;\n\twidth: 13rem;\n\theight: 5rem;\n\n\t/* h1 {\n\t\tcolor: transparent;\n\t\tbackground-clip: text;\n\t\t-webkit-background-clip: text;\n\t} */\n\n\t@media (max-width: 800px) {\n\t\twidth: 11rem;\n\t}\n\n\t@media (max-width: 600px) {\n\t\twidth: 9rem;\n\t}\n'
						])),
					j
				),
				_ = b.ZP.div(
					a ||
						(a = (0, y.Z)([
							'\n\twidth: 3rem;\n\theight: 1.5rem;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tflex-direction: column;\n\n\tspan {\n\t\tbackground-color: white;\n\t\twidth: 100%;\n\t\theight: 2px;\n\t\tborder-radius: 10px;\n\t}\n'
						]))
				),
				N = b.ZP.div(
					r ||
						(r = (0, y.Z)([
							'\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100vh;\n\ttop: 0;\n\tbackground-color: black;\n\tz-index: 1000;\n\tdisplay: flex;\n\tcolor: white;\n\tpadding-left: 5rem;\n\tjustify-content: space-between;\n\toverflow: hidden;\n\ttransition: all 0.3s ease-in-out;\n\topacity: ',
							';\n\tz-index: ',
							';\n\n\t@media (max-width: 500px) {\n\t\tpadding-left: 2rem;\n\t}\n'
						])),
					function (e) {
						return e.isNavOpen ? 1 : 0;
					},
					function (e) {
						return e.isNavOpen ? 101 : -1;
					}
				),
				k = b.ZP.ul(
					s ||
						(s = (0, y.Z)([
							'\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: center;\n\tlist-style: none;\n\tflex-direction: column;\n'
						]))
				),
				P = b.ZP.li(
					l ||
						(l = (0, y.Z)([
							'\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-right: 1rem;\n\tmargin: 0.5rem 0;\n\n\ta {\n\t\tfont-size: 2rem !important;\n\t\ttext-decoration: none;\n\t\tfont-weight: bold;\n\t\tcolor: transparent;\n\t\t-webkit-text-stroke: 0.1px\n\t\t\t',
							";\n\t\ttransition: all 0.2s ease-in;\n\t\tposition: relative;\n\t\tfont-family: 'ShareTechMono';\n\n\t\t@media (max-width: 350px) {\n\t\t\t\n\t\t\tfont-size: 2rem !important;\n\t\t}\n\t}\n\n\ta::before {\n\t\tcontent: '",
							"';\n\t\tposition: absolute;\n\t\tcolor: ",
							';\n\t\toverflow: hidden;\n\t\twidth: ',
							';\n\t\theight: 100%;\n\t\ttransition: all 0.2s ease-in;\n\t\tborder-right: 5px solid ',
							';\n\t\tfilter: drop-shadow(\n\t\t\t',
							'\n\t\t);\n\t}\n\n\ta:hover::before {\n\t\twidth: 100%;\n\t\t-webkit-text-stroke: 1px ',
							';\n\t\tborder-right: 4px solid ',
							';\n\t\tfilter: drop-shadow(0 0 25px ',
							');\n\t}\n'
						])),
					function (e) {
						var t = e.color;
						return e.activeRoute ? t : 'rgba(255, 255, 255)';
					},
					function (e) {
						return e.body;
					},
					function (e) {
						return e.color;
					},
					function (e) {
						return e.activeRoute ? '100%' : '0%';
					},
					function (e) {
						return e.color;
					},
					function (e) {
						var t = e.color;
						return e.activeRoute ? '0 0 25px' : '0 0 0 ' + t;
					},
					function (e) {
						return e.color;
					},
					function (e) {
						return e.color;
					},
					function (e) {
						return e.color;
					}
				),
				C = b.ZP.div(
					h ||
						(h = (0, y.Z)([
							'\n\twidth: 3rem;\n\theight: 2.5rem;\n\tposition: absolute;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\ttop: 3rem;\n\n\tspan {\n\t\tbackground-color: white;\n\t\twidth: 100%;\n\t\theight: 2px;\n\t\tborder-radius: 10px;\n\t\ttransform-origin: center;\n\t\tposition: absolute;\n\t}\n\n\tspan:nth-of-type(1) {\n\t\ttransform: rotate(-45deg);\n\t}\n\n\tspan:nth-of-type(2) {\n\t\tdisplay: none;\n\t}\n\n\tspan:nth-of-type(3) {\n\t\ttransform: rotate(45deg);\n\t}\n'
						]))
				),
				T = b.ZP.div(
					c ||
						(c = (0, y.Z)([
							'\n\twidth: 60%;\n\theight: 100%;\n\tposition: relative;\n\tdisplay: flex;\n\n\tdiv {\n\t\ttransition: all 0.5s ease-in-out;\n\t\tposition: relative;\n\t\theight: 100%;\n\t\twidth: 50%;\n\t}\n\n\tdiv:nth-of-type(1) {\n\t\tmargin-right: 4rem;\n\t}\n\n\t@media (max-width: 900px) {\n\t\tdisplay: none;\n\t}\n'
						]))
				),
				M = (0, b.F4)(
					d ||
						(d = (0, y.Z)([
							'\n0%{\n\tbox-shadow: 0 0 5px blue, 0 0 25px blue;\n}\n\n100%{\n\tbox-shadow: 0 0 5px blue, 0 0 55px blue;\n\n}\n'
						]))
				),
				S = b.ZP.div(
					m ||
						(m = (0, y.Z)([
							'\n\twidth: 100% !important;\n\theight: 70vh !important;\n\tposition: relative;\n\tbackground: url(',
							') center/cover;\n\tmargin: 4rem 0;\n\tborder-radius: 10px;\n\ttransform: translateY(\n\t\t',
							'\n\t);\n\tanimation: ',
							' 1s ease;\n'
						])),
					function (e) {
						return e.src;
					},
					function (e) {
						var t = e.scroll;
						return (e.left ? -100 - 110 * t : 120 * t - 640) + '%';
					},
					M
				),
				E = (0, b.F4)(
					p ||
						(p = (0, y.Z)([
							'\n    0% {\n        transform: rotate(0deg);\n        filter: hue-rotate(0deg);\n    }\n    0% {\n        transform: rotate(360deg);\n        filter: hue-rotate(360deg);\n    }\n'
						]))
				),
				I = b.ZP.section(
					u ||
						(u = (0, y.Z)([
							"\n\tposition: absolute;\n\twidth: 200px;\n\theight: 200px;\n\tmargin: 10%;\n\ttransition: 5s;\n\ttop: 10%;\n\tright: -40%;\n\ttransition: 5s;\n\tspan {\n\t\tposition: absolute;\n\t\ttop: 0%;\n\t\tleft: 0%;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\tspan::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 10px;\n\t\theight: 10px;\n\t\tborder-radius: 50%;\n\t\tbackground: transparent;\n\t\tborder: 4px solid #00efff;\n\t\tbox-sizing: border-box;\n\t\tbox-shadow: 0 0 20px #00efff, -200px -200px 0px yellow,\n\t\t\t-200px -200px 20px yellow, 200px 200px 0px yellow, 200px 200px 20px yellow,\n\t\t\t-200px 200px 0px #00efff, -200px 200px 0px red, 200px -200px 20px blue,\n\t\t\t200px -200px 20px blue;\n\t\ttransform-origin: 250px;\n\t\tanimation: ",
							' 10s linear infinite;\n\t}\n'
						])),
					E
				),
				A = n(184),
				Z = function (e) {
					var t = e.body,
						n = e.url,
						i = e.activeRoute,
						o = e.setScrollDiv,
						a = e.scroll,
						r = e.activeScroll,
						s = e.color;
					return (0, A.jsx)(P, {
						activeRoute: i,
						onMouseEnter: function () {
							return o(a);
						},
						onMouseLeave: function () {
							return o(r);
						},
						body: t,
						color: s,
						children: (0, A.jsxs)('a', { href: n, children: [t, '\xa0'] })
					});
				},
				R = function (e) {
					var t = e.active,
						n = e.isNavOpen,
						i = e.setIsNavOpen;
					(0, x.useEffect)(
						function () {
							document.body.style.overflow = n ? 'hidden' : 'auto';
						},
						[n]
					);
					var o = [
							'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
							'https://images.pexels.com/photos/11041919/pexels-photo-11041919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
							'https://images.pexels.com/photos/5818628/pexels-photo-5818628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
							'https://images.pexels.com/photos/8910626/pexels-photo-8910626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
							'https://images.pexels.com/photos/2166694/pexels-photo-2166694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
							'https://images.pexels.com/photos/2166694/pexels-photo-2166694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
							'https://images.pexels.com/photos/2166694/pexels-photo-2166694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
							'https://images.pexels.com/photos/2166694/pexels-photo-2166694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						],
						a = (0, x.useState)(t.scroll),
						r = (0, g.Z)(a, 2),
						s = r[0],
						l = r[1];
					return (0, A.jsxs)(N, {
						isNavOpen: n,
						children: [
							(0, A.jsxs)(I, {
								children: [
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 1))',
											animationDelay: 'calc(-0.25s * 1)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 2))',
											animationDelay: 'calc(-0.25s * 2)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 3))',
											animationDelay: 'calc(-0.25s * 3)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 4))',
											animationDelay: 'calc(-0.25s * 4)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 5))',
											animationDelay: 'calc(-0.25s * 5)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 6))',
											animationDelay: 'calc(-0.25s * 6)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 7))',
											animationDelay: 'calc(-0.25s * 7)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 8))',
											animationDelay: 'calc(-0.25s * 8)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg * 9))',
											animationDelay: 'calc(-0.25s * 9)'
										}
									}),
									(0, A.jsx)('span', {
										style: {
											transform: 'rotate(calc(36deg *10))',
											animationDelay: 'calc(-0.25s * 10)'
										}
									})
								]
							}),
							(0, A.jsxs)(C, {
								onClick: function () {
									return i(!1);
								},
								children: [
									(0, A.jsx)('span', {}),
									(0, A.jsx)('span', {}),
									(0, A.jsx)('span', {})
								]
							}),
							(0, A.jsxs)(k, {
								children: [
									(0, A.jsx)(Z, {
										activeRoute: 'home' === t.route,
										url: '/',
										body: '\xa0Home',
										setScrollDiv: l,
										scroll: 0,
										activeScroll: t.scroll,
										color: 'red'
									}),
									(0, A.jsx)(Z, {
										activeRoute: 'events' === t.route,
										url: '/events',
										body: '\xa0Events',
										setScrollDiv: l,
										scroll: 1,
										activeScroll: t.scroll,
										color: 'blue'
									}),
									(0, A.jsx)(Z, {
										activeRoute: 'guidelines' === t.route,
										url: '/guidelines',
										body: '\xa0Guidelines',
										setScrollDiv: l,
										scroll: 2,
										activeScroll: t.scroll,
										color: 'green'
									}),
									(0, A.jsx)(Z, {
										activeRoute: 'sponsor' === t.route,
										url: '/sponsor',
										body: '\xa0Sponsor',
										setScrollDiv: l,
										scroll: 3,
										activeScroll: t.scroll,
										color: 'purple'
									}),
									(0, A.jsx)(Z, {
										activeRoute: 'registration' === t.route,
										url: '/registration',
										body: '\xa0Register',
										setScrollDiv: l,
										scroll: 4,
										activeScroll: t.scroll,
										color: 'yellow'
									})
								]
							}),
							(0, A.jsxs)(T, {
								children: [
									(0, A.jsx)('div', {
										children: o.map(function (e, t) {
											return (0, A.jsx)(S, { src: e, scroll: s, left: !0 }, t);
										})
									}),
									(0, A.jsx)('div', {
										children: o.map(function (e, t) {
											return (0, A.jsx)(S, { src: e, scroll: s }, t);
										})
									})
								]
							})
						]
					});
				},
				O = function (e) {
					var t = e.active,
						n = (0, x.useState)(!1),
						i = (0, g.Z)(n, 2),
						o = i[0],
						a = i[1],
						r = (0, x.useRef)();
					return (
						(0, x.useEffect)(function () {
							window.addEventListener('scroll', function () {
								window.scrollY > 500
									? f.ZP.to(r.current, {
											duration: 0.5,
											backgroundColor: 'rgba(0,0,0,0.8)'
									  })
									: f.ZP.to(r.current, {
											duration: 0.5,
											backgroundColor: 'rgba(0,0,0,0)'
									  });
							});
						}, []),
						(0, A.jsxs)(A.Fragment, {
							children: [
								(0, A.jsx)(R, { active: t, isNavOpen: o, setIsNavOpen: a }),
								(0, A.jsxs)(w, {
									ref: r,
									children: [
										(0, A.jsx)(v, { href: '/' }),
										(0, A.jsxs)(_, {
											onClick: function () {
												return a(!0);
											},
											children: [
												(0, A.jsx)('span', {}),
												(0, A.jsx)('span', {}),
												(0, A.jsx)('span', {})
											]
										})
									]
								})
							]
						})
					);
				};
		},
		8719: function (e, t, n) {
			n.r(t),
				n.d(t, {
					default: function () {
						return je;
					}
				});
			var i = n(9439),
				o = n(2791),
				a = n(4270),
				r = n(5331),
				s = n(9560),
				l = n(4150),
				h = n(6734),
				c = n(3520),
				d = n(1413),
				m = n(3655),
				p = n(184);
			function u(e) {
				var t = Object.assign({}, e),
					n = (0, o.useRef)(),
					i = (0, m.L)('/laptop.glb'),
					a = i.nodes,
					r = i.materials;
				return (0, p.jsx)(
					'group',
					(0, d.Z)(
						(0, d.Z)({ ref: n }, t),
						{},
						{
							dispose: null,
							position: [0, -0.1, -0.02],
							children: (0, p.jsx)('group', {
								rotation: [-Math.PI / 2, 0, 0],
								children: (0, p.jsxs)('group', {
									rotation: [Math.PI / 2, 0, 0],
									children: [
										(0, p.jsx)('mesh', {
											geometry: a.Object_4.geometry,
											material: r.MacBookPro
										}),
										(0, p.jsxs)('group', {
											position: [0.12, 0.01, 0],
											children: [
												(0, p.jsx)('mesh', {
													geometry: a.Object_8.geometry,
													material: r.MacBookPro
												}),
												(0, p.jsx)('mesh', {
													geometry: a.Object_6.geometry,
													material: r.MacBookPro
												})
											]
										})
									]
								})
							})
						}
					)
				);
			}
			function g() {
				return (0, p.jsxs)(l.Xz, {
					className: 'canvas',
					updateDefaultCamera: !0,
					camera: { fov: 10, near: 2, far: 1e3, z: 4 },
					children: [
						(0, p.jsx)('ambientLight', { intensity: 1 }),
						(0, p.jsx)('spotLight', { position: [5, 180, -40] }),
						(0, p.jsx)('pointLight', { position: [5, 20, 90] }),
						(0, p.jsx)(h.qA, { preset: 'city' }),
						(0, p.jsx)(o.Suspense, {
							fallback: null,
							children: (0, p.jsx)(u, {})
						}),
						(0, p.jsx)(c.z, {
							autoRotate: !0,
							autoRotateSpeed: 5,
							minPolarAngle: Math.PI / 2,
							maxPolarAngle: Math.PI / 2,
							enableZoom: !1,
							minAzimuthAngle: 30
						})
					]
				});
			}
			function x(e) {
				var t = Object.assign({}, e),
					n = (0, o.useRef)(),
					i = (0, m.L)('/cypher.glb'),
					a = i.nodes,
					r = i.materials;
				return (0, p.jsx)(
					'group',
					(0, d.Z)(
						(0, d.Z)({ ref: n }, t),
						{},
						{
							dispose: null,
							position: [0, -0.45, 0],
							children: (0, p.jsx)('group', {
								position: [0, -0.45, 0],
								rotation: [Math.PI / 2, 0, 0],
								scale: 0.01,
								children: (0, p.jsxs)('group', {
									rotation: [-Math.PI, 0, 0],
									children: [
										(0, p.jsx)('primitive', { object: a._rootJoint }),
										(0, p.jsx)('skinnedMesh', {
											geometry: a.Object_6.geometry,
											material: r.TP_Gumshoe_S0_MI,
											skeleton: a.Object_6.skeleton
										})
									]
								})
							})
						}
					)
				);
			}
			function f() {
				return (0, p.jsxs)(l.Xz, {
					className: 'canvas',
					updateDefaultCamera: !0,
					camera: { fov: 40, near: 2, far: 10, z: -5 },
					children: [
						(0, p.jsx)('ambientLight', { intensity: 1 }),
						(0, p.jsx)('spotLight', { position: [5, 180, -40] }),
						(0, p.jsx)('pointLight', { position: [5, 20, 90] }),
						(0, p.jsx)(h.qA, { preset: 'city' }),
						(0, p.jsx)(o.Suspense, {
							fallback: null,
							children: (0, p.jsx)(x, {})
						}),
						(0, p.jsx)(c.z, {
							autoRotate: !0,
							autoRotateSpeed: 5,
							minPolarAngle: Math.PI / 2,
							maxPolarAngle: Math.PI / 2,
							enableZoom: !1,
							minAzimuthAngle: 30
						})
					]
				});
			}
			function y(e) {
				var t = Object.assign({}, e),
					n = (0, o.useRef)(),
					i = (0, m.L)('/gaurdsglb.glb'),
					a = i.nodes,
					r = i.materials;
				return (0, p.jsx)(
					'group',
					(0, d.Z)(
						(0, d.Z)({ ref: n }, t),
						{},
						{
							dispose: null,
							position: [0, -0.45, -0.02],
							children: (0, p.jsx)('group', {
								rotation: [-Math.PI / 2, 0, 0],
								children: (0, p.jsxs)('group', {
									rotation: [Math.PI / 2, 0, 0],
									scale: 0.01,
									children: [
										(0, p.jsx)('group', {
											position: [0, 130.33, 5.2],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.Cube002_maschera_cerchio_0.geometry,
												material: r.maschera_cerchio
											})
										}),
										(0, p.jsxs)('group', {
											position: [0, 121.4, -2.56],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: [
												(0, p.jsx)('mesh', {
													geometry: a.chest003_tuta_0.geometry,
													material: r.tuta
												}),
												(0, p.jsx)('mesh', {
													geometry: a.chest003_Material008_0.geometry,
													material: r['Material.008']
												})
											]
										}),
										(0, p.jsx)('group', {
											position: [0, 122.03, -2.74],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.chest001_tuta_0.geometry,
												material: r.tuta
											})
										}),
										(0, p.jsx)('group', {
											position: [0.04, 7.17, 8.93],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.Cube011_scarpe_0.geometry,
												material: r.scarpe
											})
										}),
										(0, p.jsx)('group', {
											position: [9.62, 3.33, 8.03],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.Cube005_scarpe_0.geometry,
												material: r.scarpe
											})
										}),
										(0, p.jsx)('group', {
											position: [10.02, 8.41, 21.1],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.NurbsCurve001_scarpe3_0.geometry,
												material: r.scarpe3
											})
										}),
										(0, p.jsx)('group', {
											position: [0, 132.69, 4.26],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.Cube018_guanti_0.geometry,
												material: r.guanti
											})
										}),
										(0, p.jsx)('group', {
											position: [0, 67.86, -0.77],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.chest002_Material012_0.geometry,
												material: r['Material.012']
											})
										}),
										(0, p.jsxs)('group', {
											position: [0, 130.33, 5.2],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: [
												(0, p.jsx)('mesh', {
													geometry: a.Cube008_mask2_0.geometry,
													material: r.mask2
												}),
												(0, p.jsx)('mesh', {
													geometry: a.Cube008_mask3_0.geometry,
													material: r.mask3
												})
											]
										}),
										(0, p.jsx)('group', {
											position: [-8.57, 64.65, 10.34],
											rotation: [-0.14, -0.35, -0.22],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.chest005_tuta_0.geometry,
												material: r.tuta
											})
										}),
										(0, p.jsx)('group', {
											position: [-8.57, 64.65, 10.34],
											rotation: [-0.14, -0.35, -0.22],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.chest006_tuta_0.geometry,
												material: r.tuta
											})
										}),
										(0, p.jsx)('group', {
											position: [0, 131.72, 2.38],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.Cube006_Material011_0.geometry,
												material: r['Material.011']
											})
										}),
										(0, p.jsx)('group', {
											position: [1.2, 66.53, 10.6],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: (0, p.jsx)('mesh', {
												geometry: a.Cube_Material003_0.geometry,
												material: r['Material.003']
											})
										}),
										(0, p.jsx)('group', {
											position: [8.08, 90.22, 10.88],
											rotation: [-Math.PI / 2, 0, 0.04],
											scale: 103.68,
											children: (0, p.jsx)('mesh', {
												geometry: a.chest018_tuta_0.geometry,
												material: r.tuta
											})
										}),
										(0, p.jsx)('group', {
											position: [17.64, 47.48, 0.51],
											rotation: [-Math.PI / 2, -0.05, 1.31],
											scale: 140.08,
											children: (0, p.jsx)('mesh', {
												geometry: a.chest019_tuta_0.geometry,
												material: r.tuta
											})
										}),
										(0, p.jsxs)('group', {
											position: [50.53, 72.21, -5.05],
											rotation: [-1.63, 0.21, 1.56],
											scale: 9.03,
											children: [
												(0, p.jsx)('group', {
													position: [0, -2.15, 1.58],
													rotation: [Math.PI / 2, 0, 0],
													children: (0, p.jsx)('mesh', {
														geometry: a.Circle021_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -3, 1.07],
													rotation: [0, 0, Math.PI / 2],
													scale: 11.08,
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube070_mitra2_0.geometry,
														material: r.mitra2
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -2.06, 1.25],
													rotation: [Math.PI / 2, 0, 0],
													children: (0, p.jsx)('mesh', {
														geometry: a.Circle022_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.17],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube071_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -2.15, 1.58],
													rotation: [Math.PI / 2, 0, 0],
													scale: 11.08,
													children: (0, p.jsx)('mesh', {
														geometry: a.Circle023_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.17],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube072_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.17],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube073_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.19],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube074_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -2.06, 1.27],
													children: (0, p.jsx)('mesh', {
														geometry: a.Circle024_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.17],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube076_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -3, 1.07],
													rotation: [0, 0, Math.PI / 2],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube077_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.17],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube078_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.17],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube079_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0.19, -0.46, 0.78],
													rotation: [-2.77, 0, 0],
													scale: 0.06,
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube080_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.17],
													scale: 11.08,
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube081_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -2.06, 1.27],
													rotation: [Math.PI / 2, 0, 0],
													children: (0, p.jsx)('mesh', {
														geometry: a.Circle025_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.17],
													scale: 11.08,
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube082_mitra_0.geometry,
														material: r.mitra
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.34, 1.19],
													scale: 11.08,
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube083_mitra2_0.geometry,
														material: r.mitra2
													})
												}),
												(0, p.jsx)('mesh', {
													geometry: a.Cube075_mitra_0.geometry,
													material: r.mitra
												})
											]
										}),
										(0, p.jsxs)('group', {
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: [
												(0, p.jsx)('primitive', { object: a._rootJoint }),
												(0, p.jsx)('group', {
													position: [0, -0.05, 1.3],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube001_maschera_triangolo_0.geometry,
														material: r.maschera_triangolo
													})
												}),
												(0, p.jsxs)('group', {
													position: [0, 0.03, 1.21],
													children: [
														(0, p.jsx)('mesh', {
															geometry: a.chest008_tuta_0.geometry,
															material: r.tuta
														}),
														(0, p.jsx)('mesh', {
															geometry: a.chest008_Material008_0.geometry,
															material: r['Material.008']
														})
													]
												}),
												(0, p.jsx)('group', {
													position: [0, 0.03, 1.22],
													children: (0, p.jsx)('mesh', {
														geometry: a.chest009_tuta_0.geometry,
														material: r.tuta
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -0.09, 0.07],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube003_scarpe_0.geometry,
														material: r.scarpe
													})
												}),
												(0, p.jsx)('group', {
													position: [0.1, -0.08, 0.03],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube004_scarpe_0.geometry,
														material: r.scarpe
													})
												}),
												(0, p.jsx)('group', {
													position: [0.1, -0.21, 0.08],
													children: (0, p.jsx)('mesh', {
														geometry: a.NurbsCurve002_scarpe3_0.geometry,
														material: r.scarpe3
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -0.04, 1.33],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube007_guanti_0.geometry,
														material: r.guanti
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.01, 0.68],
													children: (0, p.jsx)('mesh', {
														geometry: a.chest010_Material012_0.geometry,
														material: r['Material.012']
													})
												}),
												(0, p.jsxs)('group', {
													position: [0, -0.05, 1.3],
													children: [
														(0, p.jsx)('mesh', {
															geometry: a.Cube009_mask2_0.geometry,
															material: r.mask2
														}),
														(0, p.jsx)('mesh', {
															geometry: a.Cube009_mask3_0.geometry,
															material: r.mask3
														})
													]
												}),
												(0, p.jsx)('group', {
													position: [-0.09, -0.1, 0.65],
													rotation: [1.43, -0.35, -0.22],
													children: (0, p.jsx)('mesh', {
														geometry: a.chest011_tuta_0.geometry,
														material: r.tuta
													})
												}),
												(0, p.jsx)('group', {
													position: [-0.09, -0.1, 0.65],
													rotation: [1.43, -0.35, -0.22],
													children: (0, p.jsx)('mesh', {
														geometry: a.chest012_tuta_0.geometry,
														material: r.tuta
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -0.02, 1.32],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube010_Material011_0.geometry,
														material: r['Material.011']
													})
												}),
												(0, p.jsx)('group', {
													position: [0.01, -0.11, 0.67],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube012_Material003_0.geometry,
														material: r['Material.003']
													})
												}),
												(0, p.jsx)('group', {
													position: [0.08, -0.11, 0.9],
													rotation: [0, 0, 0.04],
													scale: 1.04,
													children: (0, p.jsx)('mesh', {
														geometry: a.chest013_tuta_0.geometry,
														material: r.tuta
													})
												}),
												(0, p.jsx)('group', {
													position: [0.18, -0.01, 0.47],
													rotation: [0, -0.05, 1.31],
													scale: 1.4,
													children: (0, p.jsx)('mesh', {
														geometry: a.chest014_tuta_0.geometry,
														material: r.tuta
													})
												})
											]
										}),
										(0, p.jsxs)('group', {
											rotation: [-Math.PI / 2, 0, 0],
											scale: 100,
											children: [
												(0, p.jsx)('primitive', { object: a._rootJoint_1 }),
												(0, p.jsx)('group', {
													position: [0, -0.05, 1.3],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube029_maschera_quadrato_0.geometry,
														material: r.maschera_quadrato
													})
												}),
												(0, p.jsxs)('group', {
													position: [0, 0.03, 1.21],
													children: [
														(0, p.jsx)('mesh', {
															geometry: a.chest015_tuta_0.geometry,
															material: r.tuta
														}),
														(0, p.jsx)('mesh', {
															geometry: a.chest015_Material008_0.geometry,
															material: r['Material.008']
														})
													]
												}),
												(0, p.jsx)('group', {
													position: [0, 0.03, 1.22],
													children: (0, p.jsx)('mesh', {
														geometry: a.chest016_tuta_0.geometry,
														material: r.tuta
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -0.09, 0.07],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube030_scarpe_0.geometry,
														material: r.scarpe
													})
												}),
												(0, p.jsx)('group', {
													position: [0.1, -0.08, 0.03],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube031_scarpe_0.geometry,
														material: r.scarpe
													})
												}),
												(0, p.jsx)('group', {
													position: [0.1, -0.21, 0.08],
													children: (0, p.jsx)('mesh', {
														geometry: a.NurbsCurve003_scarpe3_0.geometry,
														material: r.scarpe3
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -0.04, 1.33],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube032_guanti_0.geometry,
														material: r.guanti
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.01, 0.68],
													children: (0, p.jsx)('mesh', {
														geometry: a.chest017_Material012_0.geometry,
														material: r['Material.012']
													})
												}),
												(0, p.jsxs)('group', {
													position: [0, -0.05, 1.3],
													children: [
														(0, p.jsx)('mesh', {
															geometry: a.Cube033_mask2_0.geometry,
															material: r.mask2
														}),
														(0, p.jsx)('mesh', {
															geometry: a.Cube033_mask3_0.geometry,
															material: r.mask3
														})
													]
												}),
												(0, p.jsx)('group', {
													position: [-0.09, -0.1, 0.65],
													rotation: [1.43, -0.35, -0.22],
													children: (0, p.jsx)('mesh', {
														geometry: a.chest027_tuta_0.geometry,
														material: r.tuta
													})
												}),
												(0, p.jsx)('group', {
													position: [-0.09, -0.1, 0.65],
													rotation: [1.43, -0.35, -0.22],
													children: (0, p.jsx)('mesh', {
														geometry: a.chest028_tuta_0.geometry,
														material: r.tuta
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -0.02, 1.32],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube034_Material011_0.geometry,
														material: r['Material.011']
													})
												}),
												(0, p.jsx)('group', {
													position: [0.01, -0.11, 0.67],
													children: (0, p.jsx)('mesh', {
														geometry: a.Cube035_Material003_0.geometry,
														material: r['Material.003']
													})
												}),
												(0, p.jsx)('group', {
													position: [0.08, -0.11, 0.9],
													rotation: [0, 0, 0.04],
													scale: 1.04,
													children: (0, p.jsx)('mesh', {
														geometry: a.chest029_tuta_0.geometry,
														material: r.tuta
													})
												}),
												(0, p.jsx)('group', {
													position: [0.18, -0.01, 0.47],
													rotation: [0, -0.05, 1.31],
													scale: 1.4,
													children: (0, p.jsx)('mesh', {
														geometry: a.chest030_tuta_0.geometry,
														material: r.tuta
													})
												})
											]
										}),
										(0, p.jsxs)('group', {
											position: [0, -0.78, 29.07],
											rotation: [-Math.PI / 2, 0, 0],
											scale: 131.48,
											children: [
												(0, p.jsx)('group', {
													position: [0, 0.74, 0],
													scale: 1.05,
													children: (0, p.jsx)('mesh', {
														geometry: a.Plane001_Material001_0.geometry,
														material: r['Material.001']
													})
												}),
												(0, p.jsx)('group', {
													position: [0, -0.34, 0],
													scale: [0.45, 0.45, 1],
													children: (0, p.jsx)('mesh', {
														geometry: a.Circle001_Material001_0.geometry,
														material: r['Material.001']
													})
												}),
												(0, p.jsx)('group', {
													position: [0, 0.97, 0],
													scale: [0.45, 0.45, 0.84],
													children: (0, p.jsx)('mesh', {
														geometry: a.Circle002_Material001_0.geometry,
														material: r['Material.001']
													})
												}),
												(0, p.jsx)('mesh', {
													geometry: a.Plane002_Material001_0.geometry,
													material: r['Material.001']
												})
											]
										}),
										(0, p.jsx)('group', {
											rotation: [-Math.PI / 2, 0, 0],
											scale: [218.33, 218.33, 123.22],
											children: (0, p.jsx)('mesh', {
												geometry: a.Circle_Material_0.geometry,
												material: r.Material
											})
										})
									]
								})
							})
						}
					)
				);
			}
			function b() {
				return (0, p.jsxs)(l.Xz, {
					className: 'canvas',
					updateDefaultCamera: !0,
					camera: { fov: 60, near: 2, far: 10, z: -5 },
					children: [
						(0, p.jsx)('ambientLight', { intensity: 1 }),
						(0, p.jsx)('spotLight', { position: [5, 180, -40] }),
						(0, p.jsx)('pointLight', { position: [5, 20, 90] }),
						(0, p.jsx)(h.qA, { preset: 'city' }),
						(0, p.jsx)(o.Suspense, {
							fallback: null,
							children: (0, p.jsx)(y, {})
						}),
						(0, p.jsx)(c.z, {
							autoRotate: !0,
							autoRotateSpeed: 5,
							minPolarAngle: Math.PI / 2,
							maxPolarAngle: Math.PI / 2,
							enableZoom: !1,
							minAzimuthAngle: 30
						})
					]
				});
			}
			function j(e) {
				var t = Object.assign({}, e),
					n = (0, o.useRef)(),
					i = (0, m.L)('/bitcointhree.glb'),
					a = i.nodes,
					r = i.materials;
				return (0, p.jsx)(
					'group',
					(0, d.Z)(
						(0, d.Z)({ ref: n }, t),
						{},
						{
							dispose: null,
							children: (0, p.jsx)('group', {
								rotation: [-Math.PI / 2, 0, 0],
								children: (0, p.jsxs)('group', {
									rotation: [Math.PI / 2, 0, 0],
									children: [
										(0, p.jsx)('group', {
											position: [0, -0.45, -0.02],
											rotation: [Math.PI / 2, 0, 0],
											scale: 2.41,
											children: (0, p.jsx)('mesh', {
												geometry: a.Object_4.geometry,
												material: r['Material.001']
											})
										}),
										(0, p.jsxs)('group', {
											position: [0, -0.45, -0.02],
											rotation: [Math.PI / 2, 0, 0],
											scale: 2.41,
											children: [
												(0, p.jsx)('mesh', {
													geometry: a.Object_6.geometry,
													material: r['Material.001']
												}),
												(0, p.jsx)('mesh', {
													geometry: a.Object_7.geometry,
													material: r['Material.002']
												})
											]
										}),
										(0, p.jsxs)('group', {
											position: [0, -0.45, -0.02],
											rotation: [Math.PI / 2, 0, 0],
											scale: 2.41,
											children: [
												(0, p.jsx)('mesh', {
													geometry: a.Object_9.geometry,
													material: r['Material.001']
												}),
												(0, p.jsx)('mesh', {
													geometry: a.Object_10.geometry,
													material: r['Material.003']
												})
											]
										})
									]
								})
							})
						}
					)
				);
			}
			function w() {
				return (0, p.jsxs)(l.Xz, {
					className: 'canvas',
					updateDefaultCamera: !0,
					camera: { fov: 100, near: 0.2, far: 1e3, z: 10 },
					children: [
						(0, p.jsx)('ambientLight', { intensity: 1 }),
						(0, p.jsx)('spotLight', { position: [5, 180, -40] }),
						(0, p.jsx)('pointLight', { position: [5, 20, 90] }),
						(0, p.jsx)(h.qA, { preset: 'city' }),
						(0, p.jsx)(o.Suspense, {
							fallback: null,
							children: (0, p.jsx)(j, {})
						}),
						(0, p.jsx)(c.z, {
							autoRotate: !0,
							autoRotateSpeed: 5,
							minPolarAngle: Math.PI / 2,
							maxPolarAngle: Math.PI / 2,
							enableZoom: !1,
							minAzimuthAngle: 30
						})
					]
				});
			}
			m.L.preload('/laptop.glb'),
				m.L.preload('/cypher.glb'),
				m.L.preload('/gaurdsglb.glb'),
				m.L.preload('/bitcointhree.glb');
			var v,
				_,
				N,
				k,
				P,
				C,
				T,
				M,
				S,
				E,
				I =
					n.p +
					'static/media/binarynumber.9d30d96e72f38004142786ddeb8e3fbc.svg',
				A = n(1677),
				Z = n(168),
				R = n(6031),
				O = R.ZP.section(
					v ||
						(v = (0, Z.Z)([
							'\n  /* background-color: #1e1e1e; */\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow-x: hidden;\n  padding-top: 3rem;\n  z-index: 2;\n\n  .left {\n    position: relative;\n    height: 90%;\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* background-color: rgb(0,0,0); */\n  }\n\n  .right {\n    position: relative;\n    height: 100%;\n    width: 70%;\n    display: flex;\n  }\n\n  .threedwrapper {\n    position: absolute;\n    height: 100%;\n    width: 50%;\n    display: flex;\n    bottom: 0;\n    left: 0%;\n  }\n\n  .canvas {\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  @media (max-width: 910px) {\n    .left {\n      width: 100%;\n      z-index: 2;\n    }\n    .right {\n      width: 100%;\n      position: absolute;\n      z-index: 3;\n      display: ',
							';\n    }\n  }\n'
						])),
					function (e) {
						return e.isphoneopen ? 'flex' : 'none';
					}
				),
				z = R.ZP.div(
					_ ||
						(_ = (0, Z.Z)([
							'\n  position: relative;\n  height: 100%;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 1150px) {\n    display: ',
							';\n  }\n  @media (max-width: 910px) {\n    display: none;\n  }\n'
						])),
					function (e) {
						return e.isphoneopen ? 'none' : 'flex';
					}
				),
				L = R.ZP.div.attrs({ className: 'rightTwo' })(
					N ||
						(N = (0, Z.Z)([
							'\n  position: relative;\n  height: 100%;\n  width: 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: ',
							'\n    rotate(0deg);\n  transition: transform 0.5s ease-in-out;\n  @media (max-width: 1150px) {\n    width: 50%;\n    z-index: 5;\n  }\n  @media (max-width: 560px) {\n    width: 100%;\n  }\n'
						])),
					function (e) {
						return e.openorclose ? 'translateX(0)' : 'translateX(200%)';
					}
				),
				D = R.ZP.button(
					k ||
						(k = (0, Z.Z)([
							'\n  position: relative;\n  border: none;\n  width: 70%;\n  height:17%;\n  border-radius: 5px;\n  color: #fff;\n  background: black;\n  font-size: 1.6rem;\n  font-weight: bold;\n  /* padding: 10% 10%; */\n  margin-top: 1rem;\n  text-align: center;\n  border: 1px solid #03e9f4;\n  -webkit-box-shadow: 0px 0px 10px 0px rgba(46, 255, 171, 0.86);\n  -moz-box-shadow: 0px 0px 10px 0px rgba(46, 255, 171, 0.86);\n  box-shadow: 0px 0px 10px 0px rgba(46, 255, 171, 0.86);\n  &:hover {\n    color: rgba(46, 255, 171, 0.86);\n    text-shadow: 0px 0px 10px rgba(46, 255, 171, 0.86);\n    -webkit-box-shadow: 0px 0px 30px 0px rgba(46, 255, 171, 0.86);\n    -moz-box-shadow: 0px 0px 30px 0px rgba(46, 255, 171, 0.86);\n    box-shadow: 0px 0px 30px 0px rgba(46, 255, 171, 0.86);\n  }\n  @media (max-width: 910px) {\n    width: 70%; \n\theight: 30%;\n  }\n'
						]))
				),
				B = R.ZP.div.attrs({ className: 'rightTwo' })(
					P ||
						(P = (0, Z.Z)([
							'\n  position: absolute;\n  width: 95%;\n  height: 85%;\n  color: #fff;\n  background: ',
							';\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  left: 0%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow-x: hidden;\n  align-items: center;\n  border-radius: 60px;\n  box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4,\n    inset 0 0 5px rgba(3, 233, 244, 0.5), inset 0 0 15px rgba(3, 233, 244, 0.5),\n    inset 0 0 5px rgba(3, 233, 244, 0.5);\n  .eventlistdiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 85%;\n    width: 95%;\n  }\n\n  @media (max-width: 1150px) {\n    left: 60%;\n    background: rgba(0, 0, 0, 0.9);\n  }\n  @media (max-width: 710px) {\n    left: 50%;\n    width: 110%;\n  }\n  @media (max-width: 560px) {\n    left: 16%;\n    width: 70%;\n  }\n  @media (max-width: 440px) {\n    height: 70%;\n    width: 75%;\n    left: 13%;\n    /* font-size: 1rem; */\n    border-radius: 40px;\n  }\n'
						])),
					function (e) {
						var t = e.phoneimg;
						return t ? 'url('.concat(t, ')') : 'palevioletred';
					}
				),
				G = R.ZP.div.attrs({ className: 'tabletdiv' })(
					C ||
						(C = (0, Z.Z)([
							'\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  color: #fff;\n  display: flex;\n  background: rgba(0, 0, 0, 0.9);\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  transform: ',
							';\n  transition: all 0.7s ease-in-out;\n  z-index: 3;\n  .forclose {\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    z-index: 3;\n  }\n'
						])),
					function (e) {
						return e.isTabletOpen ? 'translateX(0)' : 'translateX(200%)';
					}
				),
				q = R.ZP.div.attrs({ className: 'tabletcont' })(
					T ||
						(T = (0, Z.Z)([
							'\n  position: relative;\n  width: 80%;\n  height: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* background: ',
							'; */\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 55px;\n  overflow-x: hidden;\n  z-index: 4;\n  border-width: 30px 35px;\n  border-style: solid;\n  border-color: #000;\n  background: #000;\n  box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4,\n    inset 0 0 5px rgba(3, 233, 244, 0.5), inset 0 0 15px rgba(3, 233, 244, 0.5),\n    inset 0 0 5px rgba(3, 233, 244, 0.5);\n  h1 {\n    position: absolute;\n    top: 10%;\n    /* font-size: 2rem; */\n    font-weight: bold;\n  }\n  @media (max-width: 850px) {\n    border-width: 17px 12px;\n    height: 78%;\n  }\n'
						])),
					function (e) {
						var t = e.tab;
						return t ? 'url('.concat(t, ')') : 'palevioletred';
					}
				),
				F = R.ZP.div.attrs({ className: 'tabletScreen' })(
					M ||
						(M = (0, Z.Z)([
							'\n  position: relative;\n  width: 94%;\n  height: 90%;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  .leftarrow {\n    position: absolute;\n    display: ',
							';\n    bottom: 5%;\n    left: 10%;\n    font-size: 40px;\n    color: #fff;\n    z-index: 5;\n    box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;\n    border-radius: 50%;\n  }\n  .rightarrow {\n    position: absolute;\n    display: ',
							';\n    bottom: 5%;\n    right: 10%;\n    font-size: 40px;\n    color: #fff;\n    z-index: 5;\n    box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 5px #03e9f4;\n    border-radius: 50%;\n  }\n  .description {\n    position: absolute;\n    height: 80%;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    transform: ',
							';\n    transition: all 0.5s ease-in-out;\n  }\n  h2 {\n    position: relative;\n    margin-bottom: 6%;\n    align-self: flex-start;\n    font-size: 2rem;\n  }\n  p {\n    position: relative;\n    align-self: center;\n    font-weight: 500;\n    /* font-size: 1.5rem; */\n  }\n  .rules {\n    position: relative;\n    height: 80%;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    transform: ',
							';\n    transition: all 0.5s ease-in-out;\n  }\n  ul {\n    position: relative;\n    list-style: "->  ";\n    list-style-position: inside;\n    height: 60%;\n    overflow-y: scroll;\n  }\n  li {\n    position: relative;\n    margin-bottom: 2%;\n    /* font-size: 1.2rem; */\n    font-weight: 500;\n  }\n  .students {\n    position: absolute;\n    height: 80%;\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transform: ',
							';\n    transition: all 0.5s ease-in-out;\n  }\n  .studentscontainer {\n    position: relative;\n    height: 30%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .name {\n    position: relative;\n    /* font-size: 1.4rem; */\n    font-weight: 700;\n\tpadding-bottom: 2%;\n  }\n  .phoneno {\n    position: relative;\n    /* font-size: 1.4rem; */\n    font-weight: 700;\n    margin-left: 1%;\n  }\n\n  @media (max-width: 1150px) {\n    p {\n      /* font-size: 1.1rem; */\n    }\n  }\n  @media (max-width: 700px) {\n    h2 {\n      font-size: 1.3rem;\n    }\n    .rules {\n      height: 60%;\n      width: 90%;\n      align-items: center;\n    }\n\t.description{\n\t\theight: 60%;\n    width: 85%;\n\t}\n    ul {\n      height: 20rem;\n      position: relative;\n      overflow-y: scroll;\n      width: 90%;\n      list-style: dot;\n    }\n    .description p {\n      height: 15rem;\n      overflow-y: scroll;\n    }\n  }\n'
						])),
					function (e) {
						return e.pageno > 1 ? 'block' : 'none';
					},
					function (e) {
						return e.pageno < 3 ? 'block' : 'none';
					},
					function (e) {
						return 1 === e.pageno ? 'translateX(0)' : 'translateX(200%)';
					},
					function (e) {
						return 2 === e.pageno ? 'translateX(0)' : 'translateX(200%)';
					},
					function (e) {
						return 3 === e.pageno ? 'translateX(0)' : 'translateX(200%)';
					}
				),
				H = R.ZP.button.attrs({ className: 'eventlist' })(
					S ||
						(S = (0, Z.Z)([
							'\n  position: relative;\n  width: 70%;\n  height: 11%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  /* font-size: 1.2rem; */\n  font-weight: bold;\n  text-shadow: 0px 0px 10px #03e9f4;\n  box-shadow: 0px 0px 10px 0px #03e9f4, inset 0px 0px 4px 0px #03e9f4;\n  background: black;\n  color: #03e9f4;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  /* transform: translateX(400%); */\n  margin: 1rem;\n  transition: all 0.5s ease-in-out;\n  &:hover {\n    background-color: #03e9f4;\n    color: #fff;\n  }\n  @media (max-width: 410px) {\n    margin: 0.6rem;\n\theight: 20%;\n  }\n'
						]))
				),
				X = R.ZP.div(
					E ||
						(E = (0, Z.Z)([
							'\n  position: absolute;\n  height: 100%;\n  width: 70%;\n  display: flex;\n  bottom: 0;\n  left: ',
							';\n  transition: all 0.5s ease-in-out;\n'
						])),
					function (e) {
						return e.openorclose ? '10%' : '40%';
					}
				),
				K = {
					id: 1,
					name: 'Coders Chemistry',
					description:
						'Groups of two can join in this event, there is no skill threshold, everyone are welcome. Before proceeding to the tasks, 2 minutes discussion time will be given. Then one should complete a physical task given by the judges and the latter should find the output for the provided usecase within 10 minutes. If the physical task is completed before the 10 minutes time limit then the winner can discuss with their peer about the use case for 2 minutes for faster completion. The twist is, after each cycle of 10 minutes, the participants should swap their places and try to finish their leftout tasks. The maximum number of swaps provided are 3',
					rules: [
						'A single Team should consist of two members. ',
						'The time limit of the task is about 30 min and should be strictly adhered to. ',
						'The 30 min is split up into three 10 minute sessions.',
						'There shall be no switching in between each session and will happen after each session finishes.',
						'Cheating and Plagiarism will lead to disqualification. ',
						'Winner of the physical task can discuss with the teammate in that 10 min for about 2 minutes only.',
						'After 10 mins the teammates should swap their roles'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Kavyapriya R',
							phoneNo: 'Phone No. 7397286229'
						},
						{
							id: 2,
							name: 'Name - Abii Aravindh R',
							phoneNo: 'Phone No. 9360051435'
						}
					]
				},
				V = {
					id: 1,
					name: 'Master Minds',
					description:
						'Groups of three can join in this event, and there will be 3 rounds the group should participate in. The three rounds are: Connections, Aptitude and Technical. After the completion of first and second round, the team has to eliminate one person in their team. Then the remaining person should face against the other teams of one in the final round where each team is given a buzzer and the fastest one to press it after a question is read gets to answer first. The team with the most number of questions answered wins.',
					rules: [
						'Each Team should consists of 3 members.',
						'After every round, a member should be eliminated from the team compulsorily.',
						'The 1st round (Connections) will comprise of 10 questions with 60 seconds time.',
						'Total time for the round - 30 min.',
						'2nd round(Aptitude) will have 5 questions with 4 minutes time to answer.',
						'Total time for this round - 40 minutes.',
						'3rd round (Technical Buzzer) will have 10 questions.',
						'Total time for this round 30 minutes'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Shyam Gopal',
							phoneNo: 'Phone No. 8610294503'
						},
						{
							id: 2,
							name: 'Name - Srilatha G',
							phoneNo: 'Phone No. 8667320763'
						}
					]
				},
				W = {
					id: 1,
					name: 'Site-ing',
					description:
						'Candidates who are interested in this event can apply individually. These candidates will undergo two rounds of coding, the first round consists of designing the frontend of a website using Figma, a vector graphics and prototyping tool, and then the second round consists of creating the backend using CSS and HTML. The catch is that during the backend development after 10 minutes have passed, the code is to be written using one hand for 5 minutes, then the user can again code with both his hands and so on...The website which is well liked by the judges wins.',
					rules: [
						'Individual Participation only. ',
						'Siteing consists of 2 Rounds.',
						'Time limits must be strictly adhered to. ',
						'Code will be checked for originality and robustness.',
						'In the 1st round, time limit is 30 mins (Figma )',
						'The website must contain atleast 1 page and section respectively.',
						'The second round time limit is 1 and a half hour. ',
						'In the second round, only the design which is created in the first round must be coded.',
						"A Navbar, footer and a main section is compulsory in creation of the website, marks will be reduced if any of these aren't present."
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Vignesh B',
							phoneNo: 'Phone No. 9361138335'
						},
						{
							id: 2,
							name: 'Name - Solomon Santhosh I',
							phoneNo: 'Phone No. 7397293940'
						}
					]
				},
				J = {
					id: 1,
					name: 'Paper Bytes',
					description:
						'This event consists of the participants preparing a presentation regarding any topic which relates towards technology. The paper presentation (document) after being finalized should be uploaded in Google Forms after registration. The presentation should be explained during the time of the event and questions will be asked regarding the topic and the participant should be openminded towards these questions',
					rules: [
						'A single Team should consist of two members. ',
						'The time limit of the task is about 30 min and should be strictly adhered to. ',
						'The 30 min is split up into three 10 minute sessions.',
						'There shall be no switching in between each session and will happen after each session finishes.',
						'Cheating and Plagiarism will lead to disqualification. ',
						'Winner of the physical task can discuss with the teammate in that 10 min for about 2 minutes only.',
						'After 10 mins the teammates should swap their roles'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Vishal Kanna AJK',
							phoneNo: 'Phone No. 8072600053'
						},
						{ id: 2, name: 'Name - Harshini', phoneNo: 'Phone No. 9080558635' }
					]
				},
				Y = {
					id: 1,
					name: 'Goose Chase',
					description:
						'This event comprises of 4 rounds and each individual participant will undergo a programming and a physical task each round. The first physical task is to select the problem statement and the programming task is to code the problem statement and find the clue provided in it. After doing a programming task, a clue will be given which will help the participant in progressing in the next rounds physical task. Then using the given clue, the next physical task is to be completed along with the programming task so that another clue will be given and so on. Each clue is linked with each other and is vital for progression, may the best win!',
					rules: [
						'Interested should participate individually.',
						'Copying of code and Plagiarism is strictly prohibited.',
						'Each clue can be used to solve the next programming problem.',
						'The time limit should be taken into consideration when participating'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Moniessh P',
							phoneNo: 'Phone No. 8220787422'
						},
						{
							id: 2,
							name: 'Name - Prasanna RV',
							phoneNo: 'Phone No. 8667057114'
						}
					]
				},
				U = {
					id: 1,
					name: 'Trojans Throttle',
					description:
						'This event consists of two subevents, and interested participants can enroll individually. The first subevent, Bravo Six Going Dark, is coding with a dark twist. 10 minutes will be provided to understand the problem statement, after that the monitor will be turned off, then you have to code without visuals for 10 minutes, after completion of 10 minutes, 30 seconds is given for code verification, doing this multiple times will cause point deduction by 5 each time done. The second subevent, Runtime Terror is where the participant will be given working java code without any errors, and they will be given 30 minutes to optimize the code.',
					rules: [
						'This comprises of 2 subevents',
						'Round 1 (Bravo 6 going dark).',
						'After the 10 min the monitor will be turned off and cannot be turned back on for the rest of the session.',
						'The player has to code the program without seeing the screen.',
						'The player can verify his code for 30 seconds each session.',
						'If the player asks to see the code again within that session, 5 points will be reduced from the 100 points he possesses.',
						'Round 2 (Run time terror)',
						'The player will be given a working Java code which has to optimize without changing the functionality.',
						'Total of 30 minutes.'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Venkateswar S',
							phoneNo: 'Phone No. 9498386608'
						},
						{ id: 2, name: 'Name - Lohith R', phoneNo: 'Phone No. 7810052277' }
					]
				},
				Q = {
					id: 1,
					name: 'Shutter Stop',
					description:
						'A completely online photography contest. The winner of the contest will be selected based on the amount of likes and poll results their photo aggregates on Trojans official Instagram page along with the judge\u2019s decision. The first and second prize winners will be notified through WhatsApp and email. Participation e-certificate will be provided to all the participants.',
					rules: [
						'Only single entry is allowed (No specific theme to be followed).',
						'Participants are allowed to use both their mobile and DSLR to take the photo.',
						'Only colour grading is allowed.',
						'Registration fee of Rs. 30 has to paid for participation.',
						'Take a screenshot of the payment featuring your name, department, year and college name.',
						'Once the payment is done, fill out the google form provided in our Instagram bio.',
						'Your photograph should not contain any watermarks (Violators will be banned from participating in the event.)',
						'Make sure that you attach the screenshot of your payment and your photograph for the competition in the google form.',
						'Total of 30 minutes.'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Sarabeswaran',
							phoneNo: 'Phone No. 8489267799'
						},
						{ id: 2, name: 'Name - Gokul', phoneNo: 'Phone No. 9345333651' }
					]
				},
				$ = {
					id: 1,
					name: 'Ship Wreck',
					description:
						'A two and half an hour individual event. A random fictional or non-fictional character will be given and the contestants will be given two mins to prepare and act as the given character.',
					rules: [
						'Characters will be only given on-spot.',
						'Unparliamentary wards are strictly prohibited. ',
						'The judges will decide the winner.'
					],
					studentCordinators: [
						{ id: 1, name: 'Name - Sid', phoneNo: 'Phone No. 9791231231' },
						{
							id: 2,
							name: 'Name - Sri Sai Raj',
							phoneNo: 'Phone No. 9176209802'
						}
					]
				},
				ee = {
					id: 1,
					name: 'Talent Fest',
					description:
						'A one and a half an hour talent showcase contest and the contestant must display their talent in a given span of time. All type of talents is welcomed. Both solo and group performances are allowed.',
					rules: [
						'Winners will be based on the quality of the performances.',
						'Offensive performance is not encouraged.'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Vaishnavi',
							phoneNo: 'Phone No. 9769038810'
						},
						{ id: 2, name: 'Name - Easwar', phoneNo: 'Phone No. 9514955029' }
					]
				},
				te = {
					id: 1,
					name: 'Squid Game',
					description:
						'More to be revealed on the day of symposium. Come and have fun!',
					rules: ['Will be announced at the start of the event.'],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Ashwin Kanna',
							phoneNo: 'Phone No. 8270011279'
						},
						{ id: 2, name: 'Name - Sugesh', phoneNo: 'Phone No. 7448354747' }
					]
				},
				ne = {
					id: 1,
					name: 'Box Cricket',
					description:
						'More to be revealed on the day of symposium. Come and have fun!',
					rules: ['Will be announced at the start of the event.'],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Selva Aswath',
							phoneNo: 'Phone No. 6384647541'
						},
						{ id: 2, name: 'Name - Gokul', phoneNo: 'Phone No. 9345333651' }
					]
				},
				ie = {
					id: 1,
					name: 'Blockchain',
					description:
						"Blockchain technology is a structure that stores transactional records, also known as the block, of the public in several databases, known as the \u201cchain,\u201d in a network connected through peer-to-peer nodes. Typically, this storage is referred to as a 'digital ledger. This technology is used in our day to day life in many ways like money transfers, financial exchanges, insurance, cryptocurrency, IOT, NFTs etc. This workshop is aimed towards the individuals who want to pursue their further education in Blockchain Technologies or towards the audience who wants to enhance their knowledge towards this subject.",
					rules: ['No rules for the workshop.'],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Abhishek ',
							phoneNo: 'Phone No. 7598535604'
						},
						{ id: 2, name: 'Name - Sumanth ', phoneNo: 'Phone No. 8247218655' }
					]
				},
				oe = {
					id: 1,
					name: 'Machine Learning',
					description:
						'Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values. This workshop will educate the interested audience to the basics of Machine Learning and can code basic programs to utilitize MI',
					rules: ['No rules for the workshop.'],
					studentCordinators: [
						{ id: 1, name: 'Name - S Sruthi', phoneNo: 'Phone No. 7871394652' },
						{ id: 2, name: 'Name - P Karthik', phoneNo: 'Phone No. 9025600359' }
					]
				},
				ae = {
					id: 1,
					name: 'BGMI',
					description:
						'Battlegrounds Mobile India is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, or as a small team of upto four.',
					rules: [
						'Every team must have 4 members, and should have a captain. ',
						'Players should bring their own devices.',
						'No interaction among teams while playing.',
						'Hacking and use of third-party software leads to disqualification.',
						'To be eligible players must be a rank of gold or above in TPP or FPP.',
						'Offensive team names will not be entertained.',
						'All games will be held in TPP squad mode.',
						'All games will be held in Erangel, Miramar, Sanhok and Vikendi.',
						'There are no pauses permitted during the game.',
						'Further rules will be provided on the day of the event.'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - Suriya Kiran',
							phoneNo: 'Phone No. 9176974758'
						},
						{
							id: 2,
							name: 'Name - Dhanush Kumar',
							phoneNo: 'Phone No. 9790871242'
						}
					]
				},
				re = {
					id: 1,
					name: 'Valorant',
					description:
						'Valorant is a tactical shooting game involving two teams with 5 players in each team. Every player can sign in and play remotely from anywhere in the world. Every game has 25 rounds and the team that wins 13 of them first wins the game. Players can choose their in-game characters called agents at the start of the game. Players can buy abilities and weapons at the start of the game.',
					rules: [
						'Event will be conducted both online and offline. ',
						'Devices should be brought by the player.',
						'No interaction among the teams while playing.',
						'Map Pool: Bind, Haven, Split, Ascent, Icebox, Breeze.',
						'Home/Away Designation: The higher seeded team will be designated as the \u201cHome\u201d team.',
						'Map Veto Process: Best of 3.',
						'Further rules will be provided on the day of the event.'
					],
					studentCordinators: [
						{
							id: 1,
							name: 'Name - HanishKhan',
							phoneNo: 'Phone No. 8870529966'
						},
						{
							id: 2,
							name: 'Name - Shyam Suraj',
							phoneNo: 'Phone No. 8925275097'
						}
					]
				},
				se = {
					id: 1,
					name: 'Free Fire Max',
					description:
						'Garena Free Fire is an online-only action-adventure battle royale game played in third person perspective. A battle royale match consists of up to 50 players parachuting onto an island in search of weapons and equipment to kill the other players. Players are free to choose their starting position and take weapons and supplies to extend their battle life.',
					rules: [
						'Teams must register with 4 members with no substitutes.',
						'Devices should be brought by the players.',
						'No interaction among teams while playing.',
						'If found hacking then the whole team would be abruptly disqualified.',
						'Players must be a minimum rank of Gold or above in Ranked or cs-ranked for participation.',
						'All participants must be present for the event on the specified time.',
						'Every Player in a team is required to have their own Free Fire account.',
						'Match restart will not be entertained in any case.',
						'Any requests for a pause or a remake will not be entertained.',
						'Further rules will be said on the day of the event.'
					],
					studentCordinators: [
						{ id: 1, name: 'Name - Ghoushik', phoneNo: 'Phone No. 8220140665' },
						{
							id: 2,
							name: 'Name - Satihsh Kumar',
							phoneNo: 'Phone No. 8072152633'
						}
					]
				},
				le = [
					{ id: 1, name: 'CODERS CHEMISTRY' },
					{ id: 1, name: 'MASTER MINDS' },
					{ id: 1, name: 'SITE-ING' },
					{ id: 1, name: 'PAPER BYTES' },
					{ id: 1, name: 'GOOSE CHASE' },
					{ id: 1, name: "TROJAN'S THROTTLE" },
					{ id: 1, name: 'TROJANSCTF' }
				],
				he = [
					{ id: 1, name: 'SHUTTER STOP' },
					{ id: 1, name: 'SHIP WRECK' },
					{ id: 1, name: 'TALENT FEST' },
					{ id: 1, name: 'SQUID GAME' },
					{ id: 1, name: 'ENNA ENNA SOLRAN PARUNGA' },
					{ id: 1, name: 'BOX CRICKET' }
				],
				ce = [
					{ id: 1, name: 'MACHINE LEARNING' },
					{ id: 1, name: 'BLOCKCHAIN' },
					{ id: 1, name: 'ENTREPRENEUR' }
				],
				de = [
					{ id: 1, name: 'VALORANT' },
					{ id: 1, name: 'BGMI' },
					{ id: 1, name: 'FREE FIRE' }
				],
				me = function (e) {
					var t = e.currentPage,
						n = e.setCurrentPage,
						a = e.clickedEvent,
						s = (e.setClickedEvent, e.isTabletOpen),
						l = e.setisTabletOpen,
						h = (e.setCurrentEvent, e.selectedEvent, e.setSelectedEvent),
						c = (0, o.useState)(''),
						d = (0, i.Z)(c, 2),
						m =
							(d[0],
							d[1],
							function (e) {
								!1 === s && (l(!0), h(e.target.innerText));
							});
					return (
						(0, o.useEffect)(
							function () {
								'technicalevents' === a
									? n(le)
									: 'nontechnicalevents' === a
									? n(he)
									: 'workshops' === a
									? n(ce)
									: 'gaming' === a && n(de);
							},
							[a]
						),
						(0, o.useEffect)(
							function () {
								var e = r.p8.timeline(),
									t =
										(r.p8.timeline(),
										document.querySelector('.rightTwo'),
										document.querySelectorAll('.eventlist'));
								e.from(t, { duration: 1, opacity: 0, ease: 'easInOut' }),
									e.to(t, { ease: 'easInOut', opacity: 1, duration: 1 });
							},
							[t]
						),
						(0, p.jsx)('div', {
							className: 'eventlistdiv',
							children: t.map(function (e, t) {
								return (0,
								p.jsx)(H, { onClick: m, children: (0, p.jsx)('h3', { className: 'heading', children: e.name }, e.id) }, t);
							})
						})
					);
				},
				pe = n.p + 'static/media/phonepng.a7fbabc7f90ba3ab711d.png',
				ue = function (e) {
					var t = e.currentPage,
						n = e.setCurrentPage,
						i = e.setClickedEvent,
						o = e.clickedEvent,
						a = e.isTabletOpen,
						r = e.setisTabletOpen,
						s = e.setCurrentEvent,
						l = e.selectedEvent,
						h = e.setSelectedEvent;
					return (0, p.jsx)(B, {
						phoneimg: pe,
						children: (0, p.jsx)(me, {
							setCurrentPage: n,
							currentPage: t,
							clickedEvent: o,
							setClickedEvent: i,
							isTabletOpen: a,
							setisTabletOpen: r,
							setCurrentEvent: s,
							selectedEvent: l,
							setSelectedEvent: h
						})
					});
				},
				ge = n.p + 'static/media/pngtablet-compressed.1b780cab489c0132e1c8.png',
				xe = n(6106),
				fe = n(8737),
				ye = function (e) {
					var t = e.currentEvent,
						n = e.isTabletOpen,
						a = (0, o.useState)(1),
						r = (0, i.Z)(a, 2),
						s = r[0],
						l = r[1];
					return (
						(0, o.useEffect)(
							function () {
								!1 === n && l(1);
							},
							[n]
						),
						(0, p.jsxs)(F, {
							pageno: s,
							children: [
								(0, p.jsx)(xe.Z, {
									onClick: function () {
										s > 1 && l(s - 1);
									},
									className: 'leftarrow'
								}),
								(0, p.jsx)(fe.Z, {
									onClick: function () {
										s < 3 && l(s + 1);
									},
									className: 'rightarrow'
								}),
								(0, p.jsxs)('div', {
									className: 'description',
									children: [
										(0, p.jsx)('h2', { children: 'Description' }),
										(0, p.jsx)('p', { children: t.description })
									]
								}),
								(0, p.jsxs)('div', {
									className: 'rules',
									children: [
										(0, p.jsx)('h2', { children: 'Rules' }),
										(0, p.jsx)('ul', {
											children: t.rules.map(function (e, t) {
												return (0, p.jsx)('li', { children: e }, t);
											})
										})
									]
								}),
								(0, p.jsxs)('div', {
									className: 'students',
									children: [
										(0, p.jsx)('h2', { children: 'Student Coordinators' }),
										t.studentCordinators.map(function (e, t) {
											return (0,
											p.jsxs)('div', { className: 'studentscontainer', children: [(0, p.jsx)('h3', { className: 'name', children: e.name }), (0, p.jsx)('h3', { className: 'phoneno', children: e.phoneNo })] }, t);
										})
									]
								})
							]
						})
					);
				},
				be = function (e) {
					var t = e.isTabletOpen,
						n = (e.setisTabletOpen, e.currentEvent);
					return (0, p.jsxs)(q, {
						tab: ge,
						children: [
							(0, p.jsx)('h1', { children: n.name }),
							(0, p.jsx)(ye, { currentEvent: n, isTabletOpen: t })
						]
					});
				},
				je = function (e) {
					var t = e.page,
						n = (0, o.useState)(le),
						l = (0, i.Z)(n, 2),
						h = l[0],
						c = l[1],
						d = (0, o.useState)(!1),
						m = (0, i.Z)(d, 2),
						u = m[0],
						x = m[1],
						y = (0, o.useState)(K),
						j = (0, i.Z)(y, 2),
						v = j[0],
						_ = j[1],
						N = (0, o.useState)(''),
						k = (0, i.Z)(N, 2),
						P = k[0],
						C = k[1],
						T = (0, o.useState)(''),
						M = (0, i.Z)(T, 2),
						S = M[0],
						E = M[1],
						Z = (0, o.useState)(!1),
						R = (0, i.Z)(Z, 2),
						B = R[0],
						q = R[1];
					(0, o.useEffect)(
						function () {
							'technicalevents' === t
								? (c(le), C('technicalevents'), x(!0))
								: 'nontechnicalevents' === t
								? (c(he), C('nontechnicalevents'), x(!0))
								: 'gaming' === t
								? (c(de), C('gaming'), x(!0))
								: 'workshops' === t && (c(ce), C('workshops'), x(!0));
						},
						[t]
					),
						(0, o.useEffect)(
							function () {
								'CODERS CHEMISTRY' === S
									? _(K)
									: 'MASTER MINDS' === S
									? _(V)
									: 'SITE-ING' === S
									? _(W)
									: 'PAPER BYTES' === S
									? _(J)
									: 'GOOSE CHASE' === S
									? _(Y)
									: "TROJAN'S THROTTLE" === S
									? _(U)
									: 'TROJANCTF' === S
									? _(K)
									: 'SHUTTER STOP' === S
									? _(Q)
									: 'SHIP WRECK' === S
									? _($)
									: 'TALENT FEST' === S
									? _(ee)
									: 'SQUID GAME' === S
									? _(te)
									: 'BOX CRICKET' === S
									? _(ne)
									: 'MACHINE LEARNING' === S
									? _(oe)
									: 'BLOCKCHAIN' === S
									? _(ie)
									: 'VALORANT' === S
									? _(re)
									: 'BGMI' === S
									? _(ae)
									: 'FREE FIRE' === S && _(se);
							},
							[S]
						);
					var F = function () {
							return 'technicalevents' === P
								? (0, p.jsx)(g, {})
								: 'nontechnicalevents' === P
								? (0, p.jsx)(b, {})
								: 'gaming' === P
								? (0, p.jsx)(f, {})
								: 'workshops' === P
								? (0, p.jsx)(w, {})
								: (0, p.jsx)(f, {});
						},
						H = function (e) {
							e.target.value !== P
								? (C(e.target.value), x(!0))
								: (x(!1), C(''));
						};
					return (0, p.jsxs)('section', {
						style: {
							height: '100vh',
							width: '100vw',
							overflow: 'hidden',
							position: 'relative'
						},
						onMouseMove: function (e) {
							r.ZP.to('.bg', {
								duration: 1,
								x: e.clientX - 150,
								y: e.clientY - 150
							});
						},
						children: [
							(0, p.jsx)(A.Z, {
								direction: 'to bottom',
								svg: I,
								color: 'rgba(3, 233, 244, 0.9)'
							}),
							(0, p.jsx)(a.q, {
								children: (0, p.jsx)('title', { children: 'EVENTS | TROJANS' })
							}),
							(0, p.jsx)(s.Z, { active: { route: 'events', scroll: 2 } }),
							(0, p.jsxs)(O, {
								isphoneopen: u,
								children: [
									(0, p.jsxs)('div', {
										className: 'left',
										children: [
											(0, p.jsx)(D, {
												value: 'technicalevents',
												onClick: H,
												children: 'Technical'
											}),
											(0, p.jsx)(D, {
												value: 'nontechnicalevents',
												onClick: H,
												children: 'Non-Technical'
											}),
											(0, p.jsx)(D, {
												value: 'gaming',
												onClick: H,
												children: 'Gaming'
											}),
											(0, p.jsx)(D, {
												value: 'workshops',
												onClick: H,
												children: 'Workshops'
											})
										]
									}),
									(0, p.jsxs)('div', {
										className: 'right',
										onClick: function (e) {
											!0 === u && window.screen.width < 910 && (x(!1), C(''));
										},
										children: [
											(0, p.jsx)(z, {
												isphoneopen: u,
												children: (0, p.jsx)(X, {
													openorclose: u,
													children: (0, p.jsx)(F, {})
												})
											}),
											(0, p.jsx)(L, {
												openorclose: u,
												children: (0, p.jsx)(ue, {
													setCurrentEvent: _,
													currentEvent: v,
													currentPage: h,
													setCurrentPage: c,
													clickedEvent: P,
													setClickedEvent: C,
													selectedEvent: S,
													setSelectedEvent: E,
													isTabletOpen: B,
													setisTabletOpen: q
												})
											})
										]
									})
								]
							}),
							(0, p.jsxs)(G, {
								isTabletOpen: B,
								setisTabletOpen: q,
								children: [
									(0, p.jsx)('div', {
										onClick: function () {
											q(!1);
										},
										className: 'forclose'
									}),
									(0, p.jsx)(be, { currentEvent: v, isTabletOpen: B })
								]
							})
						]
					});
				};
		},
		5641: function (e, t, n) {
			e.exports =
				n.p + 'static/media/trojans-compressed.7de8173127a3489592a4.png';
		}
	}
]);
//# sourceMappingURL=617.72efcd94.chunk.js.map
