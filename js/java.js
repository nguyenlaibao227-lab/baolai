// ========================================
//   SHOP SECONDHAND – java.js (full build)
//   ẢNH THẬT UNSPLASH – phân theo danh mục
// ========================================

// ===== ẢNH THEO DANH MỤC =====
// Áo thun / polo
const IMG_AOTHUN = [
    "images/thun101.jpg",
    "images/thun201.jpg",
    "images/thun301.jpg",
    "images/thun401.jpg",
    "images/thun501.jpg",
    "images/thun601.jpg",
    "images/thun701.jpg",
    "images/thun801.jpg",
    
];

// Áo sơ mi
const IMG_AOSOMI = [
   "images/somi101.jpg",
   "images/somi201.jpg",
   "images/somi301.jpg",
   "images/somi401.jpg",
   "images/somi501.jpg",
   
]

// Hoodie / sweater
const IMG_HOODIE = [
  "images/hoodie101.jpg",
   "images/hoodie201.jpg",
   "images/hoodie301.jpg",
   "images/hoodie401.jpg",
   "images/hoodie501.jpg",
   "images/hoodie601.jpg",
]
// Áo khoác
const IMG_AOKHOAC = [
  "images/khoac101.jpg",
   "images/khoac201.jpg",
   "images/khoac301.jpg",
   "images/khoac401.jpg",
   "images/khoac501.jpg",
   "images/khoac601.jpg",
];

// Quần jean
const IMG_QUANJEAN = [
  "images/qd101.jpg",
   "images/qd201.jpg",
    "images/qd301.jpg",
   "images/qd401.jpg",
    "images/qd501.jpg",
   "images/qd601.jpg",
];

// Quần kaki
const IMG_QUANKAKI = [
  "images/kaki101.jpg",
   "images/kaki201.jpg",
   "images/kaki301.jpg",
   "images/kaki401.jpg",
   "images/kaki501.jpg",
   
   
];

// Quần short
const IMG_QUANSHORT = [
  "images/qc101.jpg",
   "images/qc201.jpg",
   "images/qc301.jpg",
   "images/qc401.jpg",
   "images/qc501.jpg",
   "images/qc601.jpg",
   "images/qc701.jpg",
   "images/qc801.jpg",

];

// Giày
const IMG_GIAY = [
  "images/giay101.jpg",
   "images/giay201.jpg",
   "images/giay301.jpg",
   "images/giay401.jpg",
   "images/giay501.jpg",
  
];

// Phụ kiện
const IMG_PHUKIEN = [
 "images/phukien101.jpg",
   "images/phukien201.jpg",
   "images/phukien301.jpg",
   "images/phukien401.jpg",
   "images/phukien501.jpg",
   "images/phukien601.jpg",
  
];

