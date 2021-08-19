import {
	clearField,
	clickButton,
	clickByText,
	clickElementByText,
	enterInput,
	scrollUp,
	verifyByText,
	verifyElementIsVisible,
	waitElementToHide,
	waitUntil
} from './../utils/util';
import { OrganizationPublicPage } from '../pageobjects/OrganizationPublicPagePageObject';

export const organizationDropdownVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.organizationDropdownCss);
};

export const clickOrganizationDropdown = () => {
	clickButton(OrganizationPublicPage.organizationDropdownCss);
};

export const selectOrganization = (name: string) => {
	clickElementByText(
		OrganizationPublicPage.organizationDropdownOptionsCss,
		name
	);
};

// Add new public profile link
export const organizationNameFilterInputVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.nameFilterInputCss);
};

export const enterOrganizationNameFilterInputData = (name: string) => {
	enterInput(OrganizationPublicPage.nameFilterInputCss, name);
	waitUntil(2000);
};

export const verifyOrganizationNameTableRowContains = (text: string) => {
	verifyByText(OrganizationPublicPage.organizationNameTableCellCss, text);
};

export const selectOrganizationTableRow = () => {
	clickButton(OrganizationPublicPage.organizationTableRowCss);
};

export const manageBtnExists = () => {
	verifyElementIsVisible(OrganizationPublicPage.manageButtonCss);
};

export const manageBtnClick = () => {
	clickButton(OrganizationPublicPage.manageButtonCss);
};

export const profileLinkInputVisible = () => {
	waitUntil(3000);
	verifyElementIsVisible(OrganizationPublicPage.profileLinkInputCss);
};

export const enterProfileLinkInputData = (data: string) => {
	enterInput(OrganizationPublicPage.profileLinkInputCss, data);
};

export const saveButtonVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.saveButtonCss);
};

export const clickSaveButton = () => {
	clickButton(OrganizationPublicPage.saveButtonCss);
};

export const waitMessageToHide = () => {
	waitElementToHide(OrganizationPublicPage.toastrMessageCss);
};

// Edit public page
export const editPageButtonVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.editPageButtonCss);
};

export const clickEditPageButton = () => {
	clickButton(OrganizationPublicPage.editPageButtonCss);
};

export const companyNameInputVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.companyNameInputCss);
};

export const enterCompanyNameInputData = (data: string) => {
	enterInput(OrganizationPublicPage.companyNameInputCss, data);
};

export const companySizeInputVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.companySizeInputCss);
};

export const enterCompanySizeInputData = (data: number) => {
	clearField(OrganizationPublicPage.companySizeInputCss);
	enterInput(OrganizationPublicPage.companySizeInputCss, data);
};

export const yearFoundedInputVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.yearFoundedInputCss);
};

export const enterYearFoundedInputData = (data: number) => {
	clearField(OrganizationPublicPage.yearFoundedInputCss);
	enterInput(OrganizationPublicPage.yearFoundedInputCss, data);
};

export const bannerInputVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.bannerInputCss);
};

export const enterBannerInputData = (data: string) => {
	enterInput(OrganizationPublicPage.bannerInputCss, data);
};

export const minimumProjectSizeDropdownVisible = () => {
	verifyElementIsVisible(
		OrganizationPublicPage.minimumProjectSizeDropdownCss
	);
};

export const clickMinimumProjectSizeDropdown = () => {
	clickButton(OrganizationPublicPage.minimumProjectSizeDropdownCss);
};

export const selectMinimumProjectSizeDropdownOption = (text: string) => {
	clickByText(
		OrganizationPublicPage.minimumProjectSizeDropdownOptionsCss,
		text
	);
};

export const clientFocusDropdownVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.clientFocusDropdownCss);
};

export const clickClientFocusDropdown = () => {
	clickButton(OrganizationPublicPage.clientFocusDropdownCss);
};

export const selectClientFocusDropdownOptions = (text: string) => {
	clickByText(OrganizationPublicPage.clientFocusDropdownOptionsCss, text);
};

export const shortDescriptionVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.shortDescriptionInputCss);
};

