import { Injectable } from '@nestjs/common';
import { chromium } from 'playwright';

@Injectable()
export class UsersService {
  async getUsers() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://blueprint.cyberlogitec.com.vn/', {
      waitUntil: 'load',
    });
    await page.content();
    await page.fill('#username', 'hoand');
    await page.fill('#password', 'qqqq1111');
    await page.click('#submit-btn');
    await page.waitForURL('https://blueprint.cyberlogitec.com.vn', {
      waitUntil: 'load',
    });
    const cookies = await page.context().cookies();
    await page.goto('https://blueprint.cyberlogitec.com.vn/UI_TAT_028', {
      waitUntil: 'load',
    });
    await page.locator('button', { hasText: 'Punch In/Out' }).click();
    await browser.close();
    return cookies;
  }
}
