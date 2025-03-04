import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import cat from "./assets/cat.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { List } from "@alfalab/core-components/list";
import { Comment } from "@alfalab/core-components/comment";
import { Link } from "@alfalab/core-components/link";

const aiLink =
  "alfabank://configurable_chat?sourceChannelId=AI5_CHAT&navigationTitle=%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%90%D1%81%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BD%D1%82&attachmentsPickerEnabled=false&suggestionsEnabled=false&welcomeMessageEnabled=false&voiceMessageEnabled=false&quotesEnabled=false";

const Redirect = () => {
  window.location.href = aiLink;

  return null;
};

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [expanded, setExpanded] = useState(false);
  const [warning, setWarning] = useState(false);

  const submit = () => {
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <Redirect />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Gap size={16} />
          <Typography.TitleResponsive
            tag="h1"
            view="medium"
            font="system"
            weight="bold"
          >
            ИИ-ассистент
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Работает в тестовом режиме
          </Typography.Text>

          <Gap size={24} />

          <img
              src={cat}
              alt="Картинка АИ"
              width={80}
              style={{
                backgroundColor: "#D6E6FF",
                borderRadius: "100%",
                padding: "5px",
              }}
          />
        </div>

        <Gap size={32} />

        <div className={appSt.products}>
          <Comment>
            Привет! Я ваш помощник с искусственным интеллектом под капотом.
          </Comment>
          <Comment>
            Могу построить вам персональную финансовую стратегию, рассказать о
            банковских продуктах и помочь накопить на мечту. А еще со мной можно
            просто поболтать.
            <Gap size={8} />
            <Typography.Text view="primary-small" color="secondary">
              Примеры вопросов:
            </Typography.Text>
            <Gap size={4} />
            <List tag="ul" marker="•" className="chatList">
              <List.Item>Кем мне быть, когда я вырасту?</List.Item>
              <List.Item>Как мне накопить на айфон?</List.Item>
              <List.Item>
                Объясни простыми словами, что такое закон Ома
              </List.Item>
            </List>
          </Comment>
        </div>
      </div>

      <Gap size={128} />
      <Gap size={16} />

      <BottomSheet
        open={warning}
        onClose={() => setWarning(false)}
        title="Внимание!"
        actionButton={
          <ButtonMobile block view="primary" onClick={submit} href={aiLink}>
            Понятно, продолжить
          </ButtonMobile>
        }
      >
        <List tag="ol">
          <List.Item>
            Не передавайте в чате свои личные данные, например, имя, номер
            телефона или данные карточки.
          </List.Item>
          <List.Item>
            Не говорите, что ответы в чате — это мнение банка, если банк это не
            подтвердил.
          </List.Item>
          <List.Item>
            Используйте ответы только для своих личных нужд.
          </List.Item>
          <List.Item>
            Проверяйте информацию в других местах, потому что нейросеть может
            ошибаться.
          </List.Item>
          <List.Item>
            Не используйте чат, чтобы нарушать правила, обманывать или
            рассказывать ложную информацию.
          </List.Item>
        </List>
      </BottomSheet>

      <BottomSheet
        open={expanded}
        onClose={() => setExpanded(false)}
        title="Правила использования «ИИ Ассистента» (Сервис)"
      >
        <Typography.Text view="primary-medium">
          В Сервисе задействованы нейронные сети (генеративный искусственный
          интеллект).
        </Typography.Text>
        <Gap size={4} />
        <Typography.Text view="primary-medium">
          При использовании Сервиса я обязуюсь:
        </Typography.Text>
        <Gap size={4} />
        <List tag="ul" marker="-">
          <List.Item>
            не размещать, не загружать и не раскрывать каким-либо образом личную
            и конфиденциальную информацию, включая сведения, содержащие
            банковскую тайну, и персональные данные (ФИО, номер счета, номер и
            иные реквизиты карты, номер телефона и др.);
          </List.Item>
          <List.Item>
            ответы (результаты), полученные в рамках Сервиса, адаптировать под
            собственные нужды;
          </List.Item>
          <List.Item>
            при использовании ответов, полученных в рамках Сервиса, не
            указывать, что ответы получены от Банка или являются позицией Банка;
          </List.Item>
          <List.Item>
            проверять информацию в других источниках из-за возможных ошибок
            искусственного интеллекта;
          </List.Item>
          <List.Item>
            не использовать Сервис для нарушения нормативных правовых актов,
            норм морали и нравственности, введения в заблуждение либо
            распространения недостоверной информации.
          </List.Item>
        </List>
        <Gap size={8} />
        <Typography.Text view="primary-medium">
          Я осознаю, что соблюдение данных правил необходимо для корректной
          работы Сервиса и несу ответственность за исполнение условий и
          использование Сервиса и ответов (результатов), полученных в рамках
          Сервиса.
        </Typography.Text>
      </BottomSheet>

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={() => setWarning(true)}>
          Подключить
        </ButtonMobile>
        <Gap size={8} />
        <Typography.Text view="primary-medium" color="secondary">
          Продолжая, вы соглашаетесь с
        </Typography.Text>{" "}
        <Link onClick={() => setExpanded(true)}>правилами использования.</Link>
      </div>
    </>
  );
};
