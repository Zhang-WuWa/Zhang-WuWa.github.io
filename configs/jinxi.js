练度流程列表['今汐'] = {
    标题: '今汐倍率105.6 伤害116.09w',
    声骸配置: {
        "声骸-1": "44%爆伤+150攻击",
        "声骸-2": "30%属伤+100攻击",
        "声骸-3": "30%属伤+100攻击",
        "声骸-4": "18%攻击+2280生命",
        "声骸-5": "18%攻击+2280生命",
        "声骸-暴击": "42",
        "声骸-爆伤": "84",
        "声骸-大攻击": "45",
        "声骸-小攻击": "0",
        "声骸-普攻伤害加成": "0",
        "声骸-重击伤害加成": "0",
        "声骸-共鸣技能伤害加成": "45",
        "声骸-共鸣解放伤害加成": "0",
        "敌方等级": "100",
        "敌方抗性": "20"
    },
    buff_列表: {

        '角色基础': { 属性: { 暴击: 5, 爆伤: 150 } },
        // '敌方': { 属性: { 敌方等级: parseInt(参数设置.敌方等级), 抗性: parseInt(参数设置.敌方抗性) } },
        '今汐': { 属性: { 等级: 90, 基础攻击: 413 - 2, 大攻击: 12, 暴击: 8 } },
        '时和岁稔': { 属性: { 基础攻击: 588, 暴击: 24.3, 增伤: 12 } },
        '时和岁稔-24共鸣': { 属性: { 增伤: 24 }, 标签: '共鸣技能', 描述: '施放变奏技能时，自身获得【岁蕴】，使共鸣技能伤害加成提升24%，持续12秒。施放共鸣技能时，自身获得【福泽】，使共鸣技能伤害加成提升24%，持续12秒。' },
        '浮星祛暗-10增伤': { 属性: { 增伤: 10 } },
        '浮星祛暗-30增伤-变奏': { 属性: { 增伤: 30 }, 描述: '使用变奏技能登场时，衍射伤害提升30%，持续15秒' },

        '角-16共鸣': { 属性: { 增伤: 16 }, 标签: '共鸣技能' },

        '折枝-冷凝加深': { 属性: { 加深: 20 }, 标签: '冷凝', 描述: '持续14秒' },
        '折枝-共鸣技能加深': { 属性: { 加深: 25 }, 标签: '共鸣技能', 描述: '持续14秒' },

        // '守岸人-领域': { 属性: { 暴击: 12.5, 爆伤: 25 }, 描述: '星域持续时间30秒' },
        // '守岸人-延奏': { 属性: { 加深: 15 }, 描述: '队伍中的角色全伤害加深15%。最多存在30秒' },
        '维里奈-15加深': { 属性: { 加深: 15 }, 描述: '队伍中的角色全伤害加深15%。最多存在30秒' },
        '维里奈-20攻': { 属性: { 大攻击: 20 } },


        '轻云出月': { 属性: { 大攻击: 22.5 }, 描述: '使用延奏技能后，下一个登场的共鸣者攻击提升22.5%，持续15秒' },
        '无常凶鹭': { 属性: { 增伤: 12 }, 描述: '下一个变奏登场的角色伤害提升12%，持续15秒。技能冷却：20秒' },

        '隐世回光': { 属性: { 大攻击: 15 }, 描述: '自身为友方提供治疗时，全队共鸣者攻击提升15%，持续30秒' },
        '无归的谬误': { 属性: { 大攻击: 10 }, 描述: '全队角色攻击提升10%，持续20秒。技能冷却：20秒' },

        // ...声骸属性,
        "声骸-检查": { "属性": { "爆伤": 44, "小攻击": 350, "增伤": 60, "大攻击": 36 }, "标签": "检查" },
        "声骸-检查-副词条": { "属性": { "暴击": 47.7, "爆伤": 60, "大攻击": 14.35 }, "标签": "检查" },
        "声骸-检查-副词条-共鸣技能": { "属性": { "增伤": 28.9 }, "标签": "共鸣技能,检查" },
        "声骸-检查-副词条-共鸣解放": { "属性": { "增伤": 25.8 }, "标签": "共鸣解放,检查" },

        '固有-沐光-20光伤': { "属性": { "增伤": 20 } },
        '固有-凝神-变奏': { 属性: { 倍率提升: 0.5 }, 标签: '变奏,拉表', 描述: '变奏技能蟠龙清辉伤害倍率提升50%。' },

        '深塔-10抗性': { 属性: { 抗性: -10 }, 标签: '检查' }
    },
    流程: function () {

        console.log(this.buff_列表)

        this.add_buff('角色基础')
        this.add_buff('敌方属性')
        this.add_buff('今汐')
        this.add_buff('时和岁稔')
        for (const key in this.buff_列表) {
            if (!key.startsWith('声骸'))
                continue
            this.add_buff(key)
        }
        this.add_buff('浮星祛暗-10增伤')


        this.add_buff('固有-沐光-20光伤')
        this.add_buff('固有-凝神-变奏')

        for (const key in this.buff_列表) {
            if (!key.startsWith('深塔'))
                continue
            this.add_buff(key)
        }

        this.add_buff('维里奈-15加深')
        this.add_buff('维里奈-20攻')

        this.add_buff('隐世回光')
        this.add_buff('无归的谬误')

        this.add_buff('浮星祛暗-30增伤-变奏')

        this.add_action('/check 变奏 1级 5768', 0.8000 / 1e4)
        this.add_buff('时和岁稔-24共鸣', 2)

        this.add_action('/check A1 8507', 0.8862 / 1e4, '共鸣技能')
        this.add_action('/check E2 8级 9672', 1.0076 / 1e4, '共鸣技能')

        this.add_action('变奏', 1.5905)
        this.add_action('E2', 0.0987 * 4 + .2959 * 4 + .3945, '共鸣技能')
        this.add_action('A1', .8862, '共鸣技能')
        this.add_action('A2', .7797 + .2599 + .2599, '共鸣技能')
        this.add_action('A3', .9944 + .6630, '共鸣技能')
        this.add_action('A4', .1867 * 6 + .7467, '共鸣技能')
        this.add_action('E3', 1.0076 + .7557 * 2 + 2.5190, '共鸣技能')

        this.add_action('E4 小数字', .1989 * 6, '共鸣技能')
        this.add_action('E4', 3.4792 + .4454 * 50, '共鸣技能')
        this.add_action('角 11dot', .1600 * 11, '共鸣技能')

        this.add_buff('轻云出月')
        this.add_buff('无常凶鹭')
        this.add_buff('折枝-冷凝加深')
        this.add_buff('折枝-共鸣技能加深')

        this.add_buff('角-16共鸣')

        this.add_action('/check R 106863', 11.6622 / 1e4, '共鸣解放')

        this.add_action('变奏', 1.5905)
        this.add_action('R', 4.9981 + 11.6622, '共鸣解放')

        this.add_action('/check A1 12345', 0.8862 / 1e4, '共鸣技能')
        this.add_action('/check E 2771', 0.1989 / 1e4, '共鸣技能')
        this.add_action('/check 角 2229', 0.1600 / 1e4, '共鸣技能')

        this.add_action('E2', 0.0987 * 4 + .2959 * 4 + .3945, '共鸣技能')
        this.add_action('A1', .8862, '共鸣技能')
        this.add_action('A2', .7797 + .2599 + .2599, '共鸣技能')
        this.add_action('A3', .9944 + .6630, '共鸣技能')
        this.add_action('A4', .1867 * 6 + .7467, '共鸣技能')
        this.add_action('E3', 1.0076 + .7557 * 2 + 2.5190, '共鸣技能')

        this.add_action('E4 小数字', .1989 * 6, '共鸣技能')
        this.add_action('E4', 3.4792 + .4454 * 50, '共鸣技能')

        this.add_action('角', .4864 + .1946 * 5 + .4864 * 2, '共鸣技能')
        this.add_action('角 14dot', .1600 * 14, '共鸣技能')

    }

}