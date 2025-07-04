//==============================================//
// ハンバーガーメニュー //
//==============================================//
var hamburger = $('.header__hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.header__hamburger-button').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('header__hamburger-menu-active');
});

// アンカーリンクをクリックしたら閉じる
$('.header__header-btn').on('click', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('header__hamburger-menu-active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('header__hamburger-menu-active');
});

//==============================================//
// Accordion
//==============================================//
$(document).ready(function() {
    // 初期状態では全ての回答を非表示にする
    $(".faq__accordion-qa .faq__answer").hide();

    // 質問（dt）がクリックされたときの処理
    $(".faq__accordion-qa .faq__question").on("click", function() {
        // クリックされた質問の次の要素（回答: dd）をスライドで表示・非表示を切り替える
        $(this).next(".faq__answer").slideToggle("fast");

        // クリックされた質問に 'open' クラスをトグルで追加・削除する
        $(this).toggleClass("is-open");
    });
});