// ===== 80 SẢN PHẨM =====
const allProducts = [
  // --- ÁO THUN (8) ---
  {id:1,  name:"Áo thun nam Vintage Wash",    price:150000, oldPrice:200000, category:"aothun",   badge:"Hàng Mới",   img:IMG_AOTHUN[0],  stock:5},
  {id:2,  name:"Áo mĩ trắng",        price:170000, oldPrice:200000, category:"aothun",   badge:"Sale 15%",   img:IMG_AOTHUN[1],  stock:3},
  {id:3,  name:"Áo thun mĩ oske",       price:160000, oldPrice:null,   category:"aothun",   badge:"Hàng Mới",   img:IMG_AOTHUN[2],  stock:8},
  {id:4,  name:"Áo phông basic đen",           price:140000, oldPrice:180000, category:"aothun",   badge:"Sale 22%",   img:IMG_AOTHUN[3],  stock:10},
  {id:5,  name:"Áo vigen2 xanh dương",         price:190000, oldPrice:240000, category:"aothun",   badge:"Sale 20%",   img:IMG_AOTHUN[4],  stock:4},
  {id:6,  name:"Áo thun mĩ be",        price:120000, oldPrice:null,   category:"aothun",   badge:"Hàng Mới",   img:IMG_AOTHUN[5],  stock:15},
  {id:7,  name:"Áo thun mĩ ",         price:155000, oldPrice:200000, category:"aothun",   badge:"Sale",       img:IMG_AOTHUN[6],  stock:6},
  {id:8,  name:"Áo thun black abel",           price:200000, oldPrice:280000, category:"aothun",   badge:"Sale 28%",   img:IMG_AOTHUN[7],  stock:2},
 
  // --- ÁO SƠ MI (5) ---
  {id:9, name:"Áo sơ mi đen sọc cổ điển",       price:180000, oldPrice:250000, category:"aosomi",   badge:"Sale",       img:IMG_AOSOMI[0],  stock:6},
  {id:10, name:"Áo sơ mi Oxford trắng ",          price:200000, oldPrice:260000, category:"aosomi",   badge:"Sale 23%",   img:IMG_AOSOMI[1],  stock:4},
  {id:11, name:"Áo sơ mi kẻ caro",              price:185000, oldPrice:null,   category:"aosomi",   badge:"Hàng Mới",   img:IMG_AOSOMI[2],  stock:7},
  {id:12, name:"Áo sơ mi flannel mùa đông",     price:220000, oldPrice:290000, category:"aosomi",   badge:"Sale",       img:IMG_AOSOMI[3],  stock:3},
  {id:13, name:"Áo sơ mi slim fit sọc ",         price:195000, oldPrice:250000, category:"aosomi",   badge:"Sale 22%",   img:IMG_AOSOMI[4],  stock:5},
  

  // --- HOODIE (6) ---
  {id:14, name:"Áo hoodie Oversize basic",      price:320000, oldPrice:400000, category:"hoodie",   badge:"Sale 20%",   img:IMG_HOODIE[0],  stock:5},
  {id:15, name:"Áo hoodie đen dày dặn ",              price:350000, oldPrice:450000, category:"hoodie",   badge:"Sale 22%",   img:IMG_HOODIE[1],  stock:3},
  {id:16, name:"Áo hoodie zip mát",             price:290000, oldPrice:null,   category:"hoodie",   badge:"Hàng Mới",   img:IMG_HOODIE[2],  stock:7},
  {id:17, name:"Áo hoodie graphic Retro",       price:330000, oldPrice:420000, category:"hoodie",   badge:"Sale",       img:IMG_HOODIE[3],  stock:4},
  {id:18, name:"Áo hoodie zip dày dặn",            price:310000, oldPrice:400000, category:"hoodie",   badge:"Sale",       img:IMG_HOODIE[4],  stock:6},
  {id:19, name:"Áo hoodie tay bồng",            price:340000, oldPrice:null,   category:"hoodie",   badge:"Hàng Mới",   img:IMG_HOODIE[5],  stock:5},
  

  // --- ÁO KHOÁC (8) ---
  {id:20, name:"Áo khoác dù nhẹ",              price:200000, oldPrice:null,   category:"aokhoac",  badge:"Voucher 20K",img:IMG_AOKHOAC[0], stock:5},
  {id:21, name:"Áo bomber dù",                 price:280000, oldPrice:360000, category:"aokhoac",  badge:"Sale 22%",   img:IMG_AOKHOAC[1], stock:3},
  {id:22, name:"Áo gió chống nước",            price:250000, oldPrice:320000, category:"aokhoac",  badge:"Sale",       img:IMG_AOKHOAC[2], stock:4},
  {id:23, name:"Áo denim jacket oversize",     price:320000, oldPrice:400000, category:"aokhoac",  badge:"Sale 20%",   img:IMG_AOKHOAC[3], stock:2},
  {id:24, name:"Áo blazer basic",              price:350000, oldPrice:450000, category:"aokhoac",  badge:"Sale 22%",   img:IMG_AOKHOAC[4], stock:3},
  
  // --- QUẦN JEAN (12) ---
  {id:25, name:"Quần jean Slim fit cơ bản",    price:280000, oldPrice:null,   category:"quanjean", badge:"Hàng Mới",   img:IMG_QUANJEAN[0],  stock:8},
  {id:26, name:"Quần jean rách gối",           price:310000, oldPrice:null,   category:"quanjean", badge:"Voucher 20K",img:IMG_QUANJEAN[1],  stock:5},
  {id:27, name:"Quần bò Straight classic",     price:295000, oldPrice:380000, category:"quanjean", badge:"Sale",       img:IMG_QUANJEAN[2],  stock:6},
  {id:28, name:"Quần jean Skinny stretch",     price:270000, oldPrice:350000, category:"quanjean", badge:"Sale 22%",   img:IMG_QUANJEAN[3],  stock:4},
  {id:29, name:"Quần denim Baggy wide",        price:330000, oldPrice:420000, category:"quanjean", badge:"Sale 21%",   img:IMG_QUANJEAN[4],  stock:3},
  {id:30, name:"Quần jean xanh đậm",           price:285000, oldPrice:null,   category:"quanjean", badge:"Hàng Mới",   img:IMG_QUANJEAN[5],  stock:7},
  
  // --- QUẦN KAKI (5) ---
  {id:31, name:"Quần kaki slim fit beige",     price:220000, oldPrice:280000, category:"quankaki", badge:"Sale 21%",   img:IMG_QUANKAKI[0], stock:7},
  {id:32, name:"Quần chino Navy",              price:235000, oldPrice:null,   category:"quankaki", badge:"Hàng Mới",   img:IMG_QUANKAKI[1], stock:6},
  {id:33, name:"Quần kaki đen basic",          price:210000, oldPrice:270000, category:"quankaki", badge:"Sale",       img:IMG_QUANKAKI[2], stock:8},
  {id:34, name:"Quần chino ống côn xanh",      price:245000, oldPrice:310000, category:"quankaki", badge:"Sale 21%",   img:IMG_QUANKAKI[3], stock:4},
  {id:35, name:"Quần kaki dáng ôm ",      price:260000, oldPrice:null,   category:"quankaki", badge:"Hàng Mới",   img:IMG_QUANKAKI[4], stock:5},

  // --- QUẦN SHORT (4) ---
  {id:36, name:"Quần short jean có túi",            price:150000, oldPrice:190000, category:"quanshort",badge:"Hàng Mới",   img:IMG_QUANSHORT[0], stock:10},
  {id:37, name:"Quần đùi kaki mùa kem ",  price:130000, oldPrice:170000, category:"quanshort",badge:"Sale",       img:IMG_QUANSHORT[1], stock:12},
  {id:38, name:"Quần short Jean đen ",          price:160000, oldPrice:null,   category:"quanshort",badge:"Hàng Mới",   img:IMG_QUANSHORT[2], stock:8},
  {id:39, name:"Quần shorts kaki basic",        price:145000, oldPrice:190000, category:"quanshort",badge:"Sale",       img:IMG_QUANSHORT[3], stock:9},
 

  // --- GIÀY (5) ---
  {id:40, name:"Giày jordan",      price:350000, oldPrice:450000, category:"giay",     badge:"Sale 22%",   img:IMG_GIAY[0], stock:4},
  {id:41, name:"Nike trắng",         price:380000, oldPrice:500000, category:"giay",     badge:"Sale 24%",   img:IMG_GIAY[1], stock:3},
  {id:42, name:"Giày asec",               price:420000, oldPrice:null,   category:"giay",     badge:"Hàng Mới",   img:IMG_GIAY[2], stock:2},
  {id:43, name:"Giày puma kem",           price:360000, oldPrice:460000, category:"giay",     badge:"Sale",       img:IMG_GIAY[3], stock:3},
  {id:44, name:"Giày Puma bản thường",           price:280000, oldPrice:350000, category:"giay",     badge:"Sale 20%",   img:IMG_GIAY[4], stock:5},

  // --- PHỤ KIỆN (2) ---
  {id:45, name:"Mũ bucket thêu logo r1",           price:120000, oldPrice:260000, category:"phukien",  badge:"Sale",       img:IMG_PHUKIEN[0], stock:10},
  {id:46, name:"Mũ bucket thêu logo r2",         price:95000,  oldPrice:null,   category:"phukien",  badge:"Hàng Mới",   img:IMG_PHUKIEN[1], stock:8},
  {id:47, name:"Mũ bucket thêu logo r3 ",           price:220000, oldPrice:360000, category:"phukien",  badge:"Sale",       img:IMG_PHUKIEN[0], stock:10},
  {id:48, name:"Mũ bucket thêu logo r4 ",         price:95000,  oldPrice:null,   category:"phukien",  badge:"Hàng Mới",   img:IMG_PHUKIEN[1], stock:8},
{id:49, name:"Mũ bucket thêu logo r5",           price:120000, oldPrice:160000, category:"phukien",  badge:"Sale",       img:IMG_PHUKIEN[0], stock:10},
  {id:50, name:"Mũ bucket thêu logo r6",         price:95000,  oldPrice:null,   category:"phukien",  badge:"Hàng Mới",   img:IMG_PHUKIEN[1], stock:8},
 
];

