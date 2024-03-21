/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "/pages/index/index" |
       "/pages/category/index" |
       "/pages/category/search" |
       "/pages/message/index" |
       "/pages/product/detail" |
       "/pages/product/list" |
       "/pages/public/login-type" |
       "/pages/public/login" |
       "/pages/public/policy" |
       "/pages/public/protocol" |
       "/pages/public/register" |
       "/pages/setting/index" |
       "/pages/user/index";
}
interface RedirectToOptions extends NavigateToOptions {}

interface SwitchTabOptions {
  url: "/pages/index/index" | "/pages/category/index" | "/pages/message/index" | "/pages/cart/index" | "/pages/user/index"
}

type ReLaunchOptions = NavigateToOptions | SwitchTabOptions;

declare interface Uni {
  navigateTo(options: UniNamespace.NavigateToOptions & NavigateToOptions): void;
  redirectTo(options: UniNamespace.RedirectToOptions & RedirectToOptions): void;
  switchTab(options: UniNamespace.SwitchTabOptions & SwitchTabOptions): void;
  reLaunch(options: UniNamespace.ReLaunchOptions & ReLaunchOptions): void;
}