export const enterShortDescriptionInputData = (data: string) => {
	enterInput(OrganizationPublicPage.shortDescriptionInputCss, data);
};

export const awardsTabVisible = () => {
	scrollUp(OrganizationPublicPage.cardBodyCss);
	verifyElementIsVisible(OrganizationPublicPage.awardsTabCss);
};

export const clickAwardsTab = () => {
	clickByText(OrganizationPublicPage.awardsTabCss, 'Awards');
};

export const addAwardsButtonVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.addAwardsButtonCss);
};

export const clickAwardButton = () => {
	clickButton(OrganizationPublicPage.addAwardsButtonCss);
};

export const awardNameInputVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.awardNameInputCss);
};

export const enterAwardNameInputData = (data: string) => {
	enterInput(OrganizationPublicPage.awardNameInputCss, data);
};

export const awardYearInputVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.awardYearInputCss);
};

export const enterAwardYearInputData = (data: number) => {
	enterInput(OrganizationPublicPage.awardYearInputCss, data);
};

export const awardsSaveButtonVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.awardsSaveButtonCss);
};

export const clickAwardsSaveButton = () => {
	clickButton(OrganizationPublicPage.awardsSaveButtonCss);
};

export const skillsTabVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.skillsTabCss);
};

export const clickSkillsTab = () => {
	clickByText(OrganizationPublicPage.skillsTabCss, 'Skills');
};

export const skillsDropdownVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.skillsDropdownCss);
};

export const clickSkillsDropdown = () => {
	clickButton(OrganizationPublicPage.skillsDropdownCss);
};

export const selectSkillsFromDropdownOptions = (options: string[]) => {
	options.forEach((option, index) => {
		if (index === 0) {
			clickByText(
				OrganizationPublicPage.skillsDropdownOptionsCss,
				option
			);
			return;
		}

		clickSkillsDropdown();
		clickByText(OrganizationPublicPage.skillsDropdownOptionsCss, option);
	});
};

export const languagesTabVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.languagesTabCss);
};

export const clickLanguagesTab = () => {
	clickByText(OrganizationPublicPage.languagesTabCss, 'Languages');
};

export const addLanguageButtonVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.addLanguageButtonCss);
};

export const clickAddLanguageButton = () => {
	clickButton(OrganizationPublicPage.addLanguageButtonCss);
};

export const languageDropdownVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.languageDropdownCss);
};

export const clickLanguageDropdown = () => {
	clickButton(OrganizationPublicPage.languageDropdownCss);
};

export const selectLanguageFromDropdownOptions = (text: string) => {
	clickByText(OrganizationPublicPage.languageDropdownOptionsCss, text);
};

export const languageLevelDropdownVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.languageLevelDropdownCss);
};

export const selectLanguageLevelFromDropdownOptions = (text: string) => {
	clickByText(OrganizationPublicPage.languageLevelDropdownOptionsCss, text);
};

export const clickLanguageLevelDropdown = () => {
	clickButton(OrganizationPublicPage.languageLevelDropdownCss);
};

export const languagesSaveButtonVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.languageSaveButtonCss);
};

export const clickLanguagesSaveButton = () => {
	clickButton(OrganizationPublicPage.languageSaveButtonCss);
};

export const updateButtonVisible = () => {
	verifyElementIsVisible(OrganizationPublicPage.updateButtonCss);
};

export const clickUpdateButton = () => {
	clickButton(OrganizationPublicPage.updateButtonCss);
};

// Verify public page data
export const verifyCompanyName = (text: string) => {
	verifyByText(OrganizationPublicPage.companyNameCss, text);
};

export const verifyBanner = (text: string) => {
	verifyByText(OrganizationPublicPage.bannerCss, text);
};

export const verifyCompanySize = (text: string) => {
	verifyByText(OrganizationPublicPage.companySizeCss, text);
};

export const verifyTotalClients = (text: string) => {
	verifyByText(OrganizationPublicPage.totalClientsCss, text);
};

export const verifyClientFocus = (text: string) => {
	verifyByText(OrganizationPublicPage.clientFocusCss, text);
};