// ===== STATE =====
let currentFilter = 'all';
let currentSort   = 'default';
let displayCount  = 8;
let currentProduct = null;
let modalQty      = 1;

// ===== CART =====
let cart  = [];
let total = 0;

// ========================================
//  RENDER PRODUCTS
// ========================================
function badgeClass(badge) {
  if (badge.includes('Mới'))    return 'new-badge';
  if (badge.includes('Sale'))   return 'sale-badge';
  if (badge.includes('Voucher'))return 'voucher-badge';
  return 'new-badge';
}

function createProductCard(p) {
  const oldP = p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString('vi-VN')}đ</span>` : '';
  return `
    <div class="product" data-category="${p.category}" data-price="${p.price}" onclick="openProductModal(${p.id})" style="cursor:pointer;">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" style="object-fit:cover;height:220px;width:100%;">
        <span class="badge-product ${badgeClass(p.badge)}">${p.badge}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="product-price">
          <span class="price-now">${p.price.toLocaleString('vi-VN')}đ</span>
          ${oldP}
        </div>
        <button class="btn-cart" onclick="event.stopPropagation(); addToCart('${p.name.replace(/'/g,"\\'")}', ${p.price})">🛒 Thêm vào giỏ</button>
      </div>
    </div>`;
}

function renderProducts() {
  let list = [...allProducts];

  if (currentFilter !== 'all') {
    list = list.filter(p => p.category === currentFilter);
  }

  if (currentSort === 'asc')  list.sort((a,b) => a.price - b.price);
  if (currentSort === 'desc') list.sort((a,b) => b.price - a.price);

  const shown = list.slice(0, displayCount);
  document.getElementById('productGrid').innerHTML = shown.map(createProductCard).join('');

  const btn = document.querySelector('.btn-xem-them');
  if (btn) btn.style.display = list.length > displayCount ? 'inline-block' : 'none';
}

// ===== FILTER =====
function filter(cat) {
  currentFilter = cat;
  displayCount  = 8;
  renderProducts();
  document.querySelector('.products-section').scrollIntoView({behavior:'smooth'});
}

// ===== SORT =====
function sortProducts(val) {
  currentSort = val;
  renderProducts();
}

// ===== XEM THÊM =====
function xemThem() {
  displayCount += 8;
  renderProducts();
}

// ===== SEARCH =====
function searchProduct() {
  const q = (document.getElementById('search').value || '').toLowerCase().trim();
  if (!q) { currentFilter = 'all'; renderProducts(); return; }

  const grid = document.getElementById('productGrid');
  const results = allProducts.filter(p => p.name.toLowerCase().includes(q));
  if (!results.length) { alert('Không tìm thấy sản phẩm!'); return; }

  grid.innerHTML = results.map(createProductCard).join('');
  document.querySelector('.btn-xem-them').style.display = 'none';
  document.querySelector('.products-section').scrollIntoView({behavior:'smooth'});
}

// ========================================
//  PRODUCT DETAIL MODAL
// ========================================
function openProductModal(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  modalQty = 1;

  document.getElementById('pd-main-img').src  = p.img;
  document.getElementById('pd-name').textContent = p.name;
  document.getElementById('pd-price-now').textContent = p.price.toLocaleString('vi-VN') + 'đ';
  document.getElementById('pd-price-old').textContent = p.oldPrice ? p.oldPrice.toLocaleString('vi-VN') + 'đ' : '';
  document.getElementById('pd-stock-info').textContent = p.stock + ' sản phẩm có sẵn';
  document.getElementById('pd-qty-val').textContent = 1;

  document.getElementById('pd-btn-cart').onclick = () => { addToCart(p.name, p.price); closeProductModal(); };
  document.getElementById('pd-btn-buy').onclick  = () => { addToCart(p.name, p.price); closeProductModal(); showCart(); };

  document.getElementById('product-detail-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-detail-modal').style.display = 'none';
  document.body.style.overflow = '';
}

function changeQty(delta) {
  if (!currentProduct) return;
  modalQty = Math.max(1, Math.min(currentProduct.stock, modalQty + delta));
  document.getElementById('pd-qty-val').textContent = modalQty;
}

// ========================================
//  CART
// ========================================
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById('cartCount').textContent = cart.length;
  showToast('✅ Đã thêm ' + name);
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  document.getElementById('cartCount').textContent = cart.length;
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cartItems');
  list.innerHTML = cart.map((item, i) => `
    <li style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(200,146,42,0.15);">
      <span style="font-size:13px;">${item.name}</span>
      <span style="display:flex;align-items:center;gap:8px;">
        <span style="color:#c8922a;font-weight:bold;">${item.price.toLocaleString('vi-VN')}đ</span>
        <button onclick="removeItem(${i})" style="background:none;border:1px solid #c8922a;color:#c8922a;border-radius:4px;padding:2px 7px;cursor:pointer;font-size:12px;">Xóa</button>
      </span>
    </li>`).join('');
  document.getElementById('totalPrice').textContent = total.toLocaleString('vi-VN');
}

function showCart() {
  renderCart();
  document.getElementById('cartBox').style.display = 'block';
}

function closeCart() {
  document.getElementById('cartBox').style.display = 'none';
}

function checkout() {
  if (!cart.length) { alert('Giỏ hàng trống!'); return; }
  const isLogin = localStorage.getItem('isLogin') || localStorage.getItem('sh_current');
  if (!isLogin) {
    if (confirm('Vui lòng đăng nhập để đặt hàng. Đăng nhập ngay?')) openAuth('login');
    return;
  }
  showToast('🎉 Đặt hàng thành công! Cảm ơn bạn đã mua hàng.');
  cart = []; total = 0;
  document.getElementById('cartCount').textContent = 0;
  renderCart();
  closeCart();
}

// ========================================
//  TOAST NOTIFICATION
// ========================================
function showToast(msg) {
  let toast = document.getElementById('sh-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sh-toast';
    toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:#1a1209;color:#c8922a;padding:12px 26px;border-radius:30px;font-size:14px;font-weight:bold;z-index:99999;border:1px solid #c8922a;box-shadow:0 4px 20px rgba(0,0,0,0.4);transition:opacity 0.4s;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// ========================================
//  AUTH – Đăng ký / Đăng nhập
// ========================================
let authMode = 'register';

function openAuth(mode) {
  authMode = mode;
  document.getElementById('auth-modal').style.display = 'flex';
  updateAuthUI();
}

function closeAuth() {
  document.getElementById('auth-modal').style.display = 'none';
}

function updateAuthUI() {
  const isReg = authMode === 'register';
  document.getElementById('auth-title').textContent      = isReg ? 'Đăng ký' : 'Đăng nhập';
  document.getElementById('reg-name-field').style.display = isReg ? 'block' : 'none';
  document.getElementById('terms-group').style.display   = isReg ? 'flex' : 'none';
  document.getElementById('btn-action').textContent      = isReg ? 'Đăng ký' : 'Đăng nhập';
  document.getElementById('toggle-text').textContent     = isReg ? 'Đã có tài khoản?' : 'Chưa có tài khoản?';
}

function toggleAuth() {
  authMode = authMode === 'register' ? 'login' : 'register';
  updateAuthUI();
}

function handleAuth() {
  const email = document.getElementById('auth-email').value.trim();
  const pass  = document.getElementById('auth-pass').value.trim();
  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailOK)        { alert('Email không hợp lệ!'); return; }
  if (pass.length < 6) { alert('Mật khẩu phải từ 6 ký tự!'); return; }

  if (authMode === 'register') {
    const name  = document.getElementById('auth-name').value.trim();
    const terms = document.getElementById('terms').checked;
    if (!name)  { alert('Vui lòng nhập tên!'); return; }
    if (!terms) { alert('Vui lòng đồng ý điều khoản!'); return; }

    const users = JSON.parse(localStorage.getItem('sh_users') || '[]');
    if (users.find(u => u.email === email)) { alert('Email này đã được đăng ký!'); return; }

    users.push({ name, email, pass });
    localStorage.setItem('sh_users', JSON.stringify(users));
    localStorage.setItem('sh_current', JSON.stringify({ name, email }));
    localStorage.setItem('isLogin', 'true');
    showToast('🎉 Đăng ký thành công! Chào mừng ' + name);
    closeAuth();
    updateHeaderUser(name);
  } else {
    const users = JSON.parse(localStorage.getItem('sh_users') || '[]');
    const user  = users.find(u => u.email === email && u.pass === pass);
    if (!user) { alert('Email hoặc mật khẩu không đúng!'); return; }

    localStorage.setItem('sh_current', JSON.stringify({ name: user.name, email }));
    localStorage.setItem('isLogin', 'true');
    showToast('👋 Đăng nhập thành công! Chào ' + user.name);
    closeAuth();
    updateHeaderUser(user.name);
  }
}

function updateHeaderUser(name) {
  document.querySelectorAll('.header-action-item').forEach(b => {
    const txt = b.textContent || b.innerText;
    if (txt.includes('Đăng nhập')) {
      b.innerHTML = `<span class="action-icon">👤</span><span>${name}</span>`;
      b.onclick = () => {
        if (confirm('Đăng xuất?')) {
          localStorage.removeItem('sh_current');
          localStorage.removeItem('isLogin');
          location.reload();
        }
      };
    }
    if (txt.includes('Đăng ký')) b.style.display = 'none';
  });
}

// ========================================
//  EMAIL ĐĂNG KÝ NHẬN TIN
// ========================================
function subscribeEmail() {
  const inp = document.getElementById('subscribe-email');
  const email = inp ? inp.value.trim() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Vui lòng nhập email hợp lệ!');
    return;
  }

  const list = JSON.parse(localStorage.getItem('sh_subscribers') || '[]');
  if (list.includes(email)) { showToast('✅ Email này đã đăng ký rồi!'); return; }

  list.push(email);
  localStorage.setItem('sh_subscribers', JSON.stringify(list));
  if (inp) inp.value = '';
  showToast('✈️ Đăng ký nhận tin thành công! Cảm ơn bạn.');
}

// ========================================
//  CHÍNH SÁCH (POLICY MODAL)
// ========================================
const policies = {
  'dat-hang': {
    title: '📋 Hướng Dẫn Đặt Hàng',
    content: `
      <p><b>Bước 1:</b> Chọn sản phẩm yêu thích và nhấn <b>"Thêm vào giỏ hàng"</b> hoặc <b>"Mua ngay"</b>.</p>
      <p><b>Bước 2:</b> Kiểm tra giỏ hàng, điều chỉnh số lượng nếu cần.</p>
      <p><b>Bước 3:</b> Nhấn <b>"Đặt hàng"</b>, điền thông tin giao hàng (tên, số điện thoại, địa chỉ).</p>
      <p><b>Bước 4:</b> Chọn phương thức thanh toán (COD, VNPay, MoMo, ZaloPay...).</p>
      <p><b>Bước 5:</b> Xác nhận đơn hàng và chờ giao hàng trong 1–3 ngày làm việc.</p>
      <p style="color:#c8922a;margin-top:12px;">📞 Hỗ trợ đặt hàng: <b>0944 217 685</b> (8:30 – 22:00 hàng ngày)</p>`
  },
  'doi-tra': {
    title: '🔄 Chính Sách Đổi Trả',
    content: `
      <p><b>Thời gian đổi trả:</b> Trong vòng <b>7 ngày</b> kể từ ngày nhận hàng.</p>
      <p><b>Điều kiện đổi trả:</b></p>
      <ul style="margin-left:20px;line-height:2;">
        <li>Sản phẩm còn nguyên tem, nhãn, chưa qua sử dụng.</li>
        <li>Sản phẩm bị lỗi do nhà sản xuất.</li>
        <li>Sản phẩm giao sai mẫu, sai size so với đơn đặt hàng.</li>
      </ul>
      <p><b>Không áp dụng đổi trả:</b> Hàng sale, hàng outlet, đồ lót, phụ kiện.</p>
      <p><b>Quy trình:</b> Liên hệ hotline hoặc inbox fanpage, gửi ảnh sản phẩm lỗi, shop xác nhận và hướng dẫn gửi hàng về.</p>
      <p style="color:#c8922a;margin-top:12px;">📞 Hotline đổi trả: <b>0944 217 685</b></p>`
  },
  'bao-mat': {
    title: '🔒 Chính Sách Bảo Mật',
    content: `
      <p>Shop Secondhand cam kết bảo mật toàn bộ thông tin cá nhân của khách hàng.</p>
      <p><b>Thông tin thu thập:</b> Họ tên, email, số điện thoại, địa chỉ giao hàng phục vụ cho mục đích xử lý đơn hàng.</p>
      <p><b>Cam kết:</b></p>
      <ul style="margin-left:20px;line-height:2;">
        <li>Không chia sẻ thông tin cho bên thứ ba.</li>
        <li>Thông tin thẻ thanh toán được mã hóa bảo mật tuyệt đối.</li>
        <li>Chỉ dùng thông tin để liên hệ xử lý đơn hàng và gửi ưu đãi (nếu khách đồng ý).</li>
      </ul>
      <p>Khách hàng có quyền yêu cầu xóa hoặc cập nhật thông tin bất cứ lúc nào.</p>`
  },
  'dieu-khoan': {
    title: '📜 Điều Khoản Sử Dụng',
    content: `
      <p>Bằng việc sử dụng website, bạn đồng ý với các điều khoản sau:</p>
      <ul style="margin-left:20px;line-height:2;">
        <li>Thông tin sản phẩm được cập nhật thường xuyên, giá có thể thay đổi mà không báo trước.</li>
        <li>Hình ảnh sản phẩm có thể sai lệch đôi chút so với thực tế do ánh sáng chụp.</li>
        <li>Shop có quyền từ chối đơn hàng trong trường hợp phát hiện gian lận.</li>
        <li>Khách hàng chịu trách nhiệm về thông tin cung cấp khi đặt hàng.</li>
        <li>Mọi tranh chấp được giải quyết theo pháp luật Việt Nam.</li>
      </ul>
      <p style="color:#c8922a;margin-top:12px;">© 2026 Shop Secondhand. All rights reserved.</p>`
  },
  'chon-size': {
    title: '📏 Hướng Dẫn Chọn Size',
    content: `
      <p><b>Bảng size áo nam:</b></p>
      <table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:13px;">
        <tr style="background:#c8922a;color:#1a1209;">
          <th style="padding:8px;border:1px solid #ddd;">Size</th>
          <th style="padding:8px;border:1px solid #ddd;">Chiều cao (cm)</th>
          <th style="padding:8px;border:1px solid #ddd;">Cân nặng (kg)</th>
          <th style="padding:8px;border:1px solid #ddd;">Vòng ngực (cm)</th>
        </tr>
        <tr><td style="padding:7px;border:1px solid #ddd;text-align:center;">S</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">155–162</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">48–55</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">84–88</td></tr>
        <tr style="background:#f9f5f0;"><td style="padding:7px;border:1px solid #ddd;text-align:center;">M</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">163–168</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">55–62</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">88–92</td></tr>
        <tr><td style="padding:7px;border:1px solid #ddd;text-align:center;">L</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">168–173</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">62–70</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">92–97</td></tr>
        <tr style="background:#f9f5f0;"><td style="padding:7px;border:1px solid #ddd;text-align:center;">XL</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">173–178</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">70–78</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">97–102</td></tr>
        <tr><td style="padding:7px;border:1px solid #ddd;text-align:center;">2XL</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">178–183</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">78–88</td><td style="padding:7px;border:1px solid #ddd;text-align:center;">102–108</td></tr>
      </table>
      <p style="font-size:13px;color:#888;">💡 Tip: Nếu bạn ở ngưỡng giữa 2 size, chọn size lớn hơn để mặc thoải mái hơn.</p>`
  }
};

function openPolicy(key) {
  const pol = policies[key];
  if (!pol) return;
  document.getElementById('policy-title').textContent = pol.title;
  document.getElementById('policy-body').innerHTML = pol.content;
  document.getElementById('policy-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePolicy() {
  document.getElementById('policy-modal').style.display = 'none';
  document.body.style.overflow = '';
}

// ========================================
//  SLIDER
// ========================================
let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function changeSlide(n) { showSlide(slideIndex + n); }
function goSlide(n)     { showSlide(n); }

// ========================================
//  INIT
// ========================================
window.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  const cur = JSON.parse(localStorage.getItem('sh_current') || 'null');
  if (cur) updateHeaderUser(cur.name);

  const searchEl = document.getElementById('search');
  if (searchEl) searchEl.addEventListener('keypress', e => { if (e.key === 'Enter') searchProduct(); });

  showSlide(0);
  setInterval(() => changeSlide(1), 5000);
});