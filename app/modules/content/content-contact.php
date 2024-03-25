<?php
/*
* Contact page content
* @var $contact_tab array
* @var $careers_tab array
*/
?>
<section class="contact">
    <div class="contact__container">
        <div class="contact__tabs">
            <button class="btn btn1 active" id="1"><?php echo $contact_tab['id_name']; ?></button>
            <button class="btn btn2" id="2"><?php echo $careers_tab['id_name']; ?></button>
        </div>
        <div class="sections">
            <div class="contact__content content1 active">
                <div class="contact__content-item">
                    <?php echo $contact_tab['text']; ?>
                    <?php if ($contact_tab['image']) : ?>
                        <div class="contact__content-img">
                            <div class="contact__content-paroller" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical"></div>
                            <img src="<?php echo $contact_tab['image']['url']; ?>" alt="<?php echo $contact_tab['image']['alt']; ?>">
                        </div>
                    <?php endif; ?>
                </div>
                <div class="contact__content-item">
                    <?php echo do_shortcode('' . $contact_tab['form'] . ''); ?>
                </div>
            </div>
            <div class="contact__content content2">
                <div class="contact__content-item">
                    <?php echo $careers_tab['text']; ?>
                    <?php if ($careers_tab['image']) : ?>
                        <div class="contact__content-img">
                            <div class="contact__content-paroller" data-paroller-factor="0.2" data-paroller-type="background" data-paroller-direction="vertical"></div>
                            <img src="<?php echo $careers_tab['image']['url']; ?>" alt="<?php echo $careers_tab['image']['alt']; ?>">
                        </div>
                    <?php endif; ?>
                </div>
                <div class="contact__content-item">
                    <?php echo do_shortcode('' . $careers_tab['form'] . ''); ?>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    const buttons = document.querySelectorAll("button");
    const sections = document.querySelectorAll(".contact__content");


    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((btn) => {
                btn.classList.remove("active");
            });
            btn.classList.add("active");
            const id = btn.id;
            sections.forEach((section) => {
                section.classList.remove("active");
            });
            const req = document.getElementsByClassName(`content${id}`);
            req[0].classList.add("active");
        })
    })
</script>