import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageOne from "../components/Pages/HomePageOne";
import HomePageTwo from "../components/Pages/HomePageTwo";
import HomePageThree from "../components/Pages/HomePageThree";
import AboutPage from "../components/Pages/AboutPage";
import ServicesPage from "../components/Pages/ServicesPage";
import SingleServicePage from "../components/Pages/SingleServicePage";
import PricingPage from "../components/Pages/PricingPage";
import FaqPage from "../components/Pages/FaqPage";
import TeamPage from "../components/Pages/TeamPage";
import ProjectsPage from "../components/Pages/ProjectsPage";
import SingleProjectsPage from "../components/Pages/SingleProjectsPage";
import CasesStudyPage from "../components/Pages/CasesStudyPage";
import CasesStudyTwoPage from "../components/Pages/CasesStudyTwoPage";
import SingleCasesStudyPage from "../components/Pages/SingleCasesStudyPage";
import TestimonialPage from "../components/Pages/TestimonialPage";
import OurClientsPage from "../components/Pages/OurClientsPage";
import CareersPage from "../components/Pages/CareersPage";
import ProductsPage from "../components/Pages/ProductsPage";
import SingleProductsPage from "../components/Pages/SingleProductsPage";
import CartPage from "../components/Pages/CartPage";
import CheckoutPage from "../components/Pages/CheckoutPage";
import AuthenticationPage from "../components/Pages/AuthenticationPage";
import ForgetPasswordPage from "../components/Pages/ForgetPasswordPage";
import MyAccountPage from "../components/Pages/MyAccountPage";
import MyOrdersPage from "../components/Pages/MyOrdersPage";
import MyAddressesPage from "../components/Pages/MyAddressesPage";
import DemoProductPage from "../components/Pages/DemoProductPage";
import FeedbackPage from "../components/Pages/FeedbackPage";
import TermsOfServicePage from "../components/Pages/TermsOfServicePage";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage";
import SearchPage from "../components/Pages/SearchPage";
import ErrorPage from "../components/Pages/ErrorPage";
import ComingSoonPage from "../components/Pages/ComingSoonPage";

import BlogPage from "../components/Pages/BlogPage";
import BlogRightSidebarPage from "../components/Pages/BlogRightSidebarPage";
import SingleBlogPage from "../components/Pages/SingleBlogPage";
import ContactPage from "../components/Pages/ContactPage";

const routes = [
  { path: "/", component: HomePageOne },
  { path: "/home-two", component: HomePageTwo },
  { path: "/home-three", component: HomePageThree },
  { path: "/about-us", component: AboutPage },
  { path: "/services", component: ServicesPage },
  { path: "/single-services", component: SingleServicePage },
  { path: "/pricing", component: PricingPage },
  { path: "/faqs", component: FaqPage },
  { path: "/our-team", component: TeamPage },
  { path: "/projects", component: ProjectsPage },
  { path: "/single-project", component: SingleProjectsPage },
  { path: "/cases", component: CasesStudyPage },
  { path: "/cases-two-columns", component: CasesStudyTwoPage },
  { path: "/single-case", component: SingleCasesStudyPage },
  { path: "/testimonial", component: TestimonialPage },
  { path: "/our-clients", component: OurClientsPage },
  { path: "/careers", component: CareersPage },
  { path: "/products", component: ProductsPage },
  { path: "/single-product", component: SingleProductsPage },
  { path: "/cart", component: CartPage },
  { path: "/checkout", component: CheckoutPage },
  { path: "/authentication", component: AuthenticationPage },
  { path: "/forget-password", component: ForgetPasswordPage },
  { path: "/my-account", component: MyAccountPage },
  { path: "/my-orders", component: MyOrdersPage },
  { path: "/my-addresses", component: MyAddressesPage },
  { path: "/demo-product", component: DemoProductPage },
  { path: "/feedback", component: FeedbackPage },
  { path: "/terms-of-service", component: TermsOfServicePage },
  { path: "/privacy-policy", component: PrivacyPolicyPage },
  { path: "/search-page", component: SearchPage },
  { path: "/:pathMatch(.*)*", component: ErrorPage },
  { path: "/coming-soon", component: ComingSoonPage },
  { path: "/blogs", component: BlogPage },
  { path: "/blogs-right-sidebar", component: BlogRightSidebarPage },
  { path: "/single-blog", component: SingleBlogPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
