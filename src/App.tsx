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
        title="Правила использования ИИ-Ассистента. Важное уведомление перед использованием сервиса «ИИ Ассистента» (Сервис)."
        trimTitle={false}
      >
        <Typography.Text view="primary-medium">
          В Сервисе задействованы нейронные сети (генеративный искусственный
          интеллект).
        </Typography.Text>
        <Gap size={4} />
        <Typography.Text view="primary-medium">
          Правила использования Сервиса урегулированы в Договоре о комплексном
          банковском обслуживании физических лиц в АО «АЛЬФА-БАНК», заключенном
          мной с АО «АЛЬФА-БАНК» (Банк).
        </Typography.Text>
        <Gap size={4} />
        <Typography.Text view="primary-medium">
          Нажимая кнопку «Продолжить» я безусловно и в полном объеме принимаю
          настоящие Правила (без каких-либо изъятий и ограничений), а также
          подтверждаю ознакомление с редакцией Правил, действующей на момент
          принятия их мной (совершения указанных выше действий). В случае
          несогласия с условиями Правил я не вправе использовать Сервис.
        </Typography.Text>
        <Gap size={4} />
        <Typography.Text view="primary-medium">
          Я понимаю и принимаю, что использование Сервиса не предполагает
          обработку персональных данных каких-либо физических лиц, включая
          персональные данные специальной категории и биометрические
          персональные данные, кроме тех, которые связаны с определением меня АО
          «Альфа-Банк» (107078, город Москва, Каланчевская ул., д.27) в качестве
          лица, которое подтверждает ознакомление и принятие настоящих Правил и
          необходимы для исполнения условий настоящих Правил и которые были
          предоставлены мной при заключении Договора о комплексном банковском
          обслуживании физических лиц в АО «АЛЬФА-БАНК».
        </Typography.Text>
        <Gap size={4} />
        <Typography.Text view="primary-medium">
          Способы обработки персональных данных, указанных в абзаце выше: с
          использованием средств автоматизации или без использования таких
          средств, включая: сбор, запись, систематизацию, накопление, хранение,
          уточнение (обновление, изменение) извлечение, использование,
          блокирование, удаление, уничтожение персональных данных, а также их
          передачу (предоставление, доступ). Обработка персональных данных будет
          осуществляться в течение использования Сервиса, а после прекращения
          такового в течение сроков, предусмотренных действующим
          законодательством РФ.
        </Typography.Text>
        <Gap size={4} />
        <Typography.Text view="primary-medium" weight="bold">
          При использовании Сервиса я обязуюсь:
        </Typography.Text>
        <Gap size={4} />
        <List tag="ul" marker="-">
          <List.Item>
            не размещать, не загружать и не раскрывать каким-либо образом личную
            и конфиденциальную информацию, включая сведения, содержащие
            банковскую тайну, и персональные данные, которые в соответствии с
            законодательством РФ относятся к таковым (ФИО, данные документов,
            удостоверяющих личность, адрес электронной почты, адрес
            регистрации/проживания, номер счета, номер и иные реквизиты карты,
            номер телефона и др.), как в отношении меня, так и в отношении любых
            иных лиц;
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
        <Typography.Text view="primary-medium" weight="bold">
          Я осознаю, что соблюдение данных условий необходимо для корректной
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
