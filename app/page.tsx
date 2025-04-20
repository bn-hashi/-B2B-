import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, BarChart2, Clock, Shield, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BillCloud</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              特徴
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              料金プラン
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              よくある質問
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              お問い合わせ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary hidden sm:inline-flex">
              ログイン
            </Link>
            <Button asChild>
              <Link href="/register">無料で始める</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    クラウド請求管理を
                    <br />
                    シンプルに、正確に
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    BillCloudは、企業の請求業務を自動化し、効率化するクラウドサービスです。時間とコストを削減し、ビジネスの成長に集中できます。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="px-8">
                    <Link href="/register">
                      30日間無料トライアル
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#demo">デモを見る</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">クレジットカード不要・いつでもキャンセル可能</p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/billing-overview-dashboard.png"
                  alt="BillCloudダッシュボード"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  主な特徴
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  請求業務の効率化を実現する3つの特徴
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BillCloudは、請求書の作成から支払い管理まで、請求業務全体をカバーします。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">自動請求書生成</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    定期的な請求書を自動生成し、手作業による入力ミスを削減。テンプレートのカスタマイズも簡単です。
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>定期請求の自動化</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>カスタムテンプレート</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>一括請求処理</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">リアルタイム分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    売上や未払い金の状況をリアルタイムで把握。データに基づいた意思決定をサポートします。
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>カスタムダッシュボード</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>レポート自動生成</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>予測分析</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">セキュアな支払い管理</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    複数の支払い方法に対応し、安全な取引を実現。入金状況の自動追跡で未払いを削減します。
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>複数決済対応</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>自動入金確認</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>支払いリマインダー</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 料金表セクション */}
        <section id="pricing" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">シンプルな料金プラン</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ビジネスの規模に合わせて選べる3つのプラン。追加料金なし、隠れたコストなし。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="border-border/40 shadow-sm">
                <CardHeader>
                  <CardTitle>スタータープラン</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">¥9,800</span>
                    <span className="text-muted-foreground">/月</span>
                  </div>
                  <CardDescription>小規模ビジネス向け</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>月間100請求書まで</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>基本レポート機能</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Eメールサポート</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>2ユーザーまで</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/register?plan=starter">今すぐ始める</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-primary/40 shadow-lg relative">
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  人気
                </div>
                <CardHeader>
                  <CardTitle>ビジネスプラン</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">¥29,800</span>
                    <span className="text-muted-foreground">/月</span>
                  </div>
                  <CardDescription>成長中の企業向け</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>月間500請求書まで</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>高度な分析機能</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>優先サポート</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>10ユーザーまで</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>API連携</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/register?plan=business">今すぐ始める</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-border/40 shadow-sm">
                <CardHeader>
                  <CardTitle>エンタープライズ</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">要問合せ</span>
                  </div>
                  <CardDescription>大規模企業向け</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>無制限の請求書</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>カスタム分析ダッシュボード</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>24時間サポート</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>無制限ユーザー</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>専任アカウントマネージャー</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">お問い合わせ</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQセクション */}
        <section id="faq" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">よくある質問</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BillCloudに関するよくある質問にお答えします。
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>無料トライアルはありますか？</AccordionTrigger>
                  <AccordionContent>
                    はい、すべてのプランで30日間の無料トライアルをご利用いただけます。クレジットカード情報の入力は不要で、トライアル期間中はいつでもキャンセル可能です。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>既存の会計システムと連携できますか？</AccordionTrigger>
                  <AccordionContent>
                    はい、BillCloudは主要な会計ソフトウェア（freee、MFクラウド、QuickBooksなど）との連携が可能です。APIを通じてデータを同期し、シームレスな統合を実現します。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>請求書のテンプレートはカスタマイズできますか？</AccordionTrigger>
                  <AccordionContent>
                    もちろんです。BillCloudでは、ロゴ、色、フォント、レイアウトなど、請求書のデザインを自由にカスタマイズできます。企業のブランドに合わせた請求書を作成できます。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>データのセキュリティはどうなっていますか？</AccordionTrigger>
                  <AccordionContent>
                    BillCloudは、AES-256ビット暗号化を使用してすべてのデータを保護しています。また、SOC 2 Type
                    IIおよびISO 27001認証を取得しており、定期的なセキュリティ監査を実施しています。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>プランはいつでも変更できますか？</AccordionTrigger>
                  <AccordionContent>
                    はい、ビジネスの成長に合わせていつでもプランをアップグレードまたはダウングレードできます。変更は即時反映され、料金は日割り計算で調整されます。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>サポートはどのように受けられますか？</AccordionTrigger>
                  <AccordionContent>
                    すべてのプランでEメールサポートを提供しています。ビジネスプランではチャットサポート、エンタープライズプランでは電話サポートと専任アカウントマネージャーが付きます。また、詳細なヘルプセンターとビデオチュートリアルもご用意しています。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  請求業務の効率化を今すぐ始めましょう
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  30日間の無料トライアルで、BillCloudがあなたのビジネスにどのように役立つかをお確かめください。
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary" className="px-8">
                  <Link href="/register">
                    無料で始める
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">BillCloud</span>
              </div>
              <p className="text-sm text-muted-foreground">
                クラウド請求管理を簡単に。
                <br />
                ビジネスの成長をサポートします。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">製品</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    特徴
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                    料金プラン
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-muted-foreground hover:text-foreground">
                    連携サービス
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-muted-foreground hover:text-foreground">
                    ロードマップ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">リソース</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    ブログ
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                    ドキュメント
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground">
                    ヘルプセンター
                  </Link>
                </li>
                <li>
                  <Link href="/webinars" className="text-muted-foreground hover:text-foreground">
                    ウェビナー
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">会社情報</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    採用情報
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-muted-foreground hover:text-foreground">
                    パートナー
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between border-t pt-6">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} BillCloud株式会社. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
                利用規約
              </Link>
              <Link href="/security" className="text-xs text-muted-foreground hover:text-foreground">
                セキュリティ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
