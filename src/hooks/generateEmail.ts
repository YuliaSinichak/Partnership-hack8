import { iSellingPoint, iOptional } from '@/types';

export const generateMessage = (name: string, sellingPoints: iSellingPoint[], optionalPoints: iOptional[], activeOptionsPriceSum: number, selligPointsPriceSum: number, totalSum: number, isDiscount: boolean): string => `<!DOCTYPE html>
    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto"
    >
      <tr
        style="
          padding: 20px;
          border-radius: 20px;
          color: white;
          background-color: #181619;
        "
      >
        <td
          style="
            padding: 20px 20px;
            display: flex;
            justify-content: space-between;
          "
        >
          <img
            src="https://drive.google.com/uc?export=download&id=1AjoqTSezC_h3bpMgqbDkrGskUM1HkIRS"
            alt="logo"
            style="width: 80%; margin: 0 auto;"
          />
        </td>
      </tr>
    </table>

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto; background-color: white"
    >
      <tr>
        <td align="center" style="padding: 20px">
          <h1 style="color: #f5a020">Вітаємо, ${name}!</h1>
          <p style="color: #262626">
            Ви на крок ближче до участі в BEC 2023 в ролі партнера!
          </p>
        </td>
      </tr>
      <tr>
        <td style="max-width: 560px; margin: 0 auto">
          <hr style="border: 2px solid #f5a020" />
        </td>
      </tr>
    </table>

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto; background-color: #fff"
    >
      <tr>
        <td style="padding: 20px">
          <h2 style="color: #f5a020">
            Ваш вибір опцій співпраці виглядає так:
          </h2>
          <table cellpadding="10" cellspacing="0" width="100%">
            <tr>
              <th
                style="text-align: left; background-color: #f5a020; color: #fff"
              >
                Назва пакету
              </th>
              <th
                style="
                  text-align: right;
                  background-color: #f5a020;
                  color: #fff;
                "
              >
                Вартість (USD)
              </th>
            </tr>

            ${sellingPoints.map(sp => `<tr>
    <td style="text-align: left">${sp.name}</td>
    <td style="text-align: right">${sp.price}</td>
  </tr>`).join('')}

            <tr>
              <td colspan="2" style="text-align: right; padding-top: 10px">
                Підсумок: $${selligPointsPriceSum}
              </td>
            </tr>
          </table>

          ${optionalPoints.filter((opt) => opt.active).length > 0
    ? `
    <table cellpadding="10" cellspacing="0" width="100%">
      <tr>
        <th
          style="text-align: left; background-color: #f5a020; color: #fff"
        >
          Назва опції
        </th>
        <th
          style="
                  text-align: right;
                  background-color: #f5a020;
                  color: #fff;
                "
        >
          Вартість (USD)
        </th>
      </tr>

      ${optionalPoints.map(op =>
      `<tr>
          <td style="text-align: left">${op.name}</td>
          <td style="text-align: right">${op.price}</td>
        </tr>`
    ).join('')}

      <tr>
        <td colspan="2" style="text-align: right; padding-top: 10px">
          Підсумок: $${activeOptionsPriceSum}
        </td>
      </tr>
    </table>`
    : ''}
    
    ${isDiscount ?
    `<p style="text-align: right; font-weight: 600;">
      Вартість після знижки (-${selligPointsPriceSum +
    activeOptionsPriceSum - totalSum}): ${totalSum}
    </p>`
    : `<p style="text-align: right; font-weight: 600;">
      Загальна вартість: ${totalSum}
    </p>`}
    
        </td >
      </tr >
    </table >

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto"
    >
      <tr>
        <td style="padding: 20px">
          <p style="color: #262626">
            1. При купівлі одразу 3-х пакетів надається знижка в розмірі 10%.
          </p>
          <p style="color: #262626">
            2. Для компаній-партнерів EBEC’2020 надається знижка в розмірі 5% на
            всі пропозиції.
          </p>
          <p style="color: #262626">
            3. Усім партнерам, що працюють у сфері military, military-tech
            знижка 10%.
          </p>
          <p style="color: #262626; font-weight: 600">
            * Знижки не поєднуються.
          </p>

          <p style="color: #262626">
            Очікуйте, зовсім скоро з вами зв'яжуться організатори проєкту для
            уточнення деталей та підтвердження участі. У випадку запитань
            звертайтесь за контактами нижче.
          </p>
          <p
            style="
              text-align: right;
              margin-top: 20px;
              color: #f5a020;
              font-weight: 600;
            "
          >
            До зустрічі на BEC'2023!
          </p>
        </td>
      </tr>
    </table>

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto"
    >
      <tr>
        <td style="padding: 20px">
          <p style="color: #262626">Мороз Вероніка,</p>
          <p style="color: #262626">відповідальна за корпоративні зв’язки</p>

          <p>
            <a style="color: #262626" href="tel:+ 380 63 870 61 97">
              + 380 63 870 61 97
            </a>
          </p>
          <p>
            <a style="color: #262626" href="mailto:veronika.moroz@best-eu.org">
              veronika.moroz@best-eu.org
            </a>
          </p>
        </td>
        <td style="padding: 20px">
          <p style="color: #262626">Гаврилко Андрій,</p>
          <p style="color: #262626">відповідальний за корпоративні зв’язки</p>
          <p>
            <a style="color: #262626" href="tel:+ +380 97 507 24 52">
              +380 97 507 24 52
            </a>
          </p>
          <p>
            <a style="color: #262626" href="mailto:andriy.havrylko@best-eu.org">
              andriy.havrylko@best-eu.org
            </a>
          </p>
        </td>
      </tr>
    </table>
